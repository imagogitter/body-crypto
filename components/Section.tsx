
import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-primary-text border-b-2 border-accent pb-2 mb-2">
        {title}
      </h2>
      {subtitle && <p className="text-md text-secondary-text mb-6">{subtitle}</p>}
      <div className="bg-card-bg p-6 rounded-lg border border-border-color shadow-lg">
        {children}
      </div>
    </section>
  );
};

export default Section;
