const authModel = require('../Model/auth');
const bcrypt = require('bcryptjs');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host:'smtp',
  port:1200,
  secure:false,
  requireTLS: true,
  service: 'gmail',
  auth: {
    user: 'sdas6824@gmail.com',
    pass: 'ywgfwzohxcrrqhad'
  }
});

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
                            var mailOptions = {
                                from: 'sdas6824@gmail.com',
                                to: email,
                                subject: 'Sending Email using Node.js to confirm registration',
                                text: 'You have succefully registered.'
                              };
                              transporter.sendMail(mailOptions, function(error, info)
                   {
                        if (error) 
                        {
                          console.log("Error to send mail:", error);
                        }
                         else 
                         {
                          console.log('Email sent: ' , info.response);
                        }
                    });
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
            };

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

exports.forgetPassword = (req,res) =>{
    res.render("Auth/forget",{
        titlePage: "Forget_Password",
        path: "/forget_password"
    });
};

exports.postForgetPassword = (req,res) =>{
    const email = req.body.email;
    authModel.findOne({ email: email })
    .then((userValue) => {
       if(!userValue)
       {
          console.log("Invalid Email");
          return res.redirect("/forget_password");
       }else{
        const user_id = userValue._id;
        console.log(user_id);
        const url = "http://localhost:4500/SetNewPassword/" + user_id;
        const textForget = "Click here -> ";

        var mailOptions = {
            from: 'sdas6824@gmail.com',
            to: email,
            subject: "Forgot Password",
            text: 'Set new password',
            html: textForget.concat(url)
        };
        
        transporter.sendMail(mailOptions, function(error,info){
            if(error){
                console.log("Error to send mail: ", error);
            }else{
                console.log("Email sent" + info.response);
            };
        });
        res.end();
       }
    })
    .catch((err)=>{
        console.log(err);
    });
};

exports.setPassGet = (req,res) =>{
    const user_id = req.params.id;
    console.log("Collected id to change password", user_id);
    res.render("Auth/setPass",{
        titlePage: "Set New",
        userId: user_id,
        path: "/SetNewPassword/:id"
    });
};


exports.setNewPwd = (req,res) =>{
    const user_id = req.body.user_id;
    const pwd = req.body.pwd;
    const cpwd = req.body.cpwd;

    authModel.findById(user_id)
    .then(user=>{
        let user_email = user.email;
        let user_newfname = user.fName;
        let user_newlname = user.lName;
        console.log("Set New :",user_id,pwd,cpwd,user_email,user_newfname,user_newlname);
        return bcrypt.hash(pwd,12)
        .then((hashPassword)=>{
            user.fName = user_newfname;
            user.lName = user_newlname;
            user.email = user_email;
            user.password = hashPassword
            return user.save()
            .then ((result)=>{
                console.log("Password Changed");
                res.redirect("/login");
            }).catch((err)=>{
                 console.log(err);
            });
            }).catch((err)=>{
                console.log("Hashing error",err);
        })
        }).catch((err)=>{
            console.log("No user found",err);
    })
};