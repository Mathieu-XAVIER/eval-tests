import React from 'react';
import { useStore } from '../store.mock.ts';
import {Link} from 'react-router-dom';
import '../styles.css';

const NoteList = () => {
    const {notes} = useStore();

    const getColor = (grade: number) => {
        if (grade < 8) return 'red';
        if (grade < 10) return 'orange';
        if (grade < 13) return 'yellow';
        return 'green';
    };

    return (
        <div className="container">
            <div className="note-list">
                {notes.map(note => (
                    <div key={note.id} className={`note-card ${getColor(note.grade)}`}>
                        <Link to={`/notes/${note.id}`}>
                            <h3>{note.title}</h3>
                            <p>{note.comment.substring(0, 50)}...</p>
                            <p>Note : {note.grade}</p>
                            <p>{new Date(note.createdAt).toLocaleDateString()}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoteList;
