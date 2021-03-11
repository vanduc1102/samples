import express from 'express';
const router = express.Router();

import userController from '../controllers/users'

router.get('/', function (req, res, next) {
  userController.findAll()
    .then(users => res.send({
      data: users
    }))
    .catch(next)
});

router.post('/authenticate', function (req, res, next) {
  const { body, ip:ipAdress } = req;
  userController.authenticate(body, ipAdress)
    .then(createdUser => res.send({ data: createdUser }))
    .catch(next)
});

router.post('/refresh-token', function (req, res) {
  res.send({

  });
});

router.post('/revoke-token', function (req, res) {
  res.send({

  });
});

router.get('/:userId', function (req, res) {
  res.send({

  });
});

router.get('/:userId/refresh-tokens', function (req, res) {
  res.send({

  });
});

export default router;
