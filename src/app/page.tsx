export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 md:px-16">
      <div className="flex-center">
        <div className="min-h-screen flex flex-col gap-8 w-full max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto py-4 sm:py-8 md:py-16">
          <div className="flex-grow overflow-y-auto">
            {/* First Page */}
            <div className="min-h-screen p-4 relative">
              <div className="absolute left-0 top-0 h-full bg-blue-900 w-1/3"></div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative z-10">
                First Page
              </h1>
              <p className="text-sm sm:text-base md:text-lg relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
              </p>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto">
            {/* Second Page */}
            <div className="min-h-screen p-4 relative">
              <div className="absolute left-0 top-0 h-full bg-blue-900 w-1/3"></div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative z-10">
                Second Page
              </h1>
              <p className="text-sm sm:text-base md:text-lg relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
