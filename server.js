const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/get-ip', (req, res) => {
  const ipAddress = req.ip;
  res.json({ ip: ipAddress });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
