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
 
// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

/* GET pizzas */ 
router.get('/', pizza_controlers.pizza_view_all_Page ); 
module.exports = router; 

/* GET detail pizza page */ 
router.get('/detail', pizza_controlers.pizza_view_one_Page);

/* GET create pizza page */ 
router.get('/create', secured, pizza_controlers.pizza_create_Page);

/* GET update costume page */ 
router.get('/update', secured, pizza_controlers.pizza_update_Page); 

/* GET delete pizza page */ 
router.get('/delete', secured, pizza_controlers.pizza_delete_Page);