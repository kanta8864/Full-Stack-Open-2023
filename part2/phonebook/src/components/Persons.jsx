import PropTypes from 'prop-types'
import React from 'react'

const Persons = props => {
  return (
    <>
    <div>{props.persons.filter(x => x.name.toLowerCase().includes(props.newFilter.toLowerCase()))
    .map(x => <div>{x.name} {x.number} <button onClick={() => props.deleteClicked(x.id)}>delete</button></div>)}</div>
    </>
  )
}

export default Persons
//rscp