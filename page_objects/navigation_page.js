export class NavigationPage{

Formulario(){

    cy.get('input[data-reactid=".hbspt-forms-0.1:$0.$name.0"]').type('adrian israel garcia medina')
    cy.get('input[autocomplete="email"]').type('agarciam0814@gmail.com')
    cy.get('input[autocomplete="organization"]').type('unosquare')
    cy.get('input[autocomplete="tel"]').type('4622849913')
    cy.get('[data-reactid=".hbspt-forms-0.1:$4.$message.0"]').type('prueba cypress')
    cy.get('input[value="Submit"]').click()
    cy.contains('Thank you!')

}

FormularioWrong(){
    cy.get('input[autocomplete="email"]').type('agarciam0814@gmail.com')
    cy.get('input[autocomplete="organization"]').type('unosquare')
    cy.get('input[autocomplete="tel"]').type('4622849913')
    cy.get('[data-reactid=".hbspt-forms-0.1:$4.$message.0"]').type('prueba cypress')
    cy.get('input[value="Submit"]').click()
    cy.contains('Please complete this required field.')




}




}

export const navigateTo = new NavigationPage()