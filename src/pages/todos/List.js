import * as React from 'react';
import {useEffect} from "react";
import {db} from "../../firebase";
import {collection, getDocs, deleteDoc, doc, onSnapshot, limit, query, orderBy, where} from 'firebase/firestore';
import {Link} from "react-router-dom";

const List = () => {
    const [todos, setTodos] = React.useState([]);
    let unsub = null;
    useEffect(() => {
        console.log('List');
        (async () => {
            const collectionRef = collection(db, 'todos');

            //lấy về snapshot 1 lần
            //const collectionSnapShot = await getDocs(collectionRef);

            //subscribe vào observable của data
            //observable / pub-sub

            const collectionQuery = query(collectionRef, where('message', '==', 'HIHI', 'desc'), limit(3));
            unsub = onSnapshot(collectionQuery, (snapShot) => {
                const localTodos = [];
                console.log("Có sự thay đổi dữ liệu");
                snapShot.forEach(doc => {
                    localTodos.push({
                        id: doc.id,
                        message: doc.data().message
                    });
                });
                setTodos(localTodos);
            });

            /*const localTodos = [];*/
            /*      collectionSnapShot.forEach(doc => {
                      localTodos.push(
                          {
                              id: doc.id,
                              message: doc.data().message
                          });
                  });*/

        })();
    }, []);

    const deleteNote = async (id) => {
        const docRef = doc(db, 'todos', id);
        await deleteDoc(docRef);
    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.message}
                        <Link to={`/edit?id=${todo.id}`}>Edit</Link>
                        <button onClick={() => {
                            deleteNote(todo.id)
                        }}>Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
