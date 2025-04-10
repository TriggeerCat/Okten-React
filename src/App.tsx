import {coursesArray} from "./data/arrays-2.ts";
import {CourseComponent} from "./components/CourseComponent.tsx";

function App() {
    return (
        <>
            {coursesArray.map((value, index) => <CourseComponent key={index} title={value.title} monthDuration={value.monthDuration} hourDuration={value.hourDuration} modules={value.modules}/>)}
        </>
    )
}

export default App

//з arrays.js взяти масиви coursesArray. Створити необхідні моделі, та компоненти для того, щоб повноцінно відобразити його
//
// Стилізація довільна, але обов’язково підключена і мінімально зроблена (хоча б один стиль, який працює).