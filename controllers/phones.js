//File: controllers/phones.js
var mongoose = require('mongoose');
var Phone  = mongoose.model('Phone');

//GET - Return all Phones in the DB
exports.findAllPhones = function(req, res) {
    Phone.find(function(err, phones) {
    	if(err) res.send(500, err.message);

    	console.log('GET /phones')
	res.status(200).jsonp(phones);
	});
};

//GET - Return a Phone with specified ID
exports.findById = function(req, res) {
    Phone.findById(req.params.id, function(err, tvshow) {
        if(err) return res.send(500, err.message);

        console.log('GET /phone/' + req.params.id);
	res.status(200).jsonp(phone);
	});
};

//POST - Insert a new Phone in the DB
exports.addPhone = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var phone = new Phone({
		name:    req.body.name,
		price: 	  req.body.price
	});

	phone.save(function(err, phone) {
	    if(err) return res.status(500).send( err.message);
       	    res.status(200).jsonp(phone);
	});
};

//PUT - Update a register already exists
exports.updatePhone = function(req, res) {
    Phone.findById(req.params.id, function(err, phone) {
	phone.name   = req.body.petId;
	phone.price    = req.body.year;

	phone.save(function(err) {
	    if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(phone);
	});
    });
};


//DELETE - Delete a Phone with specified ID
exports.deletePhone = function(req, res) {
    Phone.findById(req.params.id, function(err, phone) {
	phone.remove(function(err) {
	    if(err) return res.status(500).send(err.message);
       	    res.status(200).send();
	})
    });
};
