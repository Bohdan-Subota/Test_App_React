import { BiBookmark } from 'react-icons/bi';
import './ResourceCard.scss';

export type ResourceType = 'digital-essentials' | 'data-driven' | 'content-strategy' | 'marketing-automation';

interface ResourceCardProps {
  image: string;
  title: string;
  description: string;
  type: ResourceType;
  isBookmarked: boolean;
  activeFilter?: string;
}

const ResourceCard = ({ image, title, description, isBookmarked }: ResourceCardProps) => {
  //const isBookmarkView = activeFilter === 'bookmarks';
  
  return (
    <div className="resource-card">
      <div className="resource-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="resource-card__content">
        <h3 className="resource-card__title">{title}</h3>
        <p className="resource-card__description">{description}</p>
      </div>
      <div className="resource-card__actions">
        <div className="resource-card__action-button">
          <button 
            className="resource-card__bookmark"
            aria-label={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
          >
            <BiBookmark 
              color="#007bff"
              fill={isBookmarked ? '#007bff' : '#000000'} 
              size={20} 
            />
          </button>
        </div>
        <div className="resource-card__action-button">
          <button className="resource-card__more">View →</button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard; 