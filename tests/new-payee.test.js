import {Selector} from 'testcafe'
import {login} from '../helper'

fixture `New payee test`
    .page `http://zero.webappsecurity.com/index.html`

test
.before(async t =>{
    // const singInBtn = Selector('#signin_button')       
    // await t.click(singInBtn)

    // const loginForm = Selector('#login_form')
    // await t.expect(loginForm.exists).ok()

    // const usernameInput = Selector('#user_login')
    // const passwordInput = Selector('#user_password')
    // await t.typeText(usernameInput, 'username', { paste: true })
    // await t.typeText(passwordInput, 'password', { paste: true })

    // const submitBtn = Selector('input[name="submit"]')
    // await t.click(submitBtn)
    await login("username", "password")
})
('User can add new payee', async t =>{
    // Selectors
    const payBillsTab = Selector('#pay_bills_tab')
    const addNewPayeeTab = Selector('a').withText('Add New Payee')
    const formName = Selector('#np_new_payee_name')
    const formAddress = Selector('#np_new_payee_address')
    const formAccount = Selector('#np_new_payee_account')
    const formDetails = Selector('#np_new_payee_details')
    const formSubmitBtn = Selector('#add_new_payee')
    const formSuccessMsg = Selector('#alert_content').innerText

    // Actions
    await t.click(payBillsTab)
    await t.click(addNewPayeeTab)
    await t.typeText(formName, 'Tester Name', {paste: true})
    await t.typeText(formAddress, 'Test Street, 0', {paste: true})
    await t.typeText(formAccount, 'Test Account 123', {paste: true})
    await t.typeText(formDetails, 'Test Details', {paste: true})
    await t.click(formSubmitBtn)

    // Assertions
    await t.expect(formSuccessMsg).contains('The new payee Tester Name was successfully created.')
})