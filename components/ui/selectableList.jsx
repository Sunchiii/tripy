import React, { useState } from 'react';

const SelectableList = ({ title = 'Selectable List', initialItems = [] }) => {
  const [items, setItems] = useState(initialItems);

  // Handle item selection
  const toggleSelect = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Add new item
  const addItem = () => {
    const newItem = {
      value: items.length + 1,
      label: `Item ${items.length + 1}`,
      selected: false
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="p-4 border rounded-md shadow-sm bg-white">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <ul className="mb-4">
        {items.map((item) => (
          <li
            key={item.value}
            className={`p-2 mb-1 cursor-pointer rounded ${
              item.selected ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
            onClick={() => toggleSelect(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <button
        className="bg-primary text-white px-4 py-2 rounded "
        onClick={addItem}
      >
        Add Item
      </button>
    </div>
  );
};

export default SelectableList;