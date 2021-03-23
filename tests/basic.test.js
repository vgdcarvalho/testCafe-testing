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
    })
    .after(async t => {
        // Cleaning test data
        // Logging and sending data to monitoring systems
    })

test('My first TestCafe test', async t => {
    //here goes testcafe code
    await t.typeText('#developer-name', 'David')
    await t.click('#submit-button')

    await t.expect(Selector('#article-header').innerText).contains('David')
})