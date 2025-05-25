const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/greet', (req, res) => {
  const { message } = req?.body || {};
  if (!message) {
    return res.status(400).json({ error: 'message is required'})
  }
  res.json({ reply: `You said: ${message}`})
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

