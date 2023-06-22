/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { Request, Response } from 'express'
// import type { User } from '../types/user'
import { User, User as UserSchema } from '../models/users'

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const uid = req.params.id
  try {
    const userDB = await User.findById(uid)
    if (!userDB) {
      res.status(400).json({
        ok: false,
        msg: 'User not found'
      })
      return
    }
    res.status(200).json({
      ok: true,
      user: userDB
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'No se encontro usuario',
      error
    })
  }
}
export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body

  try {
    const emailExist = await User.findOne({ email })
    if (emailExist !== null) {
      res.status(400).json({
        ok: false,
        msg: 'email exist'
      })
      return
    }

    const user = new UserSchema(req.body)
    await user.save()
    res.json({
      ok: true,
      msg: 'Info submited',
      user
    })
  } catch (error) {
    res.json({
      ok: false,
      msg: error
    })
  }
}
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const uid = req.params.id
  try {
    const userDB = await User.findById(uid)
    const { password, email, ...fields } = req.body
    if (userDB?.email !== email) {
      const existingEmail = await User.findOne({ email })
      if (existingEmail !== null) {
        res.status(400).json({
          ok: false,
          msg: 'The email already exist'
        })
        return
      }
    }
    const userUpdated = await User.findByIdAndUpdate(uid, fields, { rawResult: true })
    res.json({
      ok: true,
      msg: 'User updated',
      user: userUpdated
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'No se encontro usuario',
      error
    })
  }
}
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const uid = req.params.id
  try {
    const userDB = await User.findByIdAndDelete(uid)
    if (!userDB) {
      res.status(400).json({
        ok: false,
        msg: 'User not found'
      })
      return
    }
    res.status(200).json({
      ok: true,
      msg: 'User deleted',
      user: userDB
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'No se encontro usuario',
      error
    })
  }
}
