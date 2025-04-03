import { useState } from 'react';
import './ResourceFilters.scss';

export type FilterType = 'all' | 'template' | 'document' | 'video';

interface FilterItem {
  id: FilterType;
  label: string;
}

interface ResourceFiltersProps {
  onFilterChange?: (filter: FilterType) => void;
}

const FILTERS: FilterItem[] = [
  { id: 'all', label: 'All Resources' },
  { id: 'template', label: 'Templates' },
  { id: 'document', label: 'Documents' },
  { id: 'video', label: 'Videos' }
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
              {filter.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceFilters;