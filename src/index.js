// __filename, __dirname, exports, module, and require không được sử dụng trong ES module

import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

import * as url from 'url';
    
import path from 'path';

// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static('public'));

app.use(morgan('combined'));

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/views');


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('News');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});







