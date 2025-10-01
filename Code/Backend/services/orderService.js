
const prisma = require('./prisma');


async function getAllOrders(userId) {
    return prisma.order.findMany({
        where: { userID: userId },
        include: {
            items: true //jsonlist
            // include products in items ? 
        }
    })
}
// returns null when product not found
async function getOrderByID(orderId) {
    return prisma.order.findUnique({
        where: { id: orderId }, include: {
            items: true
            //include products in items ?
        }
    })
}

//TODO: restrict what status a route can set
async function updateOrder(orderId,new_status) {
    return prisma.order.update({ where: { id: orderId }, data: { status: new_status } });
}
async function createOrder(cartID) {
    //TODO: after testing cart services
}

module.exports = {
    getAllOrders,
    getOrderByID,
    updateOrder,
    createOrder
}

