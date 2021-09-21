const { Router } = require('express');
const videogamesRoutes = require('./videogames');
const genresRoutes = require('./genres')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogamesRoutes);
router.use('/genres', genresRoutes);

module.exports = router;
