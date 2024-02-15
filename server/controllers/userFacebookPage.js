const axios = require('axios');
const {ACCESS_TOKEN} = process.env;

const getUserPages =  async(req, res) => {
    try {
        const response = await axios.get(`https://graph.facebook.com/v11.0/me/accounts?access_token=${ACCESS_TOKEN}`);
        res.status(200).json(response.data);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
}   

module.exports = {
    getUserPages
}