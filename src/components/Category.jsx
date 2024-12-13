import React from 'react';
import './Category.css';

function CategoryList() {
  return (
    <div className="category-list">
      <h3>All Categories</h3>
      <ul>
        <li>Graphics & Design</li>
        <li>Video & Animation</li>
        <li>Writing & Translation</li>
        <li>AI Services</li>
        <li>Digital Marketing</li>
        <li>Music & Audio</li>
        <li>Programming & Tech</li>
        <li>Business</li>
        <li>Lifestyle</li>
      </ul>
    </div>
  );
}

export default CategoryList;
