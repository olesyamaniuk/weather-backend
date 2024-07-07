import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3000;
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
