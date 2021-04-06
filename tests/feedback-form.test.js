import { Selector } from 'testcafe'

fixture `Send feedback form test`
    .page `http://zero.webappsecurity.com/index.html`

test("Fill and send feedback", async t => {
    // Get Selectors
    const feedbackBtn = Selector('#feedback')
    const usrName = Selector('#name')
    const usrEmail = Selector('#email')
    const msgSubject = Selector('#subject')
    const usrComment = Selector('#comment')
    const submitBtn = Selector('input[name="submit"]')
    const successMsg = Selector('div').innerText

    // Actions
    await t.click(feedbackBtn)
    await t.typeText(usrName, 'Tester', {paste: true})
    await t.typeText(usrEmail, 'tester@test.com', {paste: true})
    await t.typeText(msgSubject, 'Test Feedback', {paste: true})
    await t.typeText(usrComment, 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper leo a auctor lobortis. Aenean varius sagittis mi ut gravida. Ut accumsan purus felis, fringilla posuere turpis elementum nec. Aenean nec erat purus. Fusce lectus enim, ornare vel ligula ac, viverra vehicula velit. Sed in maximus sem. Donec ultricies urna et tortor hendrerit, vitae pretium sem congue. Cras eleifend elit at efficitur pellentesque. Etiam nec neque at ante posuere tincidunt. Curabitur non sollicitudin mauris. Duis vestibulum odio et interdum cursus. Nulla quis elementum massa. Integer cursus justo sagittis risus sodales facilisis. In rhoncus viverra lorem, id hendrerit velit cursus ut.',
        {paste: true})
    await t.click(submitBtn)

    // Assertions
    await t.expect(successMsg).contains(
        'Thank you for your comments, Tester. They will be reviewed by our Customer Service staff and given the full attention that they deserve.'
        )

})