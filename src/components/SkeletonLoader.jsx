// components/SkeletonLoader.jsx
const SkeletonLoader = () => {
  return (
    <div className="space-y-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="flex overflow-hidden rounded-lg bg-gray-100">
            <div className="w-1/3 h-32 bg-gray-200" />
            <div className="w-2/3 p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
