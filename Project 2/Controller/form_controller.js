const dataArray = [];

exports.getFormData = (req,res)=>{
    res.render('form',{
        titlePage:"form page"
    })
}

exports.postFormData = (req,res)=>{
    console.log("Collected value from form:",req.body);
    let firstname = req.body.fname;
    let lastname = req.body.lname;
    let email = req.body.email;
    dataArray.push({firstname:firstname, lastname:lastname, email:email});
    res.redirect('/formDetails');
}

exports.getFormDetails = (req,res)=>{
    res.render('form_data',{
        title:"details",
        data:dataArray
    })
}