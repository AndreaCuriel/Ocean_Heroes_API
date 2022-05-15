const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const organization1 = await prisma.organizaciones.upsert({
      where: { name: "organizacion1" },
      update: {},
      create: {
        name: "organizacion1",
        description: "descripcion1",
        latitude: "51.5",
        length: "-0.09",
      },
    });

    const organization2 = await prisma.organizaciones.upsert({
      where: { name: "organizacion2" },
      update: {},
      create: {
        name: "organizacion2",
        description: "descripcion2",
        latitude: "55.5",
        length: "-0.08",
      },
    });

    const organization3 = await prisma.organizaciones.upsert({
      where: { name: "organizacion3" },
      update: {},
      create: {
        name: "organizacion3",
        description: "descripcion3",
        latitude: "54.5",
        length: "-0.12",
      },
    });

    const santuario1 = await prisma.santuarios.upsert({
      where: { name: "santuario1" },
      update: {},
      create: {
        name: "santuario1",
        description: "descripcion1",
        latitude: "51.5",
        length: "-0.09",
      },
    });

    const santuario2 = await prisma.santuarios.upsert({
      where: { name: "santuario2" },
      update: {},
      create: {
        name: "santuario2",
        description: "descripcion2",
        latitude: "51.5",
        length: "-0.09",
      },
    });

    const SO1 = await prisma.Santuarios_Organizaciones.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id_santuarios: 1,
        id_organizaciones: 1,
      },
    });

    const evento1 = await prisma.Eventos.upsert({
      where: { name: "evento1" },
      update: {},
      create: {
        name: "evento1",
        description: "descripcion1",
        latitude: "51.5",
        length: "-0.09",
      },
    });

    const evento2 = await prisma.Eventos.upsert({
      where: { name: "evento2" },
      update: {},
      create: {
        id_santuarios: 1,
        name: "evento2",
        description: "descripcion2",
        latitude: "51.5",
        length: "-0.09",
      },
    });

    const EO1 = await prisma.Eventos_Organizacion.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id_eventos: 1,
        id_organizaciones: 2,
      },
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
