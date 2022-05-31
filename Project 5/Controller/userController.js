const productModel = require('../Model/product');
const cartModel = require('../Model/cart');

exports.viewUserProduct = (req, res) => {
    productModel.find().then(products=>{
        res.render('User/view_userproduct', {
            titlePage: "view user products",
            path: '/viewuser_products',
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
            path: '/details/:pid',
            data: product
        })
    }).catch(err=>{
        console.log("Product not found",err);
    })
}

exports.searchProduct = (req,res) =>{
    let s_text = req.body.search;
    productModel.find({pName:s_text}).then(product=>{
        res.render('User/view_userproduct',{
            titlePage: "Search Page",
            path: '/search',
            data: product
        })
    }).catch(err=>{
        console.log("Product not found",err);
    })
}

exports.addtoCart = (req,res) =>{
    const pId = req.body.product_id;
    const quantity = req.body.quantity;
    const userId = req.user._id;
    const cartValue = [];

    console.log("After add to cart: pId:",pId,"Q:",quantity,"ID:",userId);

    // const cartData = cartModel.find({userId: userId, productId: pId});
    // if(cartData==''){
    //     let productData = productModel.findById(pId)
    //     console.log("Product data:",productData);
    //     cartValue.push(productData);
    //     const cartProduct = new cartModel({productId:pId,quantity:quantity,userId:userId,cart:cartValue});
    //     const savedCartData = cartProduct.save();
    //     if(savedCartData){
    //         res.redirect('/add_to_cart');
    //     }
    // }

    cartModel.find({userId:userId, productId:pId})
    .then(cartData=>{
        if(cartData == '')
        {
            productModel.findById(pId)
            .then(productForCart=>{
                cartValue.push(productForCart);
                const cartProduct = new cartModel({productId:pId,quantity:quantity,userId:userId,cart:cartValue});
                cartProduct.save()
                .then(result=>{
                    console.log("Product added to the cart successfully");
                    res.redirect('/add_to_cart');
                }).catch(err=>{
                    console.log(err);
                })
            }).catch(err=>{
                console.log(err);
            })
        }
        else if(cartData[0].productId == pId)
        {
            console.log("Product already added");
            res.redirect('/add_to_cart');
        }
        else
        {
            productModel.findById(pId)
            .then(productForCart=>{
                cartValue.push(productForCart);
                const cartProduct = new cartModel({productId:pId,quantity:quantity,userId:userId,cart:cartValue});
                cartProduct.save()
                .then(result=>{
                    console.log("Product added to the cart successfully");
                    res.redirect('/add_to_cart');
                }).catch(err=>{
                    console.log(err);
                })
            }).catch(err=>{
                console.log("Product cannot be added");
            })
        }
    })
}

exports.getCartPage = (req,res)=>{
    const user_id = req.session.user._id;
    cartModel.find({userId: user_id}).then(viewProductsCart=>{
        res.render('User/add_to_cart',{
            titlePage: 'cart',
            path: '/add_to_cart',
            data: viewProductsCart
        });
    }).catch(err=>{
        console.log(err);
    })
}

exports.cartDelete = (req,res) =>{
    let cart_id = req.params.cart_id;
    console.log("Cart id",cart_id);
    cartModel.deleteOne({_id: cart_id}).then(cart_result=>{
        console.log("Deleted cart successfully");
        res.redirect('/add_to_cart');
    }).catch(err=>{
        console.log("Error to delete data",err);
    })
}