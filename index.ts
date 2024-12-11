import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allPackages = await prisma.package.findMany();
  console.log(allPackages);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
