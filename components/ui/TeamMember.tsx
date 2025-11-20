interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

export const TeamMember = ({ name, role, bio }: TeamMemberProps) => (
  <div className="rounded-2xl border border-white/10 bg-surface p-6 shadow-glow">
    <div className="text-lg font-semibold text-text-primary">{name}</div>
    <div className="text-sm uppercase tracking-wide text-text-secondary">{role}</div>
    <p className="mt-3 text-sm text-text-muted">{bio}</p>
  </div>
);

