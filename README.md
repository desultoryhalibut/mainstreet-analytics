# Mainstreet Analytics

> Mainstreet Analytics is a real-time data visualization dashboard.   It collects data from Twitter API, Google Trends API, and NY Times API and uses AlchemyAPI sentiment analysis to provide company specific and overall market insights as a resource to help investors make investment decisions by "predicting the present."

![mainstreet-analytics-screenshot](client/assets/img/mainstreet-analytics-screenshot.png)

## Table of Contents

1. [Usage](#Usage)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Configuring API keys

You'll need to sign-up for access to Twitter API and IBM Watson AlchemyAPI to run this application.  Once you receive your keys/access tokens, follow below instructions:

```sh
- Make a copy of _config.js file (found in the server/config folder)
- Re-name the file to config.js
- Insert your Twitter API keys and access tokens
```

### Starting the Application

```sh
npm start
```

### Run tests

```sh
npm test
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
