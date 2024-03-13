interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={`animate-pulse bg-gray-20 rounded-md ${className}`} />;
};
