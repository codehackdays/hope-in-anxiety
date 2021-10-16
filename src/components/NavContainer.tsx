import './NavContainer.css';

interface ContainerProps { }

const NavContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Need help fast?</strong>
      <p>Don't Panic! <a rel="noopener noreferrer" href="/help">Get some help</a></p>
    </div>
  );
};

export default NavContainer;
