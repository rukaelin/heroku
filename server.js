const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const { sendTodaysCssGoodie } = require('./schedule');

const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use('/', serveStatic(path.join(__dirname, '/dist')))
  .get('/health', (req, res) => {
    sendTodaysCssGoodie();
    res.sendStatus(200)
  })
  .get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
