var db=require('../config/connection')
var collection=require('../config/collections');
const { response } = require('express');
var ObjectId=require('mongodb').ObjectID
module.exports={

    addProduct:(product,callback)=>{
        console.log(product);
        db.gets().collection('product').insertOne(product).then((data)=>{
            callback(data.insertedId)
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.gets().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    deleteProduct:(proId)=>{
        return new Promise((resolve,reject)=>{
            db.gets().collection(collection.PRODUCT_COLLECTION).remove({_id:ObjectId(proId)}).then((response)=>{
                resolve(response)
            })
        })
    }
}