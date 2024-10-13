const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require("./Routers/userReg");
const bodyParser = require('body-parser');


app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Pages', 'sign-in.html'));
});

app.get('/sign-in', (req, res) => {
  res.sendFile(path.join(__dirname, 'Pages', 'sign-in.html'));
});

app.get('/sign-up', (req, res) => {
  res.sendFile(path.join(__dirname, 'Pages', 'sign-up.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
