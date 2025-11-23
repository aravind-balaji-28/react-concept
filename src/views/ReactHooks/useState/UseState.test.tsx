// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import UseState from './index';

// describe('UseState component', () => {
//   test('renders initial count', () => {
//     render(<UseState />);
//     expect(screen.getByText(/Count : 0/i)).toBeInTheDocument();
//   });
//   test('increments count when button is clicked', () => {
//     render(<UseState />);

//     const button = screen.getByRole('button', { name: /increment/i });

//     // first click -> 1
//     fireEvent.click(button);
//     expect(screen.getByText(/Count : 1/i)).toBeInTheDocument();

//     // second click -> 2
//     fireEvent.click(button);
//     expect(screen.getByText(/Count : 2/i)).toBeInTheDocument();
//   });
// });
