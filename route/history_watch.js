const router = require('express').Router()

const {
    listing,
    detail,
    add
} = require('../controller/history_watch')

router.get('/history_watch', listing);
router.get('/history_watch/:id', detail);
router.post('/history_watch/register', add);

module.exports = router