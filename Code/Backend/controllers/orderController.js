//TODO: add service 

exports.getAllOrders = (req,res)=>{
    res.json({message:`getAll orders request logged`})

}
exports.getOrderByID = (req, res) => {
    const id = req.params;
    res.json({message:`get order with id ${id} request logged`})

}
exports.updateOrder = (req, res) => {
    const param = req.params;
    res.json({message:`update order ${param.id} to ${param.status} request logged`})

}
exports.createOrder = (req, res) => {
    const param = req.params;
    res.json({message:`create order from cart ${param.cartID} of user ${param.userID}`})

}

