// store.mock.ts
export const useStore = () => {
    const notes = [
        { id: 1, title: 'Note 1', comment: 'Comment 1', grade: 7, createdAt: '2023-01-01T00:00:00Z' },
        { id: 2, title: 'Note 2', comment: 'Comment 2', grade: 9, createdAt: '2023-01-02T00:00:00Z' },
        { id: 3, title: 'Note 3', comment: 'Comment 3', grade: 12, createdAt: '2023-01-03T00:00:00Z' },
        { id: 4, title: 'Note 4', comment: 'Comment 4', grade: 15, createdAt: '2023-01-04T00:00:00Z' }
    ];
    return { notes };
};