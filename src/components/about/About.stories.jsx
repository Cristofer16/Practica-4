import PropTypes from 'prop-types';
import React from "react";
import About from "./About";

export default {
    title: "about/app",
    component: About,
}

const Template = args => <About {...args}/>
export const DefaultAbout = Template.bind({});

DefaultAbout.args = {
    bibliografia: 'Comencemos',
}

About.prototype = {
    bibliografia: PropTypes.string,
}