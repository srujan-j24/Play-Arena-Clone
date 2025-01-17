import React from 'react';

interface MemberBenefitCardProps {
  src: string;          // Image source URL
  title: string;        // Title of the benefit
  description: string;  // Description of the benefit
  className?: string;
}

const MemberBenefitCard: React.FC<MemberBenefitCardProps> = ({src, title, description, className}) => {
  return (
    <div className={`flex md:flex-col items-center gap-4 ${className}`}>
      <img src={src} alt={title} className="w-24 md:w-36 aspect-square transition-[width] duration-200 " />
      <div>
        <h1 className="font-semibold text-xl md:text-center">{title}</h1>
        <p className="md:text-center">{description}</p>
      </div>
    </div>
  );
};

export default MemberBenefitCard;
