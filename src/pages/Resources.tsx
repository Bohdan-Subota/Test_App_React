import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import ResourceFilters from '../components/ResourceFilters/ResourceFilters';
import ResourceCard from '../components/ResourceCard/ResourceCard';
import { FilterType } from '../components/ResourceFilters/ResourceFilters';
import './Resources.scss';

const MOCK_RESOURCES = [
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
    title: 'Top 5 Templates',
    description: 'Discover the most compelling story in campaign that resonates with consumers',
    type: 'digital-essentials' as const,
    isBookmarked: false,
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Marketing Strategy Guide',
    description: 'Learn how to create effective marketing strategies that drive results',
    type: 'content-strategy' as const,
    isBookmarked: true,
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300?random=2',
    title: 'Data Analysis Basics',
    description: 'Master the fundamentals of data-driven decision making',
    type: 'data-driven' as const,
    isBookmarked: false,
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300?random=3',
    title: 'Digital Workspace Setup',
    description: 'Create an efficient digital workspace for your team',
    type: 'digital-essentials' as const,
    isBookmarked: true,
  },
  {
    id: 5,
    image: 'https://picsum.photos/200/300?random=4',
    title: 'Presentation Templates',
    description: 'Professional templates for impactful presentations',
    type: 'marketing-automation' as const,
    isBookmarked: false,
  },
  {
    id: 6,
    image: 'https://picsum.photos/200/300?random=5',
    title: 'Analytics Dashboard Guide',
    description: 'Learn to create and interpret analytics dashboards',
    type: 'data-driven' as const,
    isBookmarked: true,
  }
];

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  const filteredResources = MOCK_RESOURCES.filter(resource => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bookmarks') return resource.isBookmarked;
    return resource.type === activeFilter;
  });

  return (
    <Layout pageTitle="Resources">
      <div className="resources">
        <ResourceFilters onFilterChange={handleFilterChange} />
        <div className="resources__grid">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              image={resource.image}
              title={resource.title}
              description={resource.description}
              type={resource.type}
              isBookmarked={resource.isBookmarked}
              activeFilter={activeFilter}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Resources; 