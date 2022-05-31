const ProductModel = require("../Model/product");

exports.getFormData = (req,res)=>{
    res.render('Admin/add_product',{
    titlePage:'form view'
    })
}

exports.postFormData = (req,res)=>{
    console.log("Collected value from form: ",req.body);
    p_name = req.body.name;
    p_price = req.body.price;
    p_desc = req.body.details;
    const productData = new ProductModel(p_name,p_price,p_desc);
    productData.saveData()
    .then(results=>{
        console.log("Data is saves",results);
    }).catch(err=>{
        console.log("Error at saving data",err);
    })

    res.redirect('/viewadmin_products');
}

exports.getFormDetails = (req,res)=>{
    ProductModel.fetchData(product=>{
        res.render('Admin/viewadmin_product',{
            titlePage:'data view',
            data: product
            })
    })
}