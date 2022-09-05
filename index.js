const express = require('express')
const axios = require('axios');
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const { sendTodaysCssGoodie } = require('./schedule');
const { sendMessage } = require('./telegram');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/health', (req, res) => {
    sendTodaysCssGoodie();
    res.sendStatus(200)
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
