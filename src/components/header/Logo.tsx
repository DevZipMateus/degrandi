
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="z-10 relative">
      <img 
        alt="Escritório Contábil De Grandi" 
        className="h-14 md:h-16" 
        src="/lovable-uploads/4e888e7c-fee8-4965-9106-cca09d55bd92.png" 
      />
    </Link>
  );
};

export default Logo;
