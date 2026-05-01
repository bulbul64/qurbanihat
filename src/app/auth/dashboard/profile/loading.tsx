export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border-4 border-zinc-300 border-t-emerald-500 animate-spin"></div>
      </div>

      {/* Text */}
      <h2 className="mt-6 text-lg font-medium text-zinc-700 dark:text-zinc-300">
        Loading QurbaniHat...
      </h2>

      <p className="text-sm text-zinc-500 mt-2">
        Please wait while we prepare animals for you
      </p>

    </div>
  );
}