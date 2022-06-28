var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET='ijijoreg//grekogrko';

module.exports = {
    generateTokerForUser: function(userFound){
        return jwt.sign({
            userId : userFound.userId,
            isAdmin : userFound.isAdmin
        },
        JWT_SIGN_SECRET,
    {
        expiresIn: '1h'
    })
    }, 
    parseAuthorization : function(authorization) {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },
    getUserId : function(authorization) {
        var userId = -1;
        var token = module.exports.parseAuthorization(authorization);
        console.log("le token");
        console.log(token);
        if(token != null) {
            try {
                var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                console.log("le jwtToken");
                console.log(jwtToken);
                if(jwtToken != null){
                    console.log("le jwt . user id");
                    console.log(jwtToken.userId);

                    userId = jwtToken.userId;
                }
            } catch(err){}
        }
        return userId;
    }
}