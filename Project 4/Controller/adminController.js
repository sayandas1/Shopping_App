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
    const productData =new productModel(p_name,p_price,p_desc,null);
    productData.saveData().then(results=>{
        console.log("Product is saved",results);
    }).catch(err=>{
        console.log("Error at saving product",err);
    });
    res.redirect('/view_products');
}

exports.viewProduct = (req, res) => {
    productModel.fetchData().then(product=>{
        res.render('Admin/view_product', {
            titlePage: "view products",
            data: product
    })
    }).catch(err=>{
        console.log("Data not fetched",err);
    })
}

exports.editProduct =  (req,res) =>{
    let product_id = req.params.pid;
    console.log("Product id",product_id);
    productModel.findById(product_id).then(product=>{
        console.log("Edited product details",product);
        res.render('Admin/edit_page',{
            titlePage: "Edit Page",
            data: product
        })
    }).catch(err=>{
        console.log("Product not found",err);
    })
}

exports.editPostData = (req,res) =>{
    console.log("Collected edited value :",req.body);
    let edited_name = req.body.name;
    let edited_price = req.body.price;
    let edited_desc = req.body.description;
    let edited_id = req.body.id;
    const updatedData =new productModel(edited_name, edited_price, edited_desc, edited_id);
    updatedData.saveData().then(results=>{
        console.log("Edited product is saved",results);
    }).catch(err=>{
        console.log("Error at saving edited product",err);
    });
    res.redirect('/view_products');
}

exports.deleteProduct = (req,res) =>{
    let product_id = req.params.pid;
    console.log("Product id",product_id);
    productModel.deleteData(product_id).then(result=>{
        console.log("Deleted product successfully");
        res.redirect('/view_products');
    }).catch(err=>{
        console.log("Error to delete data",err);
    })
}

exports.deletePostData = (req,res) =>{
    let product_id = req.body.product_id;
    console.log("Product id",product_id);
    productModel.deleteData(product_id).then(result=>{
        console.log("Deleted product successfully");
        res.redirect('/view_products');
    }).catch(err=>{
        console.log("Error to delete data",err);
    })
}