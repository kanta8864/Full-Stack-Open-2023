import { Header } from './Header'
import { Content } from './Content'

const Course = ({course}) => {
    console.log("course", course)
    return (
        <div>
            <Header course={course["name"]} />
            <Content part={course["parts"]}/>
        </div>
    )
}

export default Course