const React = require('react');
const {mount} = require('enzyme');
const {Match} = require("../src/match");


function checkQuizIsDisplayed(mounted) {

    const questions = mounted.find('.question');
    expect(questions.length).toEqual(1);

    const answers = mounted.find('.answer');
    expect(answers.length).toEqual(4);
}

test("Test rendered quiz", () => {
    const mounted = mount(<Match/>);
    checkQuizIsDisplayed(mounted);
});


test("Test do answer", () => {

    const mounted = mount(<Match/>);

    let msg = undefined;

    global.alert = (s) => {
        msg = s
    };

    const first = mounted.find('.answer').at(0);
    first.simulate('click');

    checkQuizIsDisplayed(mounted);
    expect(msg).toBeDefined();
});
