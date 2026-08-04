interface TeamMemberProps {
  name: string;
  role: string;
  email?: string;
  bio: string | string[];
}

export const TeamMember = ({ name, role, email, bio }: TeamMemberProps) => {
  const paragraphs = Array.isArray(bio) ? bio : [bio];

  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-6 shadow-glow">
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
  );
};
