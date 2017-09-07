var express = require('express')
var router = express.Router()
const app = express();


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  //res.send('Birds home page')
  res.redirect('http://google.com')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router
var birds = require('./birds')

app.use('/birds', birds)
app.listen(3000,function() {
 console.log("app is listening on port 3000");
});