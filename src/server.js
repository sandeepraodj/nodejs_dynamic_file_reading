const express = require('express');
const path = require('path');
const fs = require('fs');

//Constants
const PORT = 8000;
const MODULE_PATH = path.resolve('./src/ui-config/specifications');

// Initialize app
const app  = express();

app.get('/', (req, res) => {
  res.send('Welcome to GoodWorkLabs!')
})

app.get('/get_meta_data', (req, res) => {
  try {
    // Parameter validation
    if (!req.query.module_name || !req.query.screen_name) {
      throw Error('Module name and screen name are mandatory fields.');
    }
    // Module and screen name validation
    const screenName = `${MODULE_PATH}/${req.query.module_name}/${req.query.screen_name}.json`;
    if (fs.existsSync(`${screenName}`)) {
      const fileData = fs.readFileSync(screenName);
      const response = fileData.toString() ? JSON.parse(fileData.toString()) : 'EMPTY SCREEN';
      res.send(response);
    } else {
      throw Error('Module name or screen name is not found');
    }
    // Module validation
  } catch (error) {
    res.status(422).send(error.message)
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});
