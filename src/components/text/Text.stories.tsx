import React, { Component } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
    title: "Components/Text",
    component: Text,
    argTypes: {
        color: { control: "color" },
        fontSize: { control: "text" },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Text UI component',
            }
        }
      },
      tags: ['autodocs'],
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    content: "Sample text",
    color: "black",
    fontSize: "18px",
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    content: "Sample text",
    color: "black",
    fontSize: "18px",
    disabled: true,
};