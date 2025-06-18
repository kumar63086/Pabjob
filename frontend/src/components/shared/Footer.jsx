import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="flex justify-center text-black-600">
          <h1 className="text-5xl font-bold">
            Hire<span className="text-red-500">PabJob</span>
          </h1>
        </div>

        <p className="mx-auto mt-3 max-w-md text-center leading-relaxed text-gray-500">
          Your gateway to dream jobs, seamless hiring, and unlocking endless
          career opportunities worldwide.
        </p>

        <ul className="mt-5 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-700 transition hover:text-gray-70  0/75"
              href="#"
            >
              {" "}
              Jobs{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Browse{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75"
              href="#"
            >
              {" "}
              Register{" "}
            </a>
          </li>
        </ul>

        <ul className="mt-3 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://x.com/akshad_999"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/akshadjaiswal"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/akshadsantoshjaiswal/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46C0 23.39.61 24 1.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.5a2.03 2.03 0 01-2.03-2.03 2.03 2.03 0 112.03 2.03zM20.45 20.45h-3.5v-5.9c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13v6h-3.5V9h3.36v1.56h.05c.47-.88 1.62-1.8 3.34-1.8 3.57 0 4.23 2.35 4.23 5.4v6.29z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="text-center text-sm text-gray-500 mt-5">
          &copy; {new Date().getFullYear()} Pabjob. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
