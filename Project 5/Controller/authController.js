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
    const f_name = req.body.fname;
    const l_name = req.body.lname;
    const email = req.body.email;
    const password = req.body.pwd;
    console.log("Collected data from the registration form", f_name, l_name, email, password);
    authModel.findOne({ email: email })
        .then(userValue => {
            if (userValue) {
                console.log(userValue, "Email already exist");
                req.flash('error','Error :: Email is already registered. Please log in.');
                return res.redirect('/registration')
            }
            return bcrypt.hash(password, 12)
                .then(hashPassword => {
                    const userData = new authModel({ fName: f_name, lName: l_name, email: email, password: hashPassword });
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
                    cookie_data: req.cookies
                })
            }

exports.postLoginData = (req, res) => {
    console.log("Collected login value :", req.body);
    const email = req.body.email;
    const password = req.body.pwd;
    const remember = req.body.remember;
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
                         //isLoggedIn is a user defined variable in a session to check user is logged in or not
                         req.session.user = userValue;
                         //user is a variable in session to store logged in user value
                         return req.session.save(err=>{
                             if(err)
                             {
                                 console.log(err);
                             }else if(remember)
                             {
                                 const cookieData = {emailCookie: userValue.email, passwordCookie: password}
                                 res.cookie('cookieData',cookieData,
                                 {
                                     expires: new Date(Date.now()+12000000),
                                     httpOnly: true
                                 })
                             }
                             console.log("logged in");

                             return res.redirect('/viewuser_products')
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