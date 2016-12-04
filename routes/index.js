const express = require('express');
const router = express.Router();
const moment = require('moment');

router.get('/', (req, res) => {
  res.render('index');
  // console.log(moment.isDate(new Date('December 15, 2015')))
});

router.get('/:time', (req, res) => {
  let time = req.params.time;
  var result = {}

  if (!isNaN(time)) {
    result.unix = time;
    result.date = moment.unix(time).format('MMMM DD, YYYY');
  }
  else {
    if (moment.isDate(new Date(time))) {
      result.unix = moment(new Date(time)).format('X');
      result.date = time;
    }
    else {
      result.unix = null;
      result.date = null;
    }
  }
  res.json(result);
})

module.exports = router;
