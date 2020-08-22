const router = require('express').Router()

const {
    deleteUser,
    listing,
    detail,
    add,
    update
} = require('../controller/users')

router.get('/users', listing);
router.get('/users/:id', detail);
router.post('/users/register', add);
router.put('/users/update/:id', update);
router.delete('/users/delete/:id', deleteUser);

module.exports = router