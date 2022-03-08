// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Routes

module.exports = {
    register: function(req, res){

        // Params
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var bio = req.body.bio;

        if(email == null || username == null || password == null) {
            return res.status(400).json({'error' : 'missing parameters'});
        }

        //TODO verify pseudo lengt, mail regex, password etc ..

         
        // Verify is user already exist



    },
    login: function(req, res){

    }
}