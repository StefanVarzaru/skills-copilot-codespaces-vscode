// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Use body-parser
app.use(bodyParser.json());

// Use comments.json
const commentsPath = path.join(__dirname, 'comments.json');

// Method: GET
app.get('/comments', (req, res) => {
  fs.readFile(commentsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.send(data);
  });
});

// Method: POST
app.post('/comments', (req, res) => {
  const { body } = req;

  fs.readFile(commentsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const comments = JSON.parse(data);
    comments.push(body);

    fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.send('Comment added');
    });
  });
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server
// $ node comments.js