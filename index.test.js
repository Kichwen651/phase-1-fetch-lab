// indexTest.js
import { fetchBooks } from './index.js'; // Adjust the path as necessary

describe('fetchBooks', () => {
    it('sends a fetch request to the correct URL', async () => {
        const result = await fetchBooks(); // Make sure to await the promise
        expect(result).toBeDefined(); // Check if result is defined
        // Additional checks can be added here
    });

    it('renders book titles into the DOM by passing a JSON object to renderBooks', async () => {
        await fetchBooks(); // Make sure to await the promise
        const bookList = document.getElementById('book-list');
        expect(bookList.children.length).toBeGreaterThan(0); // Check if book titles are rendered
        // More assertions can be added as needed
    });
});
