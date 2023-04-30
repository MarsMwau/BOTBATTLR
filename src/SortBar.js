import React from "react";

const SortBar = ({ filter, setFilter, setSortBy }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="sort-bar-container">
      <div>
        Filter by class:
        <select value={filter} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Captain">Captain</option>
          <option value="Witch">Witch</option>
        </select>
      </div>
      <div>
        Sort by:
        <select value={setSortBy} onChange={handleSortByChange}>
          <option value="">None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
