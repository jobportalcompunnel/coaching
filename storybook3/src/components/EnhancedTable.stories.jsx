// src/components/EnhancedTable.stories.jsx

import React from 'react';
import { EnhancedTable } from './EnhancedTable';

// Dummy data to be passed as a prop
const sampleRows = [
  { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, history: [{ date: '2023-01-01', customerId: '11091700', amount: 3 }] },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, history: [{ date: '2023-01-02', customerId: '78777', amount: 1 }] },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, history: [{ date: '2023-01-03', customerId: '12345', amount: 5 }] },
];

export default {
  title: 'MUI/EnhancedTable',
  component: EnhancedTable,
  // This is the key part: use the 'args' property to define the props.
  args: {
    rows: sampleRows,
  },
};

// Use a template to render the component with the args
const Template = (args) => <EnhancedTable {...args} />;

// A story for the basic table
export const DefaultTable = Template.bind({});
DefaultTable.args = {
  rows: sampleRows,
};

// A story for a table with a different set of data
export const EmptyTable = Template.bind({});
EmptyTable.args = {
  rows: [],
};