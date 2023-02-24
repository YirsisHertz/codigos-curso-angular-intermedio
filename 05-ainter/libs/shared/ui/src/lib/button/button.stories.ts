import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { PrimaryDirective } from './directives/primary.directive';

import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [PrimaryDirective],
    }),
  ],
  argTypes: {
    isPrimary: { control: 'boolean' },
    isRounded: { control: 'boolean' },
    text: { control: 'text' },
    customColor: { control: 'color' },
    customForeground: { control: 'color', if: { arg: 'customColor' } },
  },
} as Meta;

const Template: Story = (args: any) => ({
  props: args,
});

export const Default: Story = Template.bind({});

export const Primary: Story = Template.bind({});
Primary.args = {
  isPrimary: true,
};

export const Rounded: Story = Template.bind({});
Rounded.args = {
  isRounded: true,
};

export const CustomText: Story = Template.bind({});
CustomText.args = {
  text: 'Mi Texto',
};
