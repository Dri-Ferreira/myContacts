const express = require('express');

const app = express();
app.get('/', (request, response) => {
  response.send('Hello word!');
});
// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server started at http:localhost:3000'));
