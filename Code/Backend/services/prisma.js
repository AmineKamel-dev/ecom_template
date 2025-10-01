const { PrismaClient } = require('../prisma/database');

const prisma = new PrismaClient();

module.exports = prisma;
// core instance of prisma client ( only one instance should be in existence )