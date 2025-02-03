const axios = require('axios');
const getDomain = async (req, res) => {
  const username = process.env.API_KEY;
  const password = process.env.SECRET_PASSWORD;
  const { domain } = req.body;
  if (!domain) {
    return res.status(400).json({ error: 'Domain is required' });
  }
  try {
    const response = await axios.post(
      'https://www.velosting.com/includes/api.php',
      new URLSearchParams({
        action: 'DomainWhois',
        username: username,
        password: password,
        domain,
        responsetype: 'json',
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    if (response && response.data) {
      return res.json(response.data);
    } else {
      throw new Error("No data returned from WHOIS API");
    }
  } catch (error) {
    console.error(`Error fetching WHOIS for domain ${domain}:`, error.response?.data || error.message);
    return res.status(500).json({ domain, error: 'Error fetching domain WHOIS' });
  }
};
module.exports = { getDomain };
