const express = require('express')
const axios = require('axios');
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

function sendMessage(message)
  {
    axios
      .post('https://api.telegram.org/bot'+process.env.TELEGRAM_TOKEN+'/sendMessage',
        {
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message
        })
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });
  }

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .get('/telegram', async (req, res) => {
    try {
     sendMessage('test message');
     res.render('pages/index')
    } catch (err) {
      console.error(err);
      res.send('Error ' + err);
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));