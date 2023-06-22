import { Schema, model } from 'mongoose'

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    curp: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: 'USER_ROLE'
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
UserSchema.method('toJSON', function () {
  const { _id, password, ...object } = this.toObject()
  object.uid = _id
  return object
})

export const User = model('Users', UserSchema)
