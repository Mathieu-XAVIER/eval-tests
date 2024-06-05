import React, { useState } from 'react';
import { useStore } from '../store.mock.ts';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';

const NoteForm = () => {
    const { noteId } = useParams();
    const navigate = useNavigate();
    const { notes, addNote, updateNote } = useStore();
    const note = notes.find(n => n.id === noteId) || { title: '', grade: 0, comment: '' };

    const [title, setTitle] = useState(note.title);
    const [grade, setGrade] = useState(note.grade);
    const [comment, setComment] = useState(note.comment);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (noteId) {
            updateNote({ ...note, title, grade, comment });
        } else {
            addNote({ title, grade, comment, createdAt: new Date().toISOString() });
        }
        navigate('/');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="note-form">
                <label>
                    Titre :
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Note :
                    <input value={grade} onChange={(e) => setGrade(Number(e.target.value))} type="number" />
                </label>
                <label>
                    Commentaires :
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                </label>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default NoteForm;
