const productModel = require('../Model/product');

exports.viewUserProduct = (req, res) => {
    productModel.fetchData().then(products=>{
        res.render('User/view_userproduct', {
            titlePage: "view user products",
            data: products
    })
    }).catch(err=>{
        console.log("Data not fetched for user",err);
    })
}

exports.viewUserProductDetails = (req,res) =>{
    let product_id = req.params.pid;
    console.log("Product id",product_id);
    productModel.findById(product_id).then(product=>{
        console.log("Product details",product);
        res.render('User/productDetails',{
            titlePage: "Details Page",
            data: product
        })
    }).catch(err=>{
        console.log("Product not found",err);
    })
}

exports.searchProduct = (req,res) =>{
    let s_text = req.body.search;
    productModel.searchByName(s_text).then(result=>{
        res.render('User/view_userproduct',{
            titlePage: "Search Page",
            data: result
        })
    }).catch(err=>{
        console.log("Product not found",err);
    })
}