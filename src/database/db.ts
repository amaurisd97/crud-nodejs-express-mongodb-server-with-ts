import mongoose from 'mongoose'

//  Crear la conexion con la BD
export const DB_CONN = async (): Promise<void> => {
  try {
    if (typeof process.env.DB_CONN === 'string') {
      await mongoose.connect(process.env.DB_CONN)
      console.log('in')
    }
  } catch (error) {
    process.exit(1)
  }
}
