var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET='test';

module.exports = {
    generateTokerForUser: function(userData){
        return jwt.sign({
            userId : userData.id,
            isAdmin : userData.isAdmin
        },
        JWT_SIGN_SECRET,
    {
        expiresIn: '1h'
    })
    }
    
}