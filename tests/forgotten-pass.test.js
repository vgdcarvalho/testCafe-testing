import { Selector } from 'testcafe'

fixture `Forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`

test("User can request new password to be send to his email", async t => {
    // Get Selectors
    const signInBtn = Selector('#signin_button')
    const linkToPass = Selector('a').withText('Forgot your password ?')
    const emailInput = Selector('#user_email')
    const message = Selector('div').innerText

    // Actions
    await t.click(signInBtn)
    await t.click(linkToPass)
    await t.typeText(emailInput, 'test@test.com', { paste: true })
    await t.pressKey('enter')

    //Assertions
    await t.expect(message).contains('test@test.com')
    await t.expect(emailInput.exists).notOk()
})