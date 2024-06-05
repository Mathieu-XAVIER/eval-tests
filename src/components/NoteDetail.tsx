import React from 'react';
import { useStore } from '../store.mock.ts';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';

const NoteDetail = () => {
    const { noteId } = useParams();
    const navigate = useNavigate();
    const { notes, deleteNote } = useStore();
    const note = notes.find(n => n.id === noteId);

    if (!note) {
        return <div>Note not found</div>;
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            deleteNote(noteId);
            navigate('/');
        }
    };

    return (
        <div className="container">
            <div className={`note-card ${getColor(note.grade)}`}>
                <h2>{note.title}</h2>
                <p>Note: {note.grade}</p>
                <p>Commentaires: {note.comment}</p>
                <p>{new Date(note.createdAt).toLocaleDateString()}</p>
                <button onClick={() => navigate(`/notes/${noteId}/edit`)}>Modifier</button>
                <button onClick={handleDelete}>Supprimer</button>
            </div>
        </div>
    );
};

const getColor = (grade: number) => {
    if (grade < 8) return 'red';
    if (grade < 10) return 'orange';
    if (grade < 13) return 'yellow';
    return 'green';
};

export default NoteDetail;
