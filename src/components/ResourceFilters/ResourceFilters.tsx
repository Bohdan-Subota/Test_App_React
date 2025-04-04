import { useState } from 'react';
import { BiBookmark } from 'react-icons/bi';
import './ResourceFilters.scss';

export type FilterType = 'all' | 'digital-essentials' | 'data-driven' | 'content-strategy' | 'marketing-automation' | 'bookmarks';

interface FilterItem {
  id: FilterType;
  label: string;
  icon?: React.ReactNode;
}

interface ResourceFiltersProps {
  onFilterChange?: (filter: FilterType) => void;
}

const FILTERS: FilterItem[] = [
  { id: 'all', label: 'All' },
  { id: 'digital-essentials', label: 'Digital Essentials' },
  { id: 'data-driven', label: 'Data-Driven' },
  { id: 'content-strategy', label: 'Content Strategy' },
  { id: 'marketing-automation', label: 'Marketing Automation' },
  { id: 'bookmarks', label: 'Bookmarks', icon: <BiBookmark size={18} /> }
];

const ResourceFilters = ({ onFilterChange }: ResourceFiltersProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const handleFilterClick = (filterId: FilterType) => {
    setActiveFilter(filterId);
    onFilterChange?.(filterId);
  };

  return (
    <div className="resource-filters">
      <ul className="resource-filters__list">
        {FILTERS.map((filter) => (
          <li key={filter.id} className="resource-filters__item">
            <button 
              className={`resource-filters__button ${activeFilter === filter.id ? 'resource-filters__button--active' : ''}`}
              onClick={() => handleFilterClick(filter.id)}
            >
              {filter.icon}
              {filter.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceFilters;