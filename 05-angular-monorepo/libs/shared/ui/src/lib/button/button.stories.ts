import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from './button.component';

import { SharedUiModule } from '../shared-ui.module';
// import { PrimaryDirective } from './directives/primary.directive';

export default {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      // declarations: [PrimaryDirective],
      imports: [SharedUiModule],
    }),
  ],
  argTypes: {
    isPrimary: {
      control: 'boolean',
      description: 'Color the primary',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isRounded: {
      control: 'boolean',
      description: 'Define is rounded',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    text: {
      control: 'text',
      description: 'Custom text',
      defaultValue: 'Default Text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Default Text' },
      },
    },
    bgColor: {
      control: 'color',
      description: 'Custom Background Color',
      defaultValue: 'tomato',
      table: {
        type: { summary: 'RGB Color' },
        defaultValue: { summary: 'tomato' },
      },
    },
    textColor: {
      control: 'color',
      description: 'Custom Text Color',
      defaultValue: 'snow',
      table: {
        type: { summary: 'RGB Color' },
        defaultValue: { summary: 'snow' },
      },
    },
  },
} as Meta;

const Template: StoryFn = (args: any) => ({
  props: args,
});

export const Default: StoryFn = Template.bind({});

export const Primary: StoryFn = Template.bind({});
Primary.args = {
  isPrimary: true,
};

export const Rounded: StoryFn = Template.bind({});
Rounded.args = {
  isRounded: true,
};

export const CustomText: StoryFn = Template.bind({});
CustomText.args = {
  text: 'Custom Text',
};

export const CustomBackground: StoryFn = Template.bind({});
CustomBackground.args = {
  bgColor: 'blue',
};
