import React from 'react';

const VSCodeIcon = () => (
  <img 
    src="https://img.icons8.com/color/48/visual-studio-code-2019.png" 
    alt="visual-studio-code-2019"
    className="w-5 h-5 mr-4 ml-2"
  />
);


function MenuBar({ menuItems, openMenu, onMenuClick }) {
  const handleItemClick = (e) => {
    e.stopPropagation(); 
  }
  
  return (
    <div className="relative h-8 bg-[#3c3c3c] border-b border-[#2d2d30] flex items-center px-2 z-50">
      <VSCodeIcon />
      {menuItems.map(({ label, items }) => (
        <div key={label} className="relative">
          <button
            onClick={(e) => onMenuClick(label, e)}
            className={`px-3 py-1 text-sm rounded-sm transition-colors ${
              openMenu === label ? 'bg-gray-700' : 'hover:bg-gray-600'
            }`}
          >
            {label}
          </button>
          {openMenu === label && (
            <div
              className="absolute top-full left-0 mt-1 bg-[#252526] border border-[#464647] rounded shadow-lg py-1 min-w-48"
              onClick={handleItemClick}
            >
              {items.map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-1.5 text-sm hover:bg-[#007acc] transition-colors text-gray-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuBar;

