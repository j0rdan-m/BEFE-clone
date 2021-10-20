const express = require('express');
const router = express.Router();

const postCtrl = require ('../controllers/controller');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Middleware

//GET
// router.get('/', auth, sauceCtrl.getSauces);  
// router.get('/:id', auth, sauceCtrl.getSauce);
router.get('/', postCtrl.getPosts);  
router.get('/:id', postCtrl.getPosts);
//POST
// //router.post('/', sauceCtrl.postSauce);
// router.post('/:id/like', auth, sauceCtrl.likeSauce);
// router.post('/', auth, multer, sauceCtrl.createSauce);

// //PUT
// //router.put('/:id', auth, sauceCtrl.putSauce);
// router.put('/:id', auth, multer, sauceCtrl.putSauce);
// router.put('/:id', sauceCtrl.putSauce);

// //DELETE
// router.delete('/:id', auth, sauceCtrl.deleteSauce);
 
// //API Message
// router.use('/', sauceCtrl.apiMsg);

module.exports = router;