import React from 'react';

interface LunarImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const LunarImage: React.FC<LunarImageProps> = ({ src, alt, width = 600, height = 400 }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '1rem 0' }}
    />
  );
};

export default LunarImage;
