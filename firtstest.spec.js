import { navigateTo } from "../support/page_objects/navigation_page"

describe('Test front', () => {
    it('front', () => {
      cy.openHomePage()
      cy.contains('Contact Us')
    })

    it('Contact us', () =>{
        cy.openHomePage()
      cy.get('[class="nav-link link-blue"]').click()

    })

    it('Formulario OK!', () =>{
      cy.contacUsPage()
      navigateTo.Formulario()
    })

    it('Formulario wrong!', () =>{

      cy.contacUsPage()
     navigateTo.FormularioWrong()

    })

})