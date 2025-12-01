import React from 'react';

const iconButtonStyles =
  'w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-150 text-gray-400 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40';

function ActivityBar({ topItems, bottomItems, onItemClick }) {
  const renderItems = (items, clickable = true) =>
    items.map(item => (
      <button
        key={item.id}
        type="button"
        title={item.id}
        aria-label={item.id}
        className={`${iconButtonStyles} ${!clickable ? 'cursor-default' : ''}`}
        onClick={clickable ? () => onItemClick(item.fileId) : undefined}
      >
        <item.icon className="w-5 h-5" strokeWidth={1.6} />
      </button>
    ));

  return (
    <nav className="bg-[#252526] shrink-0 flex flex-col justify-between items-center py-4 px-1 w-14">
      <div className="flex flex-col items-center gap-4">{renderItems(topItems)}</div>
      <div className="flex flex-col items-center gap-4">{renderItems(bottomItems, false)}</div>
    </nav>
  );
}
export default ActivityBar;