import React, { useState } from 'react';

export const Addtodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {

        e.preventDefault();
        if (!title || !desc) {
            alert("title or description can not be blank")
        }
        else{
        addTodo(title, desc);
        setTitle("");
        setDesc("");
        }       
    }
    return (
        <div className="container my-3 rinku">
            <h3>Add a tasodo</h3>
            <form onSubmit={submit} >
                <div className="mb-3">
                    <label htmlFor="title" cls="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form></div>
    )
}
export default Addtodo