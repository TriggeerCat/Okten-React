import {coursesAndDurationArray} from "./data/arrays-2.ts";
import './App.css'

function App() {
    return (
        <>
            <ul>{coursesAndDurationArray.map((value, index) => <li key={index}>{value.title}. Duration: {value.monthDuration} months</li>)}</ul>
        </>
    )
}

export default App
