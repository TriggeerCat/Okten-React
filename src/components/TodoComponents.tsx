import {useEffect, useState} from "react";

export function TodoComponents(url: string) {
    const [todo, setTodo] = useState();
    useEffect(() => {
        fetch(url).then((resp) => resp.json()).then((data) => setTodo(data))
    }, []);

}