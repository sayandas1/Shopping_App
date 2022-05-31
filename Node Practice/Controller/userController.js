const ProductModel = require("../Model/product");

exports.getuserFormDetails = (req,res)=>{
    ProductModel.fetchData(product=>{
        res.render('User/viewuser_product',{
            titlePage:'data view',
            data: product
            })
    })
}