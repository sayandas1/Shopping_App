// const dataArr = [];

const productModel = require('../Model/product');

exports.addProduct = (req, res) => {
    res.render('Admin/add_product', {
        titlePage: "add products"
    })
}

exports.postdata = (req,res) =>{
    console.log("Collected value :",req.body);
    p_name = req.body.name;
    p_price = req.body.price;
    p_desc = req.body.description;
    const productData =new productModel(p_name,p_price,p_desc);
    productData.saveData();
    // dataArr.push({product_name:p_name,product_price:p_price,product_description:p_description});
    res.redirect('/view_products');
}

exports.viewProduct = (req, res) => {
    productModel.fetchData(product=>{
        res.render('Admin/view_product', {
            titlePage: "view products",
            data: product
    })
    })
}