const prisma = require('./prisma');

async function getAllProducts(){
    return prisma.product.findMany();
}

async function getProductById(productId) {
    return prisma.product.findUnique({ where: { id: productId, }, });
    
}
//TODO: how to handle carts containing delisted products ?
async function delistProduct(productId) {
    return prisma.product.delete({ where: { id: productId } });
}
async function enlistProduct(data) {
    //TODO: validate data in controller
    return prisma.product.create({data})
    
}
//TODO: handle error RECORDNOTFOUND in case of missing product
async function updateProduct(productId,data){
    return prisma.product.update({ where: { id: productId }, data });
}

module.exports={
    getAllProducts,
    getProductById,
    delistProduct,
    enlistProduct,
    updateProduct

}