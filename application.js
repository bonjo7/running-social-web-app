const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000;
const host = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const server = app.listen(port, host, () => {
  console.log(`App started at: ${new Date()} on port: ${port}`);
});
module.exports = server;