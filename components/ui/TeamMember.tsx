import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  email?: string;
  bio: string | string[];
  imageUrl?: string;
  imageAlt?: string;
}

export const TeamMember = ({
  name,
  role,
  email,
  bio,
  imageUrl,
  imageAlt,
}: TeamMemberProps) => {
  const paragraphs = Array.isArray(bio) ? bio : [bio];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-glow">
      {imageUrl ? (
        <div className="relative aspect-[4/5] w-full bg-surface-warm">
          <Image
            src={imageUrl}
            alt={imageAlt ?? name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      ) : null}
      <div className="p-6">
        <div className="text-lg font-semibold text-text-primary">{name}</div>
        <div className="text-sm uppercase tracking-wide text-text-secondary">{role}</div>
        {email ? (
          <a
            href={`mailto:${email}`}
            className="mt-2 inline-block text-sm text-primary hover:text-primary-dark"
          >
            {email}
          </a>
        ) : null}
        <div className="mt-4 space-y-3 text-sm text-text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
