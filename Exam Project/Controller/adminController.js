const studentModel = require('../Model/student');
const path = require('path');

exports.addStudent = (req, res) => {
    res.render('Admin/add_student', {
        titlePage: "add studentss",
        path: '/addstudents'
    })
}

exports.postdata = (req,res) =>{
    console.log("Collected value :",req.body);
    const s_name = req.body.name;
    const s_email = req.body.email;
    const s_phone = req.body.phone;
    const s_image = req.file;
    const sImage_url= s_image.path;
    const studentData =new studentModel({sName:s_name,sEmail:s_email,sPhone:s_phone,sImage:sImage_url});
    studentData.save()
    .then(results=>{
        console.log("Student is saved");
    }).catch(err=>{
        console.log("Error at saving student",err);
    });
    res.redirect('/view_students');
}

exports.viewStudent = (req, res) => {
    studentModel.find().then(student=>{
        res.render('Admin/view_student', {
            titlePage: "view students",
            path: '/view_students',
            data: student
    })
    }).catch(err=>{
        console.log("Data not fetched",err);
    })
}

exports.editProduct =  (req,res) =>{
    let student_id = req.params.sid;
    console.log("Student id",student_id);
    studentModel.findById(student_id).then(student=>{
        // console.log("Edited product details");
        res.render('Admin/edit_page',{
            titlePage: "Edit Page",
            path: '/edit/:sid',
            data: student
        })
    }).catch(err=>{
        console.log("Student not found",err);
    })
}

exports.editPostData = (req,res) =>{
    console.log("Collected edited value :",req.body);
    let edited_name = req.body.name;
    let edited_email = req.body.email;
    let edited_phone = req.body.phone;
    // let edited_image = req.file;
    let edited_id = req.body.id;

    studentModel.findById(edited_id).then(oldData=>{
        oldData.sName = edited_name;
        oldData.sEmail = edited_email;
        oldData.sPhone = edited_phone;
        // oldData.pImage = edited_image;
    
    return oldData.save().then(results=>{
        console.log("Edited student is saved");
        res.redirect('/view_students');
    }).catch(err=>{
        console.log("Error at saving edited student",err);
    });
  }).catch(err=>{
      console.log("Student not found",err);
  })
}

exports.deleteProduct = (req,res) =>{
    let student_id = req.params.sid;
    console.log("Student id",student_id);
    studentModel.deleteOne({_id: student_id}).then(result=>{
        console.log("Deleted student successfully");
        res.redirect('/view_students');
    }).catch(err=>{
        console.log("Error to delete data",err);
    })
}
