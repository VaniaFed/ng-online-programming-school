const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const routes = require('./routes');

const publicweb = './src/';
const port = 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

app.listen(port, () => console.log(`API running on http://localhost:${port}`));
