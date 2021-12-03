import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText('First Name:');
    const lastName = screen.getByLabelText('Last Name:');
    const address = screen.getByLabelText('Address:');
    const city = screen.getByLabelText('City:');
    const state = screen.getByLabelText('State:');
    const zip = screen.getByLabelText('Zip:');
    const button = screen.getByRole('button');

    userEvent.type(firstName, 'Mike');
    userEvent.type(lastName, 'Mike');
    userEvent.type(address, '100 Florida Ln');
    userEvent.type(city, 'Bucharest');
    userEvent.type(state, 'somewhereinRomania');
    userEvent.type(zip, '54344');

    userEvent.click(button);

    const successMessage = screen.getByTestId('successMessage');
    
    expect(successMessage).toBeInTheDocument();






});
