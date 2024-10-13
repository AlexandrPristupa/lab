const registerUser = (req, res)=>{
    const username= req.body.username;
    const password= req.body.password;
    const email= req.body.email;

    res.json({
        success: true,
        username,
        password,
        email,
    })
}

module.exports = registerUser;
