const itemModel = require('../Model/item');
const path = require('path');

exports.addItem = (req, res) => {
    let message = req.flash('error');
    console.log(message);
    if(message.length>0)
    {
        message=message[0];
    }
    else
    {
        message=null;
    }
    res.render('Admin/add_item', {
        titlePage: "Add Item",
        path: '/additems',
        errorMsg: message,
    })
}

exports.postdata = (req,res) =>{
    console.log("Collected value :",req.body);
    const i_name = req.body.name;
    const i_category = req.body.category;
    const i_image = req.file;
    const iImage_url= i_image.path;
    const itemData = new itemModel({iName:i_name,iCategory:i_category,iImage:iImage_url});
    itemModel.findOne({ i_name: i_name,i_category: i_category, iImage_url: iImage_url})
        .then(userValue => {
            if (userValue) {
                console.log(userValue, "Item is already exist");
                req.flash('error','Error :: Item is already added.');
                return res.redirect('/additems');
            }
     itemData.save()
     .then(results=>{
        console.log("Item is saved",results);
     }).catch(err=>{
         console.log("Error at saving item",err);
     });
}).catch(err => {
    console.log("Error in findOne", err);
});
    res.redirect('/view_items');
}

exports.viewItem = (req, res) => {
    itemModel.find().then(item=>{
        res.render('Admin/view_item', {
            titlePage: "view items",
            path: '/view_items',
            data: item
    })
    }).catch(err=>{
        console.log("Data not fetched",err);
        req.flash('error','Error :: Invalid data');
    })
}

exports.viewItemDetails = (req,res) =>{
    let item_id = req.params.pid;
    console.log("Item id",item_id);
    itemModel.findById(item_id).then(item=>{
        console.log("Item details",item);
        res.render('Admin/item_details',{
            titlePage: "Details Page",
            path: '/details/:pid',
            data: item
        })
    }).catch(err=>{
        console.log("Item not found",err);
    })
}