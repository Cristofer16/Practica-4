import PropTypes from 'prop-types';
import React from "react";
import App from "./App";

export default {
    title: "cristofergomezmamani/app",
    component: App,
    argTypes: {
        background: { control: 'color' },
      },
}

const Template = args => <App {...args}/>
export const DefaultApp = Template.bind({});

DefaultApp.args = {
    active: true,
}

App.prototype = {
    active: PropTypes.bool,
    background: PropTypes.string,
}