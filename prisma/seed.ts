import { PrismaClient } from "@prisma/client"
import { faker } from '@faker-js/faker'
const prisma = new PrismaClient()
async function main() {
    const user = await prisma.user.findFirst();
    if (!user) {
        for (let i = 0; i < 9; i++) {
            prisma.user.create({
                data: {
                    nickName: faker.person.jobTitle()
                }
            })
        }
    }
}

main().catch((err) => {
    console.log(err);
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect();
})