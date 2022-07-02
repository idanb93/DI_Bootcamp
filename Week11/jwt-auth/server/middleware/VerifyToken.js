import jwt from 'jsonwebtoken';
import Users from '../models/UsersModel.js';

export const verifyToken = (req, res, next) => {

    // get the token from the cookie, or get the cookie from one of the headers (common when using mobile-phone)
    const token = req.cookies.accessToken || 
                  req.headers['x-access-token'] ||
                  req.headers['authorization']

    // If token does not exist return 403 Unauthorized
    if (token == null) return res.status(403).json({msg: 'Unauthorized'});

    // If token exist, verify it.
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decode)=>{
        if (err) return res.status(403).json({msg: 'not a valid token'});

        // Adding another layer of security - getting the email from the token, and checking if the email exist in the db.
        try {
            const user = await Users.findAll({
                where: {
                    email: decode.email
                }
            })
            await next();
        } catch (e) {
            return res.status(403).json({msg: 'email was not found in the db'})
        }
    })
}