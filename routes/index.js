const express = require('express');
const router = express.Router();
const scraper = require('../scraper/scraper');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { locals: { results: scrapper() }});
  scraper().then(results => {
    console.log("results are ", results);
    res.render('index', {locals: { results }})
  });
});


// router.get('/search/:title', (req, res) => {
//   scrapper
//     .searchJobs(req.params.title)
//     .then(jobs => {
//       res.json(jobs)
//     })
// })
module.exports = router;
