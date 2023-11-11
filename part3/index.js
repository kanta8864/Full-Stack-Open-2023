const express = require('express')
var morgan = require('morgan')
var cors = require('cors')
const app = express()

// making ue of express json-parser. It takes the JSON data of a request and 
// transforms it into a Javascript object and attatches it to the body 
// property of the request object.
app.use(express.json())

// this middleware allow fore requests from all origins
app.use(cors())

// this is for morgan logger. Specifying the logging format. 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

// allow express to show statick conent
app.use(express.static('dist'))

// craeting a token for morgan logger
morgan.token('data', function(req, res) {
    return JSON.stringify(req.body)
});

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]



app.get('/info', (request, response) => {
  response.send(`<div>Phonebook has info for ${persons.length} people </div><br/>
  <div>${new Date(Date.now())}</div>`)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(x => x.id == id)
    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(x => x.id != id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    if(!body.name){
        return response.status(400).json({
            error: 'name missing'
        })
    }
    if(!body.number){
        return response.status(400).json({
            error: 'number missing'
        })
    }
    if(persons.map(x => x.name).includes(body.name)) {
        return response.status(400).json({
            error: 'number already exists'
        })
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }
    persons = persons.concat(person)
    response.json(person)
})

const generateId = () => {
    /*
    const maxId = persons.length > 0 ? Math.max(...persons.map(x => x.id)) : 0
    return maxId + 1
    */
   return Math.floor(Math.random() * 100000)
}


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})