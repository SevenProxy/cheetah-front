const Custom404 = (): JSX.Element => {
  return (
    <main className="w-full h-[100vh] roboto">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex sm:p-o p-2 md:flex-row flex-col items-center justify-evenly w-full max-w-[100%] md:max-w-[60%] mx-auto">
          <div className="mr-4 md:mb-0 mb-4">
            <h1 className="animate__animated animate__infinite animate__tada text-9xl text-red-400 font-bold select-none">404</h1>
          </div>
          <div>
            <div className="flex items-center mb-2 underline">
              <svg fill="currentColor" className="bi bi-exclamation-triangle w-6 h-6 text-red-400 mr-2" viewBox="0 0 16 16">
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
              <p className="text-2xl text-zinc-500 font-bold">Oops! Page not found.</p>
            </div>
            <p className="text-xl text-zinc-400">The page you are looking for was not found.</p>

            <div className="flex items-center">
              <svg fill="currentColor" className="bi bi-arrow-left w-4 h-4 text-blue-400 mr-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>
              <a href="/en" className="text-lg text-blue-400 select-none underline">Home page.</a>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}

export default Custom404;