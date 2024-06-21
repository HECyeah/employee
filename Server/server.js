import express, { application } from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8080

const db = new pg.Pool({
    connectionString: process.env.DB_CONNECTION
})


app.use(cors())
// this line reads 'incomming' json as an ojbect
app.use(express.json())


//testing for me:
app.get("/", (req, res) => {
    res.send("hello...it's me!")
})

//Where to run: 
app.listen(PORT, () => {
    console.log("server is running on port 8080")
})

//get & display
//listen: 
app.get("/staff", async (req, res) => {
    const result = await db.query(`select * from staff_peer_review`)
    res.json(result.rows)
})


app.post("/staff", async (req, res) => {
    const { employee_first_name, employee_surname, employee_job_title, comment, star_rating } = req.body
    console.log('REQUEST BODY:', req.body)
    const result = await db.query(`INSERT INTO staff_peer_review (employee_first_name, employee_surname, employee_job_title, comment, star_rating) VALUES ($1, $2, $3, $4, $5)`, [employee_first_name, employee_surname, employee_job_title, comment, star_rating])
    res.json({ recordInserted: result })
})

// go stuff to database: 


// STRING 
// WHEN WE SEND THINS OVER A NETWORK IT HAS TO BE A STRING
// res.send(`[{
//     name: 'Catpint',
//     superpower: 'Cat reflexes'
// }, {
//     name: 'Dogprint',
//     superpower: 'Smelling'
// }]`)

// res.send(`asdfasdfsad[]asdfwr[]efsd{{]asdfsd}}`)

// JSON
// Javascript Object Notation
// I'm going to wrtie strings that look like a lot like JS objects.
// thats a great idea! we're going to make is so it's very easy to automatically read these strings as if they're js objects

// res.json(`[{
//     "name": 'Catpint',
//     "superpower": 'Cat reflexes'
// }, {"
//     "name": 'Dogprint',
//     "superpower": 'Smelling'
// }]`)