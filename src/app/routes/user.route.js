const express = require('express');
const { passport } = require('../plugins/passport');
const { checkRole } = require('../../middlewares/check-role');
const { userController } = require('../controllers');
const { userValidation } = require('../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.get('/profile', userController.profile);
router.get('/product', userController.product);
router.post('/add-cart', userController.addToCart);
router.get('/', passport.authenticate('jwt', { session: false }), checkRole('ADMIN'), userController.getUsers);
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    checkRole('ADMIN'),
    validate(userValidation.createUserSchema),
    userController.createUser,
);
router.put('/:userID', userController.updateUser); // Not complete yet, incomplete validation, service update User

router.post('/user-update', userController.updateUser);

router.delete(
    '/:userID',
    passport.authenticate('jwt', { session: false }),
    checkRole('ADMIN'),
    validate(userValidation.deleteUserSchema),
    userController.deleteUser,
);

module.exports = router;
