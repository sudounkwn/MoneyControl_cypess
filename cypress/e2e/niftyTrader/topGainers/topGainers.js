import { Given  , Then , When} from "cypress-cucumber-preprocessor/steps";

import gen from "../../../GenericScripts/generic"

const GE = new gen()

//test steps
Given('I launch MC site',() => {
    GE.nt_Launch()
})

When('I am on homepage',() => {
    GE.nt_homepageAssert()
})

Then('I search for top gainers', () =>{
    GE.nt_login()
})

And('I fetch top gainers list',() =>{
    GE.nt_topGainers()
    GE.nt_printtolog()
})

