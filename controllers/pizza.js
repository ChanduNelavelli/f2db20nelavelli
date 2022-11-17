var Pizza = require('../models/pizza'); 
 
// List of all Costumes 
exports.pizza_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pizza list'); 
}; 
 
// for a specific Costume. 
exports.pizza_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Pizza.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Costume create on POST. 
exports.pizza_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pizza create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.pizza_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pizza delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.pizza_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pizza update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.pizza_list = async function(req, res) { 
    try{ 
        thePizzas = await Pizza.find(); 
        res.send(thePizzas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.pizza_view_all_Page = async function(req, res) { 
    try{ 
        thePizzas = await Pizza.find(); 
        res.render('pizza', { title: 'Pizza Search Results', results: thePizzas }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.pizza_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Pizza(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.size = req.body.size; 
    document.crust = req.body.crust; 
    document.count = req.body.count; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume update form on PUT. 
exports.pizza_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Pizza.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.size)  
               toUpdate.size = req.body.size; 
        if(req.body.crust) toUpdate.crust = req.body.crust; 
        if(req.body.count) toUpdate.count = req.body.count; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle Costume delete on DELETE. 
exports.pizza_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Pizza.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.pizza_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Pizza.findById(req.query.id) 
        res.render('pizzadetail',  
            { title: 'Pizza Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

//Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.pizza_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('pizzacreate', { title: 'Pizza Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for updating a costume. 
// query provides the id 
exports.pizza_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Pizza.findById(req.query.id) 
        res.render('pizzaupdate', { title: 'Pizza Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle a delete one view with id from query 
exports.pizza_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Pizza.findById(req.query.id) 
        res.render('pizzadelete', { title: 'Pizza Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 