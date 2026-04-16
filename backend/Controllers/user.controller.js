import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const registerController = (req, res) => {
    const { username, email, password } = req.body;
    const ExistingUser = prisma.User.findmany({
        where: {
            
        }
    })

}

module.exports = {
    registerController
}