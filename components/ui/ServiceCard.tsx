import type { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="group rounded-2xl border border-white/10 bg-surface/90 p-6 shadow-glow backdrop-blur">
    {icon ? (
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-subtle text-primary">
        {icon}
      </div>
    ) : null}
    <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
    <p className="mt-2 text-sm text-text-muted">{description}</p>
    <div className="mt-4 text-sm font-semibold text-primary transition group-hover:translate-x-1">
      Научете повече →
    </div>
  </div>
);
