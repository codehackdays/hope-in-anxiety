import './InterventionLink.css';

interface ContainerProps { }

const InterventionLink: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>InterventionLink</strong>
      <p>Don't Panic! <a rel="noopener noreferrer" href="/help">Get some help</a></p>
    </div>
  );
};

export default InterventionLink;
