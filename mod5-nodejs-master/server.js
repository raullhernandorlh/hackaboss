const axios = require('axios');
const { setupCache } = require('axios-cache-adapter')
const csvtojson = require('csvtojson');
const express = require('express');


const app = express();

const urls = {
  '2017': 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv',
  '2018': 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv',
  '2019': 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv'
}


const urlTown = "https://abertos.xunta.gal/catalogo/administracion-publica/-/dataset/0301/casas-dos-concellos-galicia/102/acceso-aos-datos.csv"
const urlTheather = "https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0305/teatros-auditorios/001/descarga-directa-ficheiro.csv"

let cache = {};

let lastUpdateDate = {
  '2017': 0,
  '2018': 0,
  '2019': 0
};

// THEATHRES


app.get('/theatres', async (req, res) => {

  let listOfTheatres;

  const cache = setupCache({
    maxAge: 5 * 60 * 1000  // Every 5 minutes the cache is updated
  })

  const api = axios.create({
    adapter: cache.adapter
  })

    // TOWNS-CACHE: axios-cache-adapter

    api({
      url: urlTown,
      method: 'get'
    }).then(async (response) => {
  
      const length = await cache.store.length()
      console.log('Cache store length:', length)
    })

  try {
    listOfTheatres = (await axios.get(urlTheather)).data;
  }
  catch (e) {
    res.status(500).send();
    return;
  }

  listOfTheatres = await csvtojson({ 'delimiter': ';' }).fromString(listOfTheatres)
  let mapTheatres = listOfTheatres.map(theathres => {
    res.json(
      {
        concello: theathres['CONCELLO'],
        provincia: theathres['PROVINCIA'],
        coordenadas: theathres['COORDENADAS'],
        web: theathres['WEB'],
        data: {
          nombre: theathres['ESPAZO'],
          direccion: theathres['ENDEREZO'],
          aforo: theathres['AFORAMENTO'],
          codigoPostal: theathres['C�DIGO POSTAL'],
          telefono: theathres['TEL�FONO'],
          email: theathres['E-MAIL'],
        }
      })
  })
})

//TOWNS

app.get('/towns', async (req, res) => {

  let listOfTowns;

  const cache = setupCache({
    maxAge: 5 * 60 * 10
  })

  const api = axios.create({
    adapter: cache.adapter
  })

    // TOWNS-CACHE: axios-cache-adapter

    api({
      url: urlTown,
      method: 'get'
    }).then(async (response) => {
  
      const length = await cache.store.length()
      console.log('Cache store length:', length)
    })
  
    ///////////////////////////////////


  try {
    listOfTowns = (await axios.get(urlTown)).data;

  }
  catch (e) {
    res.status(500).send();
    return;
  }

  listOfTowns = await csvtojson({ 'delimiter': ',' }).fromString(listOfTowns)
  let mapTowns = listOfTowns.map(towns => {
    res.json(
      {
        concello: towns['CONCELLO'],
        provincia: towns['PROVINCIA'],
        coordenadas: towns['LATITUD'] + ',' + towns['LONGITUD'],
        web: towns['PORTAL WEB'],
        data: {
          direccion: towns['ENDEREZO'],
          telefono: towns['TEL�FONO'],
          codigoPostal: towns['C�DIGO POSTAL'],
          email: towns['CORREO ELECTR�NICO'],
          fax: towns['FAX'],
        }
      })
  })

});

// querystring
// ?year=2019&state=15
// ?year=2019

//BEACHES
app.get('/beaches', async (req, res) => {

  const cache = setupCache({
    maxAge: 5 * 60 * 10
  })

  const api = axios.create({
    adapter: cache.adapter
  })


  let listOfBeaches;
  const year = parseInt(req.query['year']);
  const state = req.query['state'];

  if (isNaN(year)) {
    res.status(400).send();
    return;
  }

  if (urls[year] === undefined) {
    res.status(404).send();
    return;
  }

  // BEACHES-CACHE: axios-cache-adapter

  api({
    url: urls[year],
    method: 'get'
  }).then(async (response) => {

    const length = await cache.store.length()
    console.log('Cache store length:', length)
  })

  ///////////////////////////////////

  try {

    listOfBeaches = (await axios.get(urls[year])).data;

  } catch (e) {
    res.status(500).send();
    return;
  }

  listOfBeaches = await csvtojson({ 'delimiter': ';' }).fromString(listOfBeaches);
  let mapBeaches = listOfBeaches.map(beaches => {
    res.json(
      {
        concello: beaches['CONCELLO'],
        provincia: beaches['PROVINCIA'],
        coordenadas: beaches['COORDENADAS'],
        web: beaches['M�IS INFORMACI�N EN TURGALICIA'],
        data: {
          codigo_provincia: beaches['C�DIGO PROVINCIA'],
          codigo_concello: beaches['C�DIGO CONCELLO'],
          nombre_playa: beaches['PRAIA'],
          lugar_e_parroquia: beaches['LUGAR E PARROQUIA'],
          longitud_playa: beaches["LONXITUDE"],
          tipo: beaches['TIPO'],
          tipo_de_area: beaches['TIPO DE AREA'],
        }
      })
  })

  if (state !== undefined) {
    listOfBeaches = listOfBeaches.filter(beach => beach['C�DIGO PROVINCIA'] === state)
  }

  res.json(listOfBeaches);



});

app.listen(8000);


