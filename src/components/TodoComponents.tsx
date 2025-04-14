import {useEffect, useState} from "react";
import {Todo} from "../types/todo.ts";
import {TodoComponent} from "./TodoComponent.tsx";

export function TodoComponents() {
    const [todo, setTodo] = useState<Todo[] | undefined>(undefined);

    async function fetchData(url: string) {
        const response = await fetch(url);
        const data = await response.json();
        setTodo(data);
    }

    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/todos');
    }, []);

    return (
        <div>
            {todo ? todo.map(value => <TodoComponent key={value.id} todo={value}/>) : 'nope'}
        </div>
    )
}