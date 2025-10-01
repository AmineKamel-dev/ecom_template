const prisma = require('./prisma');

async function createCart(userId=undefined) {
    if (userId) return prisma.cart.create({ data: {}, user: { connect: { id: userId } } });
    return prisma.cart.create({ data: {} });
}

async function getCart(cartId) {
    
   return prisma.cart.findUnique({
        where: { id: cartId },
        include: {
        items:true
    }});
    
}

async function deleteCart(cartID) {
    //linked cartitems are deleted as consequence(onDelete -> cascade)
    return prisma.cart.delete({
        where: {
            id: cartID
        }
    })
}
async function deleteItem(cartId,itemId){
    return prisma.cartItem.delete({
        where: { cartID_productID: { cartID: cartId, productID: itemId } }
    });

}

async function addItem(cartId,itemId,qnty) {
    const data = {
        cart: { connect: { id: cartId } },
        product:{ connect: { id:itemId } },
    }
    if (qnty !== undefined) data.quantity = qnty;

    return prisma.cartItem.create({
        data
    })
}

module.exports = {
    createCart,
    getCart,
    deleteCart,
    deleteItem,
    addItem,
}