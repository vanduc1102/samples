import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";
const prisma = new PrismaClient();

async function main() {
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
  });

  const adminRole = await prisma.role.findFirstOrThrow({
    where: {
      code: "ADMIN",
    },
  });

  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      roleId: adminRole.id,
    },
  });

  await prisma.link.createMany({
    data: links,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
