export const Skeleton = ({ className = '' }: { className?: string }) => (
  <div
    className={`animate-pulse rounded-xl bg-gradient-to-r from-surface via-surface-warm to-surface ${className}`}
  />
);

export const CardSkeleton = () => (
  <div className="space-y-4 rounded-2xl border border-white/10 bg-surface p-6">
    <Skeleton className="h-48 w-full rounded-2xl" />
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
    <Skeleton className="h-4 w-1/3" />
  </div>
);

