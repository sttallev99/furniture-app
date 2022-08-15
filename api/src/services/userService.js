const User = require('../models/User');
const jtw = require('jsonwebtoken');

exports.register = ({email, password}) => User.create({email, password});

exports.login = async ({email, password}) => {
    let user = await User.findOne({email, password});

    if(user) {
        let token = jtw.sign({_id: user.id, email: user.email}, 'MOGUSHTSECRET');
        return { user, token }
    } else {
        throw new Error('No such user');
    }
}