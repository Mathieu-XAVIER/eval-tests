import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NoteDetail from './components/NoteDetail';

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Mes notes</Link>
                <Link to="/new">Ajouter une note</Link>
            </nav>
            <Routes>
                <Route path="/" element={<NoteList />} />
                <Route path="/new" element={<NoteForm />} />
                <Route path="/notes/:noteId" element={<NoteDetail />} />
                <Route path="/notes/:noteId/edit" element={<NoteForm />} />
            </Routes>
        </Router>
    );
};

export default App;
