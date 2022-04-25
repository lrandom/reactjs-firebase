import * as React from 'react';
import {useEffect} from "react";
import {db} from "../../firebase";
import {collection, getDocs} from 'firebase/firestore';

const List = () => {
    const [todos, setTodos] = React.useState([]);
    useEffect(() => {
        console.log('List');
        (async () => {
            const collectionRef = collection(db, 'todos');
            const collectionSnapShot = await getDocs(collectionRef);
            const localTodos = [];
            collectionSnapShot.forEach(doc => {
                //console.log(doc.data());
                localTodos.push(doc.data().message);
            });
            setTodos(localTodos);
        })();
    }, []);

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
