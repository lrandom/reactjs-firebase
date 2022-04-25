import React, {useState} from 'react';
import {db} from "../../firebase";

const Add = () => {
    const [message, setMessage] = useState('');
    const addNote = () => {
        
    }
    return (
        <div>
            <h1>Add Todo</h1>
            <input type="text"
                   onChange={(evt) => setMessage(evt.target.value)}
                   value={message}/>
            <button>Add Note</button>
        </div>
    );
};

export default Add;
