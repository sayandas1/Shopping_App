const productModel = require('../Model/product');
const path = require('path');

exports.addProduct = (req, res) => {
    res.render('Admin/add_product', {
        titlePage: "add products",
        path: '/addproducts'
    })
}

exports.postdata = (req,res) =>{
    console.log("Collected value :",req.body);
    const p_name = req.body.name;
    const p_price = req.body.price;
    const p_desc = req.body.description;
    const p_image = req.file;
    const pImage_url= p_image.path;
    const productData =new productModel({pName:p_name,pPrice:p_price,pDesc:p_desc,pImage:pImage_url});
    productData.save()
    .then(results=>{
        console.log("Product is saved");
    }).catch(err=>{
        console.log("Error at saving product",err);
    });
    res.redirect('/view_products');
}

exports.viewProduct = (req, res) => {
    productModel.find().then(product=>{
        res.render('Admin/view_product', {
            titlePage: "view products",
            path: '/view_products',
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
        // console.log("Edited product details");
        res.render('Admin/edit_page',{
            titlePage: "Edit Page",
            path: '/edit/:pid',
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
    let edited_image = req.file;
    let edited_id = req.body.id;

    let old_image_url = req.body.old_image;
    let image_url;
    if(edited_image === undefined)
    {
        image_url = old_image_url;
    }else{
        image_url = edited_image.path;
    }

    productModel.findById(edited_id).then(oldData=>{
        oldData.pName = edited_name;
        oldData.pPrice = edited_price;
        oldData.pDesc = edited_desc;
        oldData.pImage = image_url;
    
    return oldData.save().then(results=>{
        console.log("Edited product is saved");
        res.redirect('/view_products');
    }).catch(err=>{
        console.log("Error at saving edited product",err);
    });
  }).catch(err=>{
      console.log("Product not found",err);
  })
}

exports.deleteProduct = (req,res) =>{
    let product_id = req.params.pid;
    console.log("Product id",product_id);
    productModel.deleteOne({_id: product_id}).then(result=>{
        console.log("Deleted product successfully");
        res.redirect('/view_products');
    }).catch(err=>{
        console.log("Error to delete data",err);
    })
}

exports.deletePostData = (req,res) =>{
    let product_id = req.body.product_id;
    console.log("Product id",product_id);
    productModel.deleteOne({_id: product_id}).then(result=>{
        console.log("Deleted product successfully");
        res.redirect('/view_products');
    }).catch(err=>{
        console.log("Error to delete data",err);
    })
}