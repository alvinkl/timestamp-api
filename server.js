const express = require('express');
const path = require('path');

const routes = require('./routes/index');

const app = express();

/* View Engine Setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// app.use((req, res, next) => {
//   let err = new Error('Not Found!');
//   err.status = 404;
//   next(err);
// });

app.listen(process.env.PORT || 8080);

module.exports = app;
