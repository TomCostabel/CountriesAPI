const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const { countryDB } = require("../controllers/controllers");
const { Activity, Country } = require("../db.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//--------------------------------------------PROBLEMAS PARA MODULARIZAR, SOLUCIONAR.........---------------------------------------->

const axios = require("axios");

const getAllCountries = async () => {
    const api = await axios.get("https://restcountries.com/v3/all");
    const apiData = api.data.map((e) => {
        return {
            id: e.cca3.toLowerCase(),
            name: e.name.common,
            img: e.flags[0],
            continent: e.continents[0],
            capital: e.capital ? e.capital[0] : "N/A",
            subregion: e.subregion ? e.subregion : e.continents[0],
            area: e.area,
            population: e.population,
        };
    });
    return apiData;
};

const countryDB = async () => {
    try {
        let info = await getAllCountries();
        info.forEach((e) => {
            Country.findOrCreate({
                where: {
                    id: e.id,
                    name: e.name,
                    flag: e.img,
                    continent: e.continent,
                    capital: e.capital,
                    subregion: e.subregion,
                    area: e.area,
                    population: e.population,
                },
            });
        });
        const country = await Country.findAll({
            include: [Activity],
        });
        return country;
    } catch (error) {
        res.status(404).send(error);
    }
};

const activityDB = async () => {
    const actividad = await Activity.findAll();
    return actividad;
};

//------------------------------------------------------------------------------------>

router.get("/activities", async (req, res) => {
    const act = await activityDB();
    res.send(act);
});

router.get("/countries", async (req, res) => {
    const { name } = req.query;
    // name && console.log(name);
    try {
        const allCountries = await countryDB();
        if (name) {
            const founds = allCountries.filter((el) =>
                el.name.toLowerCase().includes(name.toLowerCase())
            );
            founds.length
                ? res.status(200).send(founds)
                : res.status(404).send("Error 404");
        }
        res.status(200).send(allCountries);
    } catch (error) {
        console.log("El error es...", error);
    }
});

router.get("/countries/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const countryPorId = await Country.findAll({
            where: { id: id },
            include: [Activity],
        });
        res.send(countryPorId);
    } catch (error) {
        console.log(error);
    }
});

router.post("/activities", async (req, res) => {
    const { name, difficulty, season, duration, countries } = req.body;
    // console.log(req.body);

    try {
        let newAct = await Activity.create({
            name,
            difficulty,
            duration,
            season,
            countries: countries,
        });
        let countryDB = await Country.findAll({
            where: { name: countries },
        });
        newAct.addCountries(countryDB);
        res.send("Activity created ");
    } catch (err) {
        res.status(404).send("El error es", err);
    }
});

module.exports = router;
