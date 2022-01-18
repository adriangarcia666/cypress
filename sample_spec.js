describe('Test front', () => {
  
    it('front', () => {
      cy.visit('https://www.unosquare.com/')
      cy.contains('Contact Us')
    })

    it('Contact us', () =>{
      cy.visit('https://www.unosquare.com/')
      cy.get('[class="nav-link link-blue"]').click()

    })

    it('Formulario OK!', () =>{
      cy.visit('https://www.unosquare.com/ContactUs')
      cy.get('input[data-reactid=".hbspt-forms-0.1:$0.$name.0"]').type('adrian israel garcia medina')
      cy.get('input[autocomplete="email"]').type('agarciam0814@gmail.com')
      cy.get('input[autocomplete="organization"]').type('unosquare')
      cy.get('input[autocomplete="tel"]').type('4622849913')
      cy.get('[data-reactid=".hbspt-forms-0.1:$4.$message.0"]').type('prueba cypress')
      cy.get('input[value="Submit"]').click()
      cy.contains('Thank you!')

    })

    it('Formulario wrong!', () =>{

      cy.visit('https://www.unosquare.com/ContactUs')
      cy.get('input[autocomplete="email"]').type('agarciam0814@gmail.com')
      cy.get('input[autocomplete="organization"]').type('unosquare')
      cy.get('input[autocomplete="tel"]').type('4622849913')
      cy.get('[data-reactid=".hbspt-forms-0.1:$4.$message.0"]').type('prueba cypress')
      cy.get('input[value="Submit"]').click()
      cy.contains('Please complete this required field.')



    })

})






  
