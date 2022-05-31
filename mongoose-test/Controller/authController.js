const authModel = require('../Model/auth');
const path = require('path');
const bcrypt = require('bcryptjs');

exports.registrationForm = (req, res) => {
    let message = req.flash('error');
    console.log(message);
    if(message.length>0)
    {
        message=message[0];
    }
    else
    {
        message=null;
    }
    res.render('Auth/registration', {
        titlePage: "Registration Form",
        path: '/registration',
        errorMsg: message,
    })
}

exports.postRegistrationData = (req, res) => {
    console.log("Collected value :", req.body);
    const email = req.body.email;
    const password = req.body.pwd;
    console.log("Collected data from the registration form", email, password);
    authModel.findOne({ email: email })
        .then(userValue => {
            if (userValue) {
                console.log(userValue, "Email already exist");
                req.flash('error','Error :: Email is already registered. Please log in.');
                return res.redirect('/registration')
            }
            return bcrypt.hash(password, 12)
                .then(hashPassword => {
                    const userData = new authModel({ email: email, password: hashPassword });
                    return userData.save()
                        .then(results => {
                            console.log("Registration done");
                            return res.redirect('/login')
                        }).catch(err => {
                            console.log("Error at saving registered data", err);
                        });
                }).catch(err => {
                    console.log("Error in findOne", err);
                })
            });
        }


exports.loginForm = (req, res) => {
                let message = req.flash('error');
                console.log(message);
                if(message.length>0)
                {
                    message=message[0];
                }
                else
                {
                    message=null;
                }
                res.render('Auth/login', {
                    titlePage: "Login Form",
                    path: '/login',
                    errorMsg: message,
                })
            }

exports.postLoginData = (req, res) => {
    console.log("Collected login value :", req.body);
    const email = req.body.email;
    const password = req.body.pwd;
    console.log("Collected data from the login form", email, password);
    authModel.findOne({ email: email })
        .then(userValue => {
            if (!userValue) {
                console.log("Invalid email");
                req.flash('error','Error :: Invalid email');
                return res.redirect('/login')
            }
            bcrypt.compare(password,userValue.password)
                .then(result => {
                     if(!result)
                     {
                         console.log("Invalid password");
                         req.flash('error','Error :: Invalid password');
                     }else
                     {
                         console.log("logged in " + result);
                         req.session.isLoggedIn = true;
                         req.session.user = userValue;
                         return req.session.save(err=>{
                             if(err)
                             {
                                 console.log(err);
                             }
                             return res.redirect('/view_items')
                         })
                      }
                      res.redirect('/login');
                        }).catch(err => {
                            console.log("Error to compare", err);
                            return res.redirect('/login');
                        });
                }).catch(err => {
                    console.log("Error to find email", err);
                })
            }

exports.logoutForm = (req,res) =>{
        req.session.destroy(err=>{
            if(err)
            {
                console.log(err);
            }
        else
        {
            res.redirect('/login');
        }
    });
};