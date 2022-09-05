const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const { sendTodaysCssGoodie } = require('./schedule');

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
