
//TODO add service implementation
exports.createCart= (req,res)=>{
    res.json({message:`createCart request logged`})

}

exports.getCart=(req,res)=>{
    const id= req.params;
    console.json({message:`getcart  of id:  ${id} `});

}

exports.deleteCart=(req,res)=>{
    const id = req.params;
    console.json({message:`delete cart of id:  ${id} `});

}

exports.deleteItem=(req,res)=>{
    let param = req.params;
    console.json({message:`delete item ${param.itemID} of cart ${param.cartID} request logged`});

}

exports.addItem=(req,res)=>{
    let param = req.params;
    console.json({message:`add item ${param.itemID} to cart ${param.cartID} request logged`});

}