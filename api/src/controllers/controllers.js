const { Activity, Country } = require("../db.js");
const axios = require("axios");

//------------------------------------------------------------------------------------>

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
//------------------------------------------------------------------------------------>
// const activityDB = async () => {
//     const actividad = await Activity.findAll();
//     return actividad;
// };
//------------------------------------------------------------------------------------>

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

// //------------------------------------------------------------------------------------>

module.export = {
    getAllCountries,
    //     activityDB,
    //     countryDB,
};
