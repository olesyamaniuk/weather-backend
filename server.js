// const express = require('express');
// // const cors = require('cors');
// const axios = require('axios');
// const app = express();
// const port = 3001;
// // app.use(cors());

// app.get('/weather', async (req, res) => {
//   const { city, lat, lon } = req.query;
//   // const city = req.query.city;
//   const apiKey = '408da72949d3b14bc2a967a077c0b8f4';
//   let url = '';
  
//   if (city) {
//     url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//   } else if (lat && lon) {
//     url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
//   }

//   try {
//     const response = await axios.get(url);
//     res.json({ weatherData });
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 3001;

// app.use(cors());

// app.get('/weather', (req, res) => {
//   const city = req.query.city;
//   // Логіка отримання даних погоди для міста `city`
//   const weatherData = { city: city, temperature: '20°C', condition: 'Sunny' };
//   res.json(weatherData);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// import express from 'express';
// import axios from 'axios';
// import cors from 'cors';

// const app = express();
// const port = 3001;

// app.use(cors());

// app.get('/weather', async (req, res) => {
//   const { city, lat, lon } = req.query;
//   const apiKey = '408da72949d3b14bc2a967a077c0b8f4';
//   let url = '';

//   if (city) {
//     url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//   } else if (lat && lon) {
//     url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
//   }

//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// export default app;

import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3001;
const apiKey = '408da72949d3b14bc2a967a077c0b8f4';

app.use(cors());

app.get('/weather', async (req, res) => {
  const { city, lat, lon } = req.query;
  let url = '';

  if (city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  } else if (lat && lon) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  }

  try {
    if (!url) {
      throw new Error('Invalid parameters');
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
