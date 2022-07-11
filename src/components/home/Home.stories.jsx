import PropTypes from 'prop-types';
import React from "react";
import Home from "./Home";

export default {
    title: "cristofergomezmamani/home",
    component: Home,
}

const Template = args => <Home {...args}/>
export const DefaultHome = Template.bind({});

DefaultHome.args = {
    name: 'Seminario',
}

Home.protoType = {
    name: PropTypes.string,
}