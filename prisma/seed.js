const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const organization1 = await prisma.organizaciones.upsert({
      where: { name: "México Azul" },
      update: {},
      create: {
        name: "México Azul",
        description:
          "Nos enfocamos en la conservación de los hábitats marinos, así como en la protección y cuidado de la megafauna marina, principalmente de una de las especies de escualo más desconocida y menos estudiada en el mundo: el tiburón mako.",
        location:
          "Avenida México 141, Colonia del Carmen, Coyoacán, C.P. 04100, CDMX.",
        species: "Tiburón Mako",
        latitude: "19.354528",
        length: "-99.167049",
        page: "https://mexicoazul.org/",
        image:
          "https://mexicoazul.org/wp-content/uploads/2020/06/logo-mexico-azul-blanco-1024x244.png",
      },
    });

    const organization2 = await prisma.organizaciones.upsert({
      where: { name: "Fundación Yepez A.C" },
      update: {},
      create: {
        name: "Fundación Yepez A.C",
        description:
          "Dedicada a la preservación del equilibrio ecológico y a la protección de las tortugas marinas desde 1967. Trabajamos con proyectos comunitarios de conservación, reforestación, limpieza de playas, y reciclaje.",
        location: "Veracruz",
        species: "Tortugas Marinas",
        latitude: "20.1525825",
        length: "-96.7039931",
        page: "http://www.tortugasfundacionyepez.com/",
        image:
          "http://www.tortugasfundacionyepez.com/uploads/5/2/3/9/52391727/logotipo-2.png",
      },
    });

    const santuario1 = await prisma.santuarios.upsert({
      where: { name: "Playa de Puerto Arista" },
      update: {},
      create: {
        name: "Playa de Puerto Arista",
        description:
          "En esta zona se protegen las especies de tortuga golfina, verde, laúd y carey. A partir del mes de agosto y hasta noviembre, se lleva a cabo el Tortufest, un festival que se realiza cada año en Puerto Arista.",
        location: "Tonala - Chiapas",
        species: "Tortuga Golfina",
        latitude: "15.9397148",
        length: "-93.8321128",
        page: "",
        image: "",
      },
    });

    const santuario2 = await prisma.santuarios.upsert({
      where: { name: "Arrecife Alacranes" },
      update: {},
      create: {
        name: "Arrecife Alacranes",
        description:
          "Es un área natural protegida en Yucatán, donde se reproducen y desarrollan especies de las que dependen miles de familias así como hábitat de otros animales marinos como tortugas y tiburones",
        location: "Yucatán",
        species: "Tortugas",
        latitude: "22.2485467",
        length: "-89.6589565",
        page: "",
        image: "",
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
      where: { name: "Liberación de Tortugas" },
      update: {},
      create: {
        name: "Liberación de Tortugas",
        description:
          "Actividad donde se realizara la liberación de tortugas marianas y una breve clase de los cuidados de los huevos de tortuga",
        requirements:
          "Ser mayor edad (18 años o más), Llevar suficiente agua, bloqueado solar, gorra y traje de baño",
        cost: "Gratuito",
        location: "San Felipe, Yucatán",
        page: "",
        image: "",
        latitude: "21.5655",
        length: "-88.2333",
        id_santuarios: 2,
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
