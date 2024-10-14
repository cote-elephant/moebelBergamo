import React, { useState } from 'react';
import { FaStar, FaChair, FaTable, FaCouch, FaBed, FaLightbulb } from 'react-icons/fa'; // Icons importieren
// css importieren

function CategoryLeiste() {
  const [activeCategory, setActiveCategory] = useState('Popular');

  const categories = [
    { name: 'Popular', icon: <FaStar /> },
    { name: 'Chair', icon: <FaChair /> },
    { name: 'Table', icon: <FaTable /> },
    { name: 'Armchair', icon: <FaCouch /> },
    { name: 'Bed', icon: <FaBed /> },
    { name: 'Lamp', icon: <FaLightbulb /> }
  ];

//   ich hab schon categories geschrieben, was aber noch nicht vorher definiert/deklariert wurde

  return (
    <nav className="category-nav">
      {categories.map(category => (
        <button
          key={category.name}
          className={`category-item ${activeCategory === category.name ? 'active' : ''}`}
          onClick={() => setActiveCategory(category.name)}
        >
          <div className="icon">{category.icon}</div>
          <span>{category.name}</span>
        </button>
      ))}
    </nav>
  );
}

export default CategoryNav;
