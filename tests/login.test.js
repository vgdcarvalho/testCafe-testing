import { Selector} from 'testcafe'
import {login} from '../helper'

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

    test("User cannot login with invalid credentials", async t => {
        // const usernameInput = Selector('#user_login')
        // const passwordInput = Selector('#user_password')
        // await t.typeText(usernameInput, 'invalid user', { paste: true })
        // await t.typeText(passwordInput, 'invalid pass', { paste: true })

        // const submitBtn = Selector('.btn-primary')
        // await t.click(submitBtn)
        await login("invalid user", "invalid pass")

        const errorMsg = Selector('.alert-error').innerText
        await t.expect(errorMsg).contains('Login and/or password are wrong.')
        
    })

    test("User can login with valid credentials", async t => {
        // const usernameInput = Selector('#user_login')
        // const passwordInput = Selector('#user_password')
        // await t.typeText(usernameInput, 'username', { paste: true })
        // await t.typeText(passwordInput, 'password', { paste: true })

        // const submitBtn = Selector('input[name="submit"]')
        // await t.click(submitBtn)
        await login("username", "password")

        const accountTab = Selector('#account_summary_tab')
        const loginForm = Selector('#login_form')
        await t.expect(accountTab.exists).ok()
        await t.expect(loginForm.exists).notOk()
    })

    test("User can logout only after loging in", async t => {
        const logoutBtn = Selector('#logout_link')
        await t.expect(logoutBtn.exists).notOk()

        // const usernameInput = Selector('#user_login')
        // const passwordInput = Selector('#user_password')
        // await t.typeText(usernameInput, 'username', { paste: true })
        // await t.typeText(passwordInput, 'password', { paste: true })

        // const submitBtn = Selector('input[name="submit"]')
        // await t.click(submitBtn)
        await login("username", "password")

        const userIcon = Selector('.icon-user')
        await t.click(userIcon)

        const singInBtn = Selector('#signin_button')       

        await t.expect(logoutBtn.exists).ok()
        await t.expect(singInBtn.exists).notOk()

        await t.click(logoutBtn)

        await t.expect(logoutBtn.exists).notOk()
        await t.expect(singInBtn.exists).ok()
    })