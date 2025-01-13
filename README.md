# Weather Node.js & Redis Application

![Node.js](https://img.shields.io/badge/Node.js-v20.15.1-green)
![Express](https://img.shields.io/badge/Express-v4.21.2-blue)
![Redis](https://img.shields.io/badge/Redis-v7.0.0-red)
![License](https://img.shields.io/badge/License-ISC-yellow)

A simple weather application built with Node.js, Express, and Redis. This application fetches weather data from an external API and caches it using Redis to improve performance.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch weather data for a given city.
- Cache weather data using Redis to reduce API calls.
- Simple and easy-to-use REST API.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20.15.1 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Redis](https://redis.io/) (v7.0.0 or higher)

## Installation and Setup

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/weather-nodejs-redis.git
cd weather-nodejs-redis


- Install npm :
npm install
-install and setup redis 
brew install redis : 
-start redis : 
brew services start redis
-check redis running now : 
redis-cli ping
-after get weather from localhost://8000/api/weather/London , check data already have on cache Redis : 
redis-cli
Get London 
TTL London

