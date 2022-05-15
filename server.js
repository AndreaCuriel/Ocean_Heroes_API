const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Requiere para usar CORS
// const cors = require("cors");
// const corsOptions = {
// origin: "http://localhost:8080",
// };

//app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

app.get("/organizaciones", async (req, res) => {
  const allOrganizations = await prisma.organizaciones.findMany({});
  res.json(allOrganizations);
});

app.get("/organizacionesWithEventos", async (req, res) => {
  const allOrganizationsE = await prisma.organizaciones.findMany({
    include: {
      Eventos_Organizacion: {
        include: { Eventos: true },
      },
    },
  });

  res.json(allOrganizationsE);
});

app.get("/organizacionesWithEventos/:id", async (req, res) => {
  const id = req.params.id;
  const eventos = await prisma.organizaciones.findUnique({
    where: { id: parseInt(id) },
    include: {
      Eventos_Organizacion: {
        include: { Eventos: true },
      },
    },
  });
  res.json(eventos);
});

app.get("/santuarios", async (req, res) => {
  const allSanctuaries = await prisma.santuarios.findMany({});
  res.json(allSanctuaries);
});

app.get("/santuariosWithEventos", async (req, res) => {
  const allSanctuaries = await prisma.santuarios.findMany({
    include: {
      Eventos: true,
    },
  });
  res.json(allSanctuaries);
});

app.get("/santuariosWithEventos/:id", async (req, res) => {
  const id = req.params.id;
  const santuary = await prisma.santuarios.findUnique({
    where: { id: parseInt(id) },
    include: {
      Eventos: true,
    },
  });
  res.json(santuary);
});

app.get("/eventos", async (req, res) => {
  const allEventos = await prisma.eventos.findMany({});
  res.json(allEventos);
});

app.get("/eventosWithOrganizacionSantuario", async (req, res) => {
  const allEventosSO = await prisma.eventos.findMany({
    include: {
      Santuarios: true,
      Eventos_Organizacion: {
        include: { Organizaciones: true },
      },
    },
  });
  res.json(allEventosSO);
});

app.get("/eventosWithOrganizacionSantuario/:id", async (req, res) => {
  const id = req.params.id;
  const EventosSO = await prisma.eventos.findUnique({
    where: { id: parseInt(id) },
    include: {
      Santuarios: true,
      Eventos_Organizacion: {
        include: { Organizaciones: true },
      },
    },
  });
  res.json(EventosSO);
});

app.get("/organizacionesWithSantuarios", async (req, res) => {
  const organizacionesS = await prisma.organizaciones.findMany({
    include: {
      Santuarios_Organizaciones: {
        include: { Santuarios: true },
      },
    },
  });
  res.json(organizacionesS);
});

app.get("/organizacionesWithSantuarios/:id", async (req, res) => {
  const id = req.params.id;
  const organizacionS = await prisma.organizaciones.findUnique({
    where: { id: parseInt(id) },
    include: {
      Santuarios_Organizaciones: {
        include: { Santuarios: true },
      },
    },
  });
  res.json(organizacionS);
});

app.get("/santuariosWithOrganizaciones", async (req, res) => {
  const SantuariosO = await prisma.santuarios.findMany({
    include: {
      Santuarios_Organizaciones: {
        include: { Organizaciones: true },
      },
    },
  });
  res.json(SantuariosO);
});

app.get("/santuariosWithOrganizaciones/:id", async (req, res) => {
  const id = req.params.id;
  const santuarioO = await prisma.santuarios.findUnique({
    where: { id: parseInt(id) },
    include: {
      Santuarios_Organizaciones: {
        include: { Organizaciones: true },
      },
    },
  });
  res.json(santuarioO);
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
