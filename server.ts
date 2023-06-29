import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
