// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import { Router } from 'react-router-dom';
// import { useStore } from '../store';
// import NoteForm from '../components/NoteForm';
//
// describe('NoteForm', () => {
//   it('renders correctly and submits the form', async () => {
//     const mockAddNote = jest.fn();
//     useStore.mockReturnValue({
//       notes: [],
//       addNote: mockAddNote,
//       updateNote: jest.fn(),
//     });
//
//     const { getByLabelText, getByText } = render(
//       <Router history={history}>
//         <NoteForm />
//       </Router>
//     );
//
//     const titleInput = getByLabelText('Titre :');
//     const gradeInput = getByLabelText('Note :');
//     const commentInput = getByLabelText('Commentaires :');
//     const submitButton = getByText('Ajouter');
//
//     fireEvent.change(titleInput, { target: { value: 'Test Title' } });
//     fireEvent.change(gradeInput, { target: { value: '10' } });
//     fireEvent.change(commentInput, { target: { value: 'Test Comment' } });
//     fireEvent.click(submitButton);
//
//     await waitFor(() => expect(mockAddNote).toHaveBeenCalled());
//
//     expect(titleInput.value).toBe('');
//     expect(gradeInput.value).toBe('');
//     expect(commentInput.value).toBe('');
//   });
// });