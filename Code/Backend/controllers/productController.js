
//TODO: implement services

exports.getAllProducts= (req,res)=>{
    res.json({message:`getall request logged`})

}

exports.getProductById=(req,res)=>{
    const id = req.params;
    res.json({message:`getid of ${id} request logged`});

}



//TODO implement protected routes
exports.delistProduct = (req, res) => {
        const id = req.params;
    res.json({message:`delist item ${id}`});

}

exports.enlistProduct=(req,res)=>{
    res.json({message:`enlist item ${req.body}`});

}

exports.updateProduct = (req, res) => {
        const id = req.params;
    res.json({message:`update item ${id}`});

}