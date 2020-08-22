const router = require('express').Router()

const {
    listing,
    detail,
    add,
    update,
    deleteMovie
} = require('../controller/movies')

router.get('/movies', listing);
router.get('/movies/:id', detail);
router.post('/movies/register', add);
router.post('/movies/update/:id', update);
router.post('/movies/delete/:id', deleteMovie);

module.exports = router