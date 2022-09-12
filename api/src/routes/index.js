const { Router } = require("express");
const Countries = require("../routes/countries.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", Countries);

module.exports = router;
