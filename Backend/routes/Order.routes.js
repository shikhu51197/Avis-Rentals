// const { Router } = require("express");
// const { Authenticate } = require("../middleware/Authenticate");
// const { OrderModel } = require("../models/Order.model");




// const OrderRouter = Router();


// OrderRouter.get("/",Authenticate,async(req,res)=>{
//     const userID = req.body.userID;
//     try {
//         const data  = await OrderModel.find({userID:userID}).populate("userID" , ["name","email","number"])
//         res.send(data)
        
//     } catch (error) {
//         res.send(error)
//     }
// });

// OrderRouter.post("/add",Authenticate,async(req,res)=>{
//     try {
//         const data  = new OrderModel(req.body)
//         await data.save()
//         res.send("data is added")
//     } catch (error) {
//         res.send(error)
//     }
// });

// OrderRouter.get("/admin",async(req,res)=>{
//     try {
//         const data  = await OrderModel.find().populate("userID" , ["name","email","number"])
//         res.send(data)
        
//     } catch (error) {
//         res.send(error)
//     }
// });



// module.exports ={OrderRouter}
