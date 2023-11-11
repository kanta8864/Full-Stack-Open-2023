import { useState, useEffect } from 'react'
import {Filter} from './components/Filter'
import PersonForm  from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  // gets a list of persons that is already stored in the server
  useEffect(() => {
    personService.getAll().then(data => setPersons(data))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if(persons.map(x => x['name']).includes(newName)){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.filter(x => x.name == newName)[0]
        const updatedPerson = {...person, number: newNumber}
        personService.update(updatedPerson.id, updatedPerson)
        .then(data => {
          setPersons(persons.map(x => x.id != updatedPerson.id ? x : data))
          setNewNumber('')
          setNewName('')
          event.target.reset()
          setSuccessMessage("damn bro you really did it")
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        }).catch(error => {
          setErrorMessage(`${updatedPerson.name} was already removed from the server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(x => x.id != updatedPerson.id))
        })
      }
    
    }
    else {
      personService.create(personObject)
      .then(data => setPersons(persons.concat(data)))
      setNewNumber('')
      setNewName('')
      event.target.reset()
      setSuccessMessage("damn bro you really did it")
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    }
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    // console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const deleteClicked = (id) => {
    const deletePerson = persons.filter(x => x.id == id)[0]
    console.log("delete person", deletePerson)
    if(window.confirm(`Delete ${deletePerson["name"]}?`)) {
      personService.remove(id)
      setPersons(persons.filter(x => x.id != id))
      console.log(`${deletePerson["name"]} was deleted`)
    }
  }

  return (
    <div>
      <Notification message={errorMessage} classSelector="error" />
      <Notification message={successMessage} classSelector="success" />
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilter}/>
      <h2>Add a new person</h2>
      <PersonForm onSubmit={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons} newFilter={newFilter} deleteClicked={deleteClicked}/>
    </div>
  )
}

export default App
