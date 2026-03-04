import React from 'react'
import Button from './Button'


describe('<Button />', () => {
    it('renders', () => {

        // see: https://on.cypress.io/mounting-react
        cy.mount(<Button />)
    });

    it("text'i render et", () => {
        cy.mount(<Button>Tıkla</Button>);
        cy.get("button").should("exist").and("contain.text", "Tıkla");
    });
})