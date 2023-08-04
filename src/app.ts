import cors from 'cors'
import express, { Application } from 'express'
import routes from './app/routes'
const app: Application = express()
app.use(express.json())
app.use(cors())
app.use('/api', routes)
export default app
