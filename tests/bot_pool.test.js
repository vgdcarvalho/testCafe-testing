import {Selector} from 'testcafe'

fixture `Votando sem parar`
    .page `https://gshow.globo.com/realities/bbb/bbb21/votacao/paredao-bbb21-vote-para-eliminar-caio-gilberto-ou-rodolffo-f47e03bf-dc0a-4593-a175-c9f3aa28834b.ghtml`

test('Votando no Rodolffo', async t => {
    // Get Selector
    const rodolffoBtn = Selector('._9887e9ea38a4105c9fbb').parent(9)
    const emailInput = Selector('#login')
    const passInput = Selector('#password')
    const checkbox = Selector('.recaptcha-checkbox-border')
    // Actions
    await t.click(rodolffoBtn)
    await t.typeText(emailInput, 'vgdcarvalho@hotmail.com', {paste:true})
    await t.typeText(passInput, '*******', {paste:true})
    await t.click(checkbox)
})