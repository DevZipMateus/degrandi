
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="z-10 relative">
      <img 
        alt="Escritório Contábil De Grandi" 
        className="h-16 md:h-20" 
        src="/lovable-uploads/c2cc8633-a51b-4fe0-b8d0-338ec56dd30b.png" 
      />
    </Link>
  );
};

export default Logo;
