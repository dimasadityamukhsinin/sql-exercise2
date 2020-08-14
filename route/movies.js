const router = require('express').Router()

const {
    listing,
    detail,
    add
} = require('../controller/movies')

router.get('/movies', listing);
router.get('/movies/:id', detail);
router.post('/movies/register', add);

module.exports = router