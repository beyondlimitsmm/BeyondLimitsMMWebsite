export const UnknownRoute = () => {
  return (
    <section className="bg-gray-900 text-gray-100 justify-centerp-16 flex h-screen items-center lg:h-[80vh]">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5 ">
        <div className="max-w-4xl p-10 text-center lg:p-20">
          <h2 className="mb-8 text-9xl font-extrabold text-primary">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="text-gray-400 mb-8 mt-4">
            Please visit our hompage to get where you need to go.
          </p>
          <a
            rel="noopener noreferrer"
            href="/"
            className="block rounded bg-primary px-8 py-3 font-semibold text-white"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
};
