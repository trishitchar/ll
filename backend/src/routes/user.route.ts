import express, {Router} from 'express'
import isTokenValid from '../middlewares/isTokenValid.js'
// import rateLimit from "express-rate-limit"; will add later in prod
import {register,login, logout, getProfile} from '../controllers/user.controller.js'

const router: Router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/test').post(isTokenValid,login);
router.route('/logout').get(logout);
router.route('/:id/profile').get(isTokenValid, getProfile);
// router.route('/profile/edit').post(isTokenValid, upload.single('profilePhoto'), editProfile);
// router.route('/suggested').get(isTokenValid, getSuggestedUsers);
// router.route('/followorunfollow/:id').post(isTokenValid, followOrUnfollow);

export default router;


