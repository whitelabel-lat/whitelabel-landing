import React from 'react';

interface HeroPrimaryProps {
  title: string;
}

const HeroPrimary: React.FC<HeroPrimaryProps> = ({ title }) => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{title}</h1>
      </div>
    </section>
  );
};

export default HeroPrimary;
