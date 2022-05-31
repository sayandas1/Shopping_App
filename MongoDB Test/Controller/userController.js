const formModel = require('../Model/form');

exports.formView = (req, res) => {
    res.render('User/registration_form', {
        titlePage: "Registration form"
    })
}

exports.postData = (req,res) =>{
    console.log("Collected value :",req.body);
    f_name = req.body.fname;
    l_name = req.body.lname;
    city = req.body.city;
    pin = req.body.pin;
    phone = req.body.phone;
    email = req.body.email;
    password = req.body.pwd;
    const formData =new formModel(f_name,l_name,city,pin,phone,email,password);
    formData.saveData().then(results=>{
        console.log("Data is saved",results);
    }).catch(err=>{
        console.log("Error at saving data",err);
    });
    res.redirect('/view_data');
}

exports.viewForm = (req, res) => {
    formModel.fetchData().then(formdata=>{
        res.render('User/view_form', {
            titlePage: "view form",
            data: formdata
    })
    }).catch(err=>{
        console.log("Data not fetched",err);
    })
}

exports.searchCity = (req,res) =>{
    let s_text = req.body.search;
    formModel.searchByCity(s_text).then(result=>{
        res.render('User/view_form',{
            titlePage: "Search Page",
            data: result
        })
    }).catch(err=>{
        console.log("City not found",err);
    })
}