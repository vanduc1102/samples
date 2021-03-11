import express from 'express';
const router = express.Router();

import authorize from '../middlewares/authorization'
import Role from '../config/role'
import userController from '../controllers/users'

router.get('/', authorize([Role.Admin]), function (req, res, next) {
  userController.findAll()
    .then(users => res.send({
      data: users
    }))
    .catch(next)
});

router.post('/authenticate', function (req, res, next) {
  const { body, ip: ipAddress } = req;
  userController.authenticate(body, ipAddress)
    .then(createdUser => res.send({ data: createdUser }))
    .catch(next)
});

router.post('/refresh-token', function (req, res, next) {
  const { body, ip: ipAddress } = req;
  userController.refreshToken(body.refreshToken, ipAddress)
    .then(response => res.json({
      data: response
    }))
    .catch(next)
});

router.post('/revoke-token', function (req, res, next) {
  const { body } = req;
  userController.revokeToken(body.token)
    .then(response => res.json({
      data: response
    }))
    .catch(next)
});

router.get('/profile', authorize(), function (req, res, next) {
  const currentUserId = req.user.id;
  userController.getProfile(currentUserId)
    .then(response => res.json({
      data: response
    }))
    .catch(next)
});

router.get('/:userId', authorize([Role.Admin]), function (req, res, next) {
  const { userId } = req.params;
  userController.getProfile(userId)
    .then(response => res.json({
      data: response
    }))
    .catch(next)
});

router.get('/refresh-tokens', function (req, res, next) {
  const currentUserId = req.user.id;
  userController.getRefreshToken(currentUserId)
    .then(response => res.json({
      data: response
    }))
    .catch(next)
});

router.get('/:userId/refresh-tokens', authorize([Role.Admin]), function (req, res, next) {
  const { userId } = req.params;
  userController.getRefreshToken(userId)
    .then(response => res.json({
      data: response
    }))
    .catch(next)
});

export default router;
