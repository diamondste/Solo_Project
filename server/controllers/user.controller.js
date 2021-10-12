const User  = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports =  { 

    register: (req, res) => {
        const user = new User(req.body);

        user.save()
            .then((newUser)=>{
                res.json({
                    successMessage:"Thank you for signing up!",
                    user: newUser
                })
            })
            .catch((err)=>{
                console.log("Register not successful");
                console.log(err);
                res.status(400).json(err);
            })
    },

    login: (req, res)=>{
        User.findOne({email: req.body.email})
            .then((userRecord)=>{

                if(userRecord === null){
                    res.status(400).json({message: "Invalid Login Attempt"})
                }
                else{
                    bcrypt.compare(req.body.password, userRecord.password)
                    .then((isPasswordValid)=>{
                        if(isPasswordValid){
                            console.log("Vaild Password");

                            res.cookie("usertoken",
                                jwt.sign({
                                    user_id: userRecord._id,
                                    email: userRecord.email,
                                    username: userRecord.username
                                },
                                process.env.JWT_SECRET),

                                {
                                    httpOnly: true,
                                    expries: new Date(Date.now() + 9000000)
                                }
                            )

                            .json({
                                message:"Successfully Logged in",
                                userLoggedIn: userRecord.username,
                                userId: userRecord._id
                            })
                        }

                        else {
                            res.status(400).json({message:"Login and/or Email Invaild"})
                        }
                    })

                    .catch((error)=>{
                        console.log(error);
                        res.status(400).json({message: "Invaild Attempt"});
                    })
                }
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json({message: "Invaild Attempt"});
            })
    },

    logout: (req, res) =>{
        console.log("Log out");
        res.clearCookie("usertoken");
        res.json({
            message:"You have successfully logged out!"
        })

    },

    displayOneUser: (req, res)=>{
        User.findOne({_id: req.params.id})
        .then((oneUser)=>{
            console.log(oneUser);
            res.json(oneUser);
        })
        .catch((err)=>{
            console.log(err);
            res.status(401).json(err);
        })
    }
}