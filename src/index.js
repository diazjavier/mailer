const express = require ('express');
const path = require ('path');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/index'))
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
  console.log('Server on port 5000');
});
