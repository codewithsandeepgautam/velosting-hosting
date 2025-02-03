const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const Products = require('./routes/product.router');
const Domain = require('./routes/domain.router');
const Contact = require('./routes/contact.router');
const Inquiry = require('./routes/inquiry.router');
const Register = require('./routes/register.router');
const ServerInquiry = require('./routes/getInquiry.router');
const BusinessInquiry = require('./routes/businessInquiry.router');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const redis = require('redis');
const redisClient = redis.createClient({
  socket: {
    host: '103.81.159.114',
    port: 6379,
  },
});
redisClient.connect().then(() => console.log('Connected to Redis')).catch(err => console.error('Redis Connection Error:', err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI).then(resp => {
  console.log("Database Connected!")
}).catch(error => console.log("Unable to connect to DB!"));

app.get('/', function (req, res) {
  res.send('WORKING')
})
app.use('/api/products', Products);
app.use('/api/domain', Domain);
app.use('/api/contact', Contact);
app.use('/api/inquiry', Inquiry);
app.use('/api/register', Register);
app.use('/api/serverinquiry', ServerInquiry);
app.use('/api/businessinquiry', BusinessInquiry);

app.listen(process.env.PORT, () => {
  console.log('Server running on port 3500');
});
module.exports = redisClient;