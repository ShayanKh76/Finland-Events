import { render, screen, waitFor } from '@testing-library/react';
import Header from './Header';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';

describe('Home Page Header', () => {
    it('Check for header text', async () => {

        render(
            <Header />
        );
        await waitFor(() => {
            expect(screen.getByText('Finland Events')).toBeInTheDocument();
        });
    });
});
