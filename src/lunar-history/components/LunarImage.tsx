import React from 'react';

interface LunarImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LunarImage: React.FC<LunarImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

export default LunarImage;
