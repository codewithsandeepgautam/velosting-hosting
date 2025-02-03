const axios = require('axios');
const redisClient = require('../server'); 

const getProducts = async (req, res) => {
    try {
        const cacheKey = 'products';
        const cachedData = await redisClient.get(cacheKey);

        if (cachedData) {
            console.log('Serving products from cache');
            return res.json(JSON.parse(cachedData));
        }
        const pLimit = (await import('p-limit')).default;
        const username = process.env.API_KEY || '';
        const password = process.env.SECRET_PASSWORD || '';
        const productCount = parseInt(process.env.PRODUCT_COUNT || '70', 10);
        if (!username || !password) {
            throw new Error('API_KEY and SECRET_PASSWORD must be set as environment variables.');
        }
        const limit = pLimit(5);
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        const fetchProducts = async (pid) => {
            try {
                const response = await axios.post(
                    'https://www.velosting.com/includes/api.php',
                    new URLSearchParams({
                        action: 'GetProducts',
                        username,
                        password,
                        pid,
                        responsetype: 'json',
                    }).toString(),
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    }
                );
                if (!response.data || typeof response.data !== 'object') {
                    throw new Error('Invalid API response');
                }
                return response.data;
            } catch (error) {
                console.error(`Error fetching products for pid ${pid}:`, error.message);
                return { pid, error: 'Error fetching products' };
            }
        };
        const results = [];
        for (let i = 0; i < productCount; i++) {
            await delay(1000); 
            const result = await limit(() => fetchProducts(i + 1));
            results.push(result);
        }
        await redisClient.setEx(cacheKey, 3600, JSON.stringify(results));
        console.log('All products fetched successfully and cached');
        res.json(results);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Error fetching products', details: error.message });
    }
};

module.exports = { getProducts };
