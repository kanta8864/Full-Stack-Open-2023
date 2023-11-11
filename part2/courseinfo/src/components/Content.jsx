import Part from './Part'

const Content = (props) => {
  const total = props.part.reduce((sum ,part) => {
     return sum + part["exercises"]
  }, 0)
  
  console.log('total', total)
    return (
        <div>
            <ul>
                {props.part.map(x =>
                    <Part part={x}></Part>)}
            </ul>
            <b>Total of {total} exercises</b>
        </div>
    )
}

export { Content }
