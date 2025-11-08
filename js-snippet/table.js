import React from 'react';

const columns = [
  {
    "field": "id",
    "label": "ID",
  },
  {
    "field": "name",
    "label": "Name",
  },
  {
    "field": "price",
    "label": "Price",
  },
  {
    "field": "created_at",
    "label": "Created Date",
  }
];

const data = [
  {
    "id": 1,
    "name": "Product A",
    "price": 19.99,
    "created_at": "2024-03-15"
  },
  {
    "id": 2,
    "name": "Product B",
    "price": 29.95,
    "created_at": "2024-03-16"
  }
];

const ProductTable = () => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.field}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            {columns.map(column => (
              <td key={column.field}>{row[column.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;