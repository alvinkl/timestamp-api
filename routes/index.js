const express = require('express');
const router = express.Router();
const moment = require('moment');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/:time', (req, res) => {
  let time = req.params.time;
  var result = {}

  if (!isNaN(time)) {
    result.unix = time;
    result.natural = moment.unix(time).format('MMMM DD, YYYY');
  }
  else {
    if (moment(time).isValid()) {
      result.unix = moment(time).format('X');
      result.natural = time;
    }
    else {
      result.unix = null;
      result.natural = null;
    }
  }
  res.json(result);
})

module.exports = router;
