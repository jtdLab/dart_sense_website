export const SignUp = () => {
  return (
    <section className="w-screen flex justify-center bg-dartsenseBg1 relative">
      <div className="mx-auto max-w-screen-md sm:text-center">
        <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight sm:text-4xl">
          Sign Up
        </h2>
        <div id="mc_embed_signup">
          <form action="/api/auth/register" method="post">
            <div className="mx-auto mb-3 space-y-4 max-w-screen-sm">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="mb-2 text-sm font-medium text-gray-300"
                >
                  Username
                </label>
                <input
                  className="block w-full p-3 text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Enter your username"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <input
                  className="block w-full p-3 text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="mb-2 text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  className="block w-full p-3 text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 hover:bg-primary-700 focus:ring-primary-800"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className="mb-6 font-bold text-white">
          Already have an account?{' '}
          <a href="/signin" className="text-gray-400 hover:text-gray-300">
            Sign in
          </a>
        </p>
      </div>
    </section>
  );
};
