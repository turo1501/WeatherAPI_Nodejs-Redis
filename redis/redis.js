const Redis = require("ioredis");
require("dotenv").config();

const client = new Redis('redis://localhost:6379'); // Ensure this URL is correct

client.on("error", (err) => {
  console.error("Redis error:", err);
});

client.on("connect", () => {
  console.log("Connected to Redis");
});

const getWeatherData = async (key) => {
  try {
    const data = await client.get(key);
    return data;
  } catch (err) {
    console.error("Error fetching data from Redis:", err);
    throw err;
  }
};

const setWeatherData = async (key, value, expiryInSeconds) => {
  try {
    await client.set(key, value, "EX", expiryInSeconds);
  } catch (err) {
    console.error("Error setting data in Redis:", err);
  }
};

module.exports = { getWeatherData, setWeatherData };