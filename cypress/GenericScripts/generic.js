/// <reference types="Cypress" />

class Generic{
        nt_Launch(){
            cy.visit('https://www.niftytrader.in/')
        }

        nt_homepageAssert(){
            cy.get('a[title="NIFTY 50"]').should('be.visible')
            cy.get('a[title="SGX NIFTY"]').should('be.visible')
            cy.get('a[title="NIFTY BANK"]').should('be.visible')
        }

        nt_login(){
            cy.get('a[title="Sign In"]').should('be.visible').click()
            cy.get('#loginform').should('be.visible')
            cy.get('button[title="Close"]').click()
        }

        nt_topGainers(){
            let c=0;
            cy.get("nav>a:nth-child(1)").click({force:true})
            cy.writeFile('cypress/fixtures/runtimeData/runtimeData.txt','TopGainers',{flag:'a+'})
            cy.get("table.table>tbody>tr:nth-child(1)>td>a").each(x=>{
                cy.writeFile('cypress/fixtures/runtimeData/runtimeData.txt','\n', { flag: 'a+' });
                cy.writeFile('cypress/fixtures/runtimeData/runtimeData.txt',x.text(),{flag:'a+'})
                c=c+1;
                cy.readFile('cypress/fixtures/runtimeData/runtimeData.json').then(y=>{
                        y.c=x.text()
                        cy.writeFile('cypress/fixtures/runtimeData/runtimeData.json',y)
                    })
//                cy.writeFile('cypress/fixtures/runtimeData/runtimeData.json',{c:x.text()})

            })



        }

        nt_topLoosers(){
            cy.get("nav>a:nth-child(1)").click({force:true})

                }

        nt_printtolog(){
            cy.readFile('cypress/fixtures/runtimeData/runtimeData.txt').then(x=>{
                cy.log(x)
                })
        }



}export default Generic
