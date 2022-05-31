const productModel = require('../Model/product');

exports.viewUserProduct = (req, res) => {
    productModel.fetchData(product=>{
        res.render('User/view_userproduct', {
            titlePage: "user products",
            data: product
    })
    })
}