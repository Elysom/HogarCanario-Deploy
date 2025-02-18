const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const sitiosFamosos = [
  {
    nombre: "Jungle house",
    descripcion: "No dejes tu jack daniel's en la nevera que te lo roba un nicaraguense",
    imagen: "images/sitios/junglehouse.jpg",
    tipo: "Monumento"
  },
  {
    nombre: "Playa de Las Canteras",
    descripcion: "Una de las playas más famosas de Las Palmas de Gran Canaria, conocida por su arena dorada y aguas tranquilas.",
    imagen: "images/sitios/playacanteras.jpg",
    tipo: "Naturaleza"
  },
  {
    nombre: "Roque Nublo",
    descripcion: "Un monolito de piedra volcánica y un mirador, símbolo de Gran Canaria.",
    imagen: "images/sitios/roquenublo.jpg",
    tipo: "Monumento"
  },
  {
    nombre: "Dunas de Maspalomas",
    descripcion: "Un impresionante desierto de dunas en el sur de la isla, perfecto para paseos y fotografía.",
    imagen: "images/sitios/dunasmaspalomas.jpg",
    tipo: "Naturaleza"
  },
  {
    nombre: "Cueva Pintada",
    descripcion: "Un yacimiento arqueológico prehispánico donde se pueden ver pinturas rupestres de los antiguos canarios.",
    imagen: "images/sitios/cuevapintada.jpg",
    tipo: "Monumento"
  },
  {
    nombre: "Puerto de Mogán",
    descripcion: "Un hermoso pueblo costero conocido como la 'Venecia de Canarias' por sus canales y arquitectura pintoresca.",
    imagen: "images/sitios/puertomogan.jpg",
    tipo: "Cultura"
  },
  {
    nombre: "Pico de las Nieves",
    descripcion: "El punto más alto de Gran Canaria con vistas panorámicas impresionantes de la isla.",
    imagen: "images/sitios/picodelasnieves.jpg",
    tipo: "Naturaleza"
  },
  {
    nombre: "Jardín Botánico Viera y Clavijo",
    descripcion: "El mayor jardín botánico de España con una increíble diversidad de flora canaria.",
    imagen: "images/sitios/jardinbotanico.jpg",
    tipo: "Naturaleza"
  },
  {
    nombre: "Teror",
    descripcion: "Un pueblo histórico con calles empedradas, balcones canarios y la Basílica de Nuestra Señora del Pino.",
    imagen: "images/sitios/teror.jpg",
    tipo: "Cultura"
  },
  {
    nombre: "Barranco de Guayadeque",
    descripcion: "Un barranco espectacular con casas cueva y restaurantes en el interior de la roca.",
    imagen: "images/sitios/guayadeque.jpg",
    tipo: "Naturaleza"
  },
  {
    nombre: "Faro de Maspalomas",
    descripcion: "Un icónico faro del siglo XIX junto a la playa de Maspalomas, ideal para paseos al atardecer.",
    imagen: "images/sitios/faromaspalomas.jpg",
    tipo: "Monumento"
  },
  {
    nombre: "Agaete y el Puerto de Las Nieves",
    descripcion: "Un pintoresco pueblo pesquero con piscinas naturales y vistas al Teide.",
    imagen: "images/sitios/puertolasnieves.jpg",
    tipo: "Cultura"
  },
  {
    nombre: "Caldera de Bandama",
    descripcion: "Un enorme cráter volcánico con senderos y vistas espectaculares.",
    imagen: "images/sitios/calderabandama.jpg",
    tipo: "Naturaleza"
  },
  {
    nombre: "Playa de Amadores",
    descripcion: "Una playa artificial con aguas cristalinas y arena blanca importada del Caribe.",
    imagen: "images/sitios/playaamadores.jpg",
    tipo: "Naturaleza"
  },
  {
    nombre: "Cenobio de Valerón",
    descripcion: "Un impresionante granero excavado en la roca por los antiguos aborígenes canarios.",
    imagen: "images/sitios/cenobiovaleron.jpg",
    tipo: "Monumento"
  },
  {
    nombre: "Presa de Soria",
    descripcion: "Una de las presas más grandes de Gran Canaria, rodeada de naturaleza y tranquilidad.",
    imagen: "images/sitios/presasoria.jpg",
    tipo: "Naturaleza"
  },
  {
    nombre: "San Mateo",
    descripcion: "Un pueblo rural con uno de los mercados agrícolas más tradicionales de la isla.",
    imagen: "images/sitios/sanmateo.jpg",
    tipo: "Cultura"
  },
  {
    nombre: "Playa de Güigüi",
    descripcion: "Una playa virgen y paradisíaca, accesible solo a pie o en barco.",
    imagen: "images/sitios/playaguigui.jpg",
    tipo: "Naturaleza"
  },
  {
    nombre: "Fataga",
    descripcion: "Un encantador pueblo en el Valle de las Mil Palmeras, rodeado de montañas.",
    imagen: "images/sitios/fataga.jpg",
    tipo: "Cultura"
  },
  {
    nombre: "Casa de Colón",
    descripcion: "Un museo en Las Palmas de Gran Canaria que explora la relación de Colón con las islas.",
    imagen: "images/sitios/casacolon.jpg",
    tipo: "Cultura"
  }
];
//Usamos cors para permitir peticiones desde cualquier origen(Dado a que tenemos la página en otro puerto)
app.use(cors());

app.use("/public",express.static('public'));


// Ruta con opción de límite
app.get('/api/sitios', (req, res) => {
  let { limit } = req.query;
  limit = parseInt(limit);

  if (!isNaN(limit) && limit > 0) {
    return res.json(sitiosFamosos.slice(0, limit));
  }

  res.json(sitiosFamosos);
});

// Ruta para obtener un sitio aleatorio
app.get('/api/sitios/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * sitiosFamosos.length);
  res.json(sitiosFamosos[randomIndex]);
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});