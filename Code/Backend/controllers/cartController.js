
//TODO add service implementation
exports.createCart= (req,res)=>{
    res.json({message:`createCart request logged`})

}

exports.getCart=(req,res)=>{
    let param = req.param;
    console.json({message:`getcart  of id:  ${param} `});

}

exports.deleteCart=(req,res)=>{
    let param = req.param;
    console.json({message:`delete cart of id:  ${param} `});

}

exports.deleteItem=(req,res)=>{
    let param = req.param;
    console.json({message:`delete item ${param.itemID} of cart ${param.cartID} request logged`});

}

exports.addItem=(req,res)=>{
    let param = req.param;
    console.json({message:`add item ${param.itemID} to cart ${param.cartID} request logged`});

}