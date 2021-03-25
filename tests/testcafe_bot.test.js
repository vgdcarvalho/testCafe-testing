import { Selector } from 'testcafe'

fixture `Testing clicking bot with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`

    test('My first TestCafe test', async t => {
        const developer_name_input = Selector('#developer-name')
        const submit_button = Selector('#submit-button')
        const articleText = Selector('#article-header').innerText
        var i;

        for(i=0; i < 10; i++){
            // Type in text field:
            await t.typeText(developer_name_input, 'David')
            // await t.wait(3000)
        
            // Click on button:
            await t.click(submit_button)
            // Check if the text displayd is correct:
            await t.expect(articleText).contains('David')

            // Go back to the initial page to start over again
            await t.navigateTo("https://devexpress.github.io/testcafe/example/")
        }
    })