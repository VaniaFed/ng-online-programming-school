require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { handleError } = require('./helpers/error-handler');

const publicweb = './src/';
const port = 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicweb));
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

app.use((err, req, res) => {
  handleError(err, res);
});

app.listen(port, () => console.log(`API running on http://localhost:${port}`));
