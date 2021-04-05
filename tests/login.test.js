import { Selector, t } from 'testcafe'

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

    .beforeEach(async t => {
        const singInBtn = Selector('#signin_button')
        await t.click(singInBtn)

        const loginForm = Selector('#login_form')
        await t.expect(loginForm.exists).ok()
    })

    test("User cannot login with invalid credentials", async t => {
        const usernameInput = Selector('#user_login')
        const passwordInput = Selector('#user_password')
        await t.typeText(usernameInput, 'invalid user', { paste: true })
        await t.typeText(passwordInput, 'invalid pass', { paste: true })

        const submitBtn = Selector('.btn-primary')
        await t.click(submitBtn)

        const errorMsg = Selector('.alert-error').innerText
        await t.expect(errorMsg).contains('Login and/or password are wrong.')
    })

    test("User can login with valid credentials", async t => {
        const usernameInput = Selector('#user_login')
        const passwordInput = Selector('#user_password')
        await t.typeText(usernameInput, 'username', { paste: true })
        await t.typeText(passwordInput, 'password', { paste: true })

        const submitBtn = Selector('input[name="submit"]')
        await t.click(submitBtn)

        const accountTab = Selector('#account_summary_tab')
        const loginForm = Selector('#login_form')
        await t.expect(accountTab.exists).ok()
        await t.expect(loginForm.exists).notOk()
    })