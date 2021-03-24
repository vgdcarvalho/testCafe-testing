import { Selector } from 'testcafe'

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t => {
        // Test setup goes here
        // await runDatabaseReset()
        // await seedTestData()
    })
    .beforeEach(async t => {
        // Runs before each test

        //// Set the speed of the test: float 0 < x < 1
        //await t.setTestSpeed(1)

        //// Set timeout of TestCafe waiting window.load event 
        //await t.setPageLoadTimeout(1)
    })
    .after(async t => {
        // Cleaning test data
        // Logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        // Runs after each test
    })

test('My first TestCafe test', async t => {
    // here goes testcafe code

    // Without Selector:
    // await t.typeText('#developer-name', 'David')
    //// await t.wait(3000)
    // await t.click('#submit-button')

    // await t.expect(Selector('#article-header').innerText).contains('David')

    // With Selector:
    const developer_name_input = Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText

    // Take screenshot, several ways:
    //// Specifying path
    //await t.takeScreenshot({path: "./tests/test.png"})
    //// Using default path and capturing the whole page
    //await t.takeScreenshot({fullPage: true})
    //// Taking screenshot of an specific element
    //await t.takeElementScreenshot(submit_button)

    // Type in text field:
    await t.typeText(developer_name_input, 'David')
    // await t.wait(3000)

    // Click on button:
    await t.click(submit_button)
    // Check if the text displayd is correct:
    await t.expect(articleText).contains('David')
})