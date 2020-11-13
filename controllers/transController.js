const { text } = require("express");
const Transaction = require("../models/Transaction");

// @disc Get all transaction
// @Route  Get /api/v1/transactions
// @acess Public
exports.getTransactions = async(req,res)=>{

   try {
       const Transactions = await Transaction.find();

       return res.status(200).json({
           success : true,
           count:Transactions.length,
           data:Transactions
       });
       
   } catch (err) {

    return res.status(500).json({
        success : true,
        error:"Server Error"
    });
       
   }
}


// @disc   Get all transaction
// @Route  Post /api/v1/transactions
// @acess  Public
exports.addTransactions = async(req,res)=>{

    try {

        const {text ,amount} = req.body;
        if(!text  || !amount){
        
            return res.status(400).json({
                success : false,
                error:"Please Fill the feild"
            });
        }
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success : true,
            data:transaction
        });
        
    } catch (err) {
       
            return res.status(500).json({
                success : false,
                error:"Server Error"
            });

        
    }


}


// @disc   Get all transaction
// @Route  Delete /api/v1/transactions:id
// @acess  Public
exports.deleteTransactions = async(req,res)=>{

    try {
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){

            return res.status(400).json({
                success : false,
                error:"record not found"
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success : true,
            data:{}
        });
        
    } catch (err) {
        return res.status(500).json({
            success : false,
            error:"server error"
        });
        
    }
}