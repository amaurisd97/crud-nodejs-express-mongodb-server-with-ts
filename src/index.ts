import express from 'express'
import { DB_CONN } from './database/db'
import dotenv from 'dotenv'
import { router } from './routes/users'

dotenv.config()
const app = express()

const PORT = String(process.env.PORT)

DB_CONN().catch(console.log)

app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`connected:http://localhost:${PORT}`)
})
