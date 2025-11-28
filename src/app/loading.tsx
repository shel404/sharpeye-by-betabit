export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Spinning circle */}
          <div className="w-16 h-16 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>

          {/* Pulsing dot in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
        </div>

        <p className="text-white/80 text-lg font-medium">Loading...</p>
        <p className="text-white/50 text-sm mt-2">
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
}
