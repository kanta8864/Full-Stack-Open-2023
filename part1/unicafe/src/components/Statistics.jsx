import StatisticLine from './StatisticLine'

const Statistics = (props) => {

    if(props.total == 0) return (
        <>
        <h2>statistics</h2>
        <div>No feedback yet</div>
        </>
    )
    return (
        <>
        <h2>statistics</h2>
        <table>
            <tr><StatisticLine text="good" value ={props.good} /></tr>
            <tr> <StatisticLine text="neutral" value ={props.neutral} /></tr>
            <tr><StatisticLine text="bad" value ={props.bad} /></tr>
            <tr><StatisticLine text="all" value ={props.total} /></tr>
            <tr><StatisticLine text="average" value ={(props.good - props.bad)/props.total} /></tr>
            <tr><StatisticLine text="positive" value ={props.good / props.total} /></tr>
        </table>
        </>
    )
}

export default Statistics