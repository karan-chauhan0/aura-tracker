const userModel = require("../models/userModule");
const { oauth2client } = require("../utiles/googleConfig");
const axios = require('axios');
const jwt = require('jsonwebtoken');

const googleLogin = async (req,res) => {
    try {
        const { code } = req.query;
        const googleRes = await oauth2client.getToken(code);
        oauth2client.setCredentails(googleRes.tokens);

        const userres = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
        )
        const{ email, name, picture } = userRes.data;
        let user = await userModel.findOne({email});
        if(!user){
            user = await userModel.create({
                name, email, image: picture
            })
        }
        const { _id } = user;
        const token = jwt.sign({ _id, email}, 
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_Timeout
            }
        );
        return res.status({
            message: 'Success'.
            token,
            user
        })
    } catch (err) {
        res.status(500).json({
            message:'Internal Server Error'
        })
    }
}

module.exports = {
    googleLogin
}