import { Selector } from 'testcafe'

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

    test("User cannot login with invalid credentials", async t => {
        const singInBtn = Selector('#signin_button')
        await t.click(singInBtn)

        const loginForm = Selector('#login_form')
        await t.expect(loginForm.exists).ok()

        const usernameInput = Selector('#user_login')
        const passwordInput = Selector('#user_password')
        await t.typeText(usernameInput, 'invalid user', { paste: true })
        await t.typeText(passwordInput, 'invalid pass', { paste: true })

        const submitBtn = Selector('.btn-primary')
        await t.click(submitBtn)

        const errorMsg = Selector('.alert-error').innerText
        await t.expect(errorMsg).contains('Login and/or password are wrong.')
    })