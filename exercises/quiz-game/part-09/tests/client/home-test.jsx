const React = require('react');
const {mount} = require('enzyme');
import {BrowserRouter} from 'react-router-dom';

const {Home} = require("../../src/client/home");

test("test to see home", () => {
    const driver = mount(<BrowserRouter><Home/></BrowserRouter>);

    expect(driver.html().includes("hello welcome to quiz game")).toEqual(true);
    expect(driver.html().includes("start game")).toEqual(true);
})