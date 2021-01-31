describe('App E2E', () => {
   // cy.visit('https://google.com');

   it('Try to sign in without Secure Connection', function () {

      // cy.visit('https://google.com');
      cy.visit('https://accounts.google.com/');


         cy.get('input[type=email]').type('oscar.rojas4096@gmail.com').type('{enter}')
   });


   it('Find Search Box', function () {
      cy.visit('https://google.com');
      let searchText = 'Leah Garrison is the love of my life';
      cy.get('.gLFyf').type(searchText, {delay: 3}).type('{enter}')

      cy.get('.gLFyf').then($searchField => {

         cy.get('.gLFyf').then($searchFieldWithResults => {
            expect($searchFieldWithResults).to.have.value(searchText);
         })

      })

   });

   //cy.visit('https://google.com');

   /* === Test Created with Cypress Studio === */
   it('Google Test 1', function () {
      /* ==== Generated with Cypress Studio ==== */

      let zip = 30075;

      cy.visit('https://google.com');
      //  cy.get('.gLFyf').click();
      cy.get('.gLFyf').type('weather ' + zip);

      cy.get('.gLFyf').type('{enter}').then(($searchBox) => {

         // store the button's text
         const txt = $searchBox.val();
         cy.get('input[type=text]').should('have.value', txt);   //cy.get('.FPdoLc > center > .gNO89b').click();

      });



      cy.contains('Atlanta')
      cy.get('#wob_loc').contains(zip);
   //    // cy.get('g-raised-button > :first').contains('Temperature');
   //    // cy.get('g-raised-button > :nth(1)').contains('Precipitation');
   //    // cy.get('g-raised-button > :nth(2)').contains('Wind');

   //    // cy.get('g-raised-button > :nth(2)').click();
   //    // cy.get('#logo > img')
   //   // cy.get('#logo > img').click()
     
   //    // cy.contains('mph');

   //    // cy.get('button')
   //    /* ==== Generated with Cypress Studio ==== */

   //    // cy.get('.gLFyf').type('{enter}');
   //    // cy.get('.aajZCb > .tfB0Bf > center > .gNO89b').click();
   //    // cy.get('.gLFyf').type('{enter}');
   //    //cy.get('g-raised-button').first().contains("Temperature").click();
   //    /* ==== End Cypress Studio ==== */
   //    /* ==== Generated with Cypress Studio ==== */
   })

   /* === Test Created with Cypress Studio === */
   // it('Sign In Test - Expect Failure', function() {
   //    /* ==== Generated with Cypress Studio ==== */
   //    cy.visit('https://www.linkedin.com');
   //    cy.get('#session_key').click();
   //    let email = 'Oscarrojas4096@gmail.com';
   //    cy.get('#session_key').type(email);
   //    cy.get('#session_password').type('lsdkjlksdjlsdkfj');
   //    cy.get('.sign-in-form__submit-button').click();
   //    // let $errorMsg = ;
   //    cy.get('#error-for-password').then($msg => {
   //       expect($msg).to.exist

   //    })

   //    cy.get('#password').then($pass => {
   //       expect($pass).to.have.text('');
   //    });

   //    cy.get('#username').should('have.value', email); 
   //    // expect(cy.get('#error-for-password')).not.to.exist

   // //   .contains("That’s not the right password. Forgot password?");      /* ==== End Cypress Studio ==== */
   //    /* ==== Generated with Cypress Studio ==== */
   //    /* ==== End Cypress Studio ==== */
   // });

   /* === Test Created with Cypress Studio === */
   it('Test for leah', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('https://accounts.google.com/');
      cy.get('#Email').click();
      cy.get('#Email').type('one one one two');
      cy.get('#next').click();
      cy.get('#Email').then($eemail => { 
         $eemail.should('have.value', 'one one one two'); 
      })
      /* ==== End Cypress Studio ==== */
   });
});

