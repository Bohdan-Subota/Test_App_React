import './ResourceCard.scss';

export interface ResourceCardProps {
  image: string;
  title: string;
  description: string;
  type: 'document' | 'video' | 'template';
}

const ResourceCard = ({ image, title, description, type }: ResourceCardProps) => {
  return (
    <div className="resource-card">
      <div className="resource-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="resource-card__content">
        <h3 className="resource-card__title">{title}</h3>
        <p className="resource-card__description">{description}</p>
        <div className="resource-card__footer">
          <span className="resource-card__type">
            {type === 'document' && <i className="far fa-file-alt"></i>}
            {type === 'video' && <i className="far fa-play-circle"></i>}
            {type === 'template' && <i className="far fa-copy"></i>}
          </span>
          <button className="resource-card__more">View →</button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard; 