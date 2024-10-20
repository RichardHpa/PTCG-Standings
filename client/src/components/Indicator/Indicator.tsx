export const Indicator = () => {
  return (
    <span className="relative flex h-4 w-4" role="status">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
    </span>
  );
};
