import {
  getAuth,
  inMemoryPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect } from 'react';
import { app } from '../firebase/client';

export const SignIn = () => {
  useEffect(() => {
    const auth = getAuth(app);
    // This will prevent the browser from storing session data
    auth.setPersistence(inMemoryPersistence);

    const form = document.querySelector('form') as HTMLFormElement;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const email = formData.get('email')?.toString();
      const password = formData.get('password')?.toString();

      if (!email || !password) {
        return;
      }
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const idToken = await userCredential.user.getIdToken();
      const response = await fetch('/api/auth/signin', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (response.redirected) {
        window.location.assign(response.url);
      }
    });
  }, []);

  return (
    <section className="w-screen flex justify-center bg-dartsenseBg1 relative">
      <div className="mx-auto max-w-screen-md sm:text-center">
        <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight sm:text-4xl">
          Sign In
        </h2>
        <div id="mc_embed_signup">
          <form action="/api/auth/signin" method="post">
            <div className="mx-auto mb-3 space-y-4 max-w-screen-sm">
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
                Sign In
              </button>
            </div>
          </form>
        </div>
        <p className="mb-6 font-bold text-white">
          Don't have an account?{' '}
          <a href="/register" className="text-gray-400 hover:text-gray-300">
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
};
