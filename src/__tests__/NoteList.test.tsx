import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { useStore } from '../store';
import NoteList from '../components/NoteList';

vi.mock('../store');

describe('NoteList Component', () => {
    const notes = [
        { id: 1, title: 'Note 1', comment: 'Comment 1', grade: 7, createdAt: '2023-01-01T00:00:00Z' },
        { id: 2, title: 'Note 2', comment: 'Comment 2', grade: 9, createdAt: '2023-01-02T00:00:00Z' },
        { id: 3, title: 'Note 3', comment: 'Comment 3', grade: 12, createdAt: '2023-01-03T00:00:00Z' },
        { id: 4, title: 'Note 4', comment: 'Comment 4', grade: 15, createdAt: '2023-01-04T00:00:00Z' }
    ];

    beforeEach(() => {
        useStore.mockReturnValue({ notes });
    });

    it('renders without crashing', () => {
        const { getByText } = render(
            <Router>
                <NoteList />
            </Router>
        );

        notes.forEach(note => {
            expect(getByText(note.title)).toBeInTheDocument();
            expect(getByText(`Note : ${note.grade}`)).toBeInTheDocument();
            expect(getByText(note.comment.substring(0, 50) + '...')).toBeInTheDocument();
            expect(getByText(new Date(note.createdAt).toLocaleDateString())).toBeInTheDocument();
        });
    });

    it('applies correct color classes based on grade', () => {
        const { container } = render(
            <Router>
                <NoteList />
            </Router>
        );

        notes.forEach(note => {
            const noteCard = container.querySelector(`.note-card.${getColor(note.grade)}`);
            expect(noteCard).toBeInTheDocument();
        });
    });

    const getColor = (grade) => {
        if (grade < 8) return 'red';
        if (grade < 10) return 'orange';
        if (grade < 13) return 'yellow';
        return 'green';
    };
});
