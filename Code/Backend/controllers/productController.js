
//TODO: implement services

exports.getall= (req,res)=>{
    res.json({message:`getall request logged`})

}

exports.getID=(req,res)=>{
    let param = req.param;
    console.json({message:`getid of ${param} request logged`});

}



//TODO implement protected routes