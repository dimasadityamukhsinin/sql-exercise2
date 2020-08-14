const router = require('express').Router()

const {
    listing,
    detail,
    add
} = require('../controller/users')

router.get('/users', listing);
router.get('/users/:id', detail);
router.post('/users/register', add);

module.exports = router