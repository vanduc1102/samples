import { PrismaClient } from "@prisma/client";
import { links } from "./data/links";
import { seedHardware, seedMarginModel } from "./data/excels";
const prisma = new PrismaClient();

async function main() {
    await baseData();
    await seedMarginModel();
    await seedHardware();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


async function baseData(){
    await prisma.role.createMany({
        data: [
          {
            name: "Admin",
            code: "ADMIN",
          },
          {
            name: "User",
            code: "USER",
          },
          {
            name: "Sale",
            code: "SALE",
          },
          {
            name: "Engineer",
            code: "ENGINEER",
          },
        ],
        skipDuplicates: true,
      });

      const adminRole = await prisma.role.findFirstOrThrow({
        where: {
          code: "ADMIN",
        },
      });

      await prisma.user.upsert({
        where: {
          email: `testemail@gmail.com`,
        },
        create: {
          email: `testemail@gmail.com`,
          roleId: adminRole.id,
        },
        update: {},
      });

      await prisma.link.createMany({
        data: links,
        skipDuplicates: true,
      });
}
