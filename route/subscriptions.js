const router = require('express').Router()

const {
    listing,
    detail,
    add
} = require('../controller/subscriptions')

router.get('/subscriptions', listing);
router.get('/subscriptions/:id', detail);
router.post('/subscriptions/register', add);

module.exports = router