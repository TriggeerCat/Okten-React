import {useFetch} from "./hooks/useFetch.ts";
import {User} from "./types/User.ts";
import {Post} from "./types/Post.ts";
import {UserComponent} from "./components/UserComponent.tsx";
import {PostComponent} from "./components/PostComponent.tsx";
import './styles/note.css';

function App() {
    const users = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')
    const posts = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')

    return (
        <div className='text-2xl'>
            { users ? users.map(value => <UserComponent key={value.id} user={value}/>) : null }
            <div className='h-3'></div>
            { posts ? posts.map(value => <PostComponent key={value.id} post={value}/>) : null }
        </div>
    )
}

export default App
