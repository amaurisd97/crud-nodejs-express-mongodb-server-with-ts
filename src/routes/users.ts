/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../controllers/users'
import { check } from 'express-validator'
import { campsValidate } from '../middlewares/validations'
export const router = Router()

router.get('/:id', getUser)
router.post(
  '/',
  [
    check('name', 'The name is mandatory').not().isEmpty(),
    check('password', 'The password is mandatory').not().isEmpty(),
    check('email', 'The email is mandatory').not().isEmpty().isEmail(),
    campsValidate
  ],

  createUser
)
router.put(
  '/:id',
  [
    check('name', 'The name is mandatory').not().isEmpty(),
    check('password', 'The password is mandatory').not().isEmpty(),
    check('email', 'The email is mandatory').not().isEmpty().isEmail(),
    campsValidate
  ],
  updateUser
)
router.delete('/:id', deleteUser)
