// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('pizza', { title: 'Search Results' });
// });
// module.exports = router;

var express = require('express'); 
const pizza_controlers= require('../controllers/pizza'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', pizza_controlers.pizza_view_all_Page ); 
module.exports = router; 