import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middleware/globalError.handler'
import routes from './app/routes'
const app: Application = express()
app.use(express.json())
app.use(cors())
app.use('/api', routes)
app.use(globalErrorHandler)
export default app
