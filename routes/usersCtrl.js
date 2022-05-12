// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// emailregex.com
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
//Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit. https://regexlib.com/Search.aspx?k=password&c=-1&m=-1&ps=20


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

        if(username.length >= 13 || username.length <= 4) {
            return res.status(400).json({'error' : 'wrong username (must be length 5 -12 characters'});
        }

        if(!EMAIL_REGEX.test(email)) {
            return res.status(400).json({'error' : 'email is not valid'});

        }

        if(!PASSWORD_REGEX.test(password)) {
            return res.status(400).json({'error' : 'password invalid (Password must be between 4 and 8 digits long and include at least one numeric digit.)'});

        }


        //TODO verify pseudo lengt, mail regex, password etc ..

         
        // Verify is user already exist



    },
    login: function(req, res){

    }
}