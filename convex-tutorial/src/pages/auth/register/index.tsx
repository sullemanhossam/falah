// This example requires @tailwind/forms

// // tailwind.config.js
// module.exports = {
//   // ...
//   plugins: [
//     // ...
//     require('@tailwindcss/forms'),
//   ],
// }

// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>

// 'use client';
import { Card, TextInput } from "@tremor/react";

const Logo = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M10.9999 2.04938L11 5.07088C7.6077 5.55612 5 8.47352 5 12C5 15.866 8.13401 19 12 19C13.5723 19 15.0236 18.4816 16.1922 17.6064L18.3289 19.7428C16.605 21.1536 14.4014 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81468 5.94662 2.55115 10.9999 2.04938ZM21.9506 13.0001C21.7509 15.0111 20.9555 16.8468 19.7433 18.3283L17.6064 16.1922C18.2926 15.2759 18.7595 14.1859 18.9291 13L21.9506 13.0001ZM13.0011 2.04948C17.725 2.51902 21.4815 6.27589 21.9506 10.9999L18.9291 10.9998C18.4905 7.93452 16.0661 5.50992 13.001 5.07103L13.0011 2.04948Z" />
  </svg>
);

export default function Register({ signIn, step, setStep }) {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo
            className="mx-auto h-10 w-10 text-tremor-content-strong dark:text-dark-tremor-content-strong"
            aria-hidden={true}
          />
          <h3 className="mt-6 text-center text-tremor-title font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Create new account for workspace
          </h3>
        </div>
        <Card className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              void signIn("password", formData);
            }}
            action="#"
            method="post"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Name
              </label>
              <TextInput
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Name"
                className="mt-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Email
              </label>
              <TextInput
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="john@company.com"
                className="mt-2"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Password
              </label>
              <TextInput
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                placeholder="Password"
                className="mt-2"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Confirm password
              </label>
              <TextInput
                type="password"
                id="confirm-password"
                name="confirm-password"
                autoComplete="confirm-password"
                placeholder="Password"
                className="mt-2"
              />
            </div>
            <div className="mt-2 flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="size-4 rounded border-tremor-border text-tremor-brand shadow-tremor-input focus:ring-tremor-brand-muted dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-brand dark:shadow-dark-tremor-input dark:focus:ring-dark-tremor-brand-muted"
                />
              </div>
              <label
                htmlFor="newsletter"
                className="ml-3 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content"
              >
                Sign up to our newsletter
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Create account
            </button>
            <p className="text-center text-tremor-label text-tremor-content dark:text-dark-tremor-content">
              By signing in, you agree to our{" "}
              <a
                href="#"
                className="capitalize text-tremor-brand hover:text-tremor-brand-emphasis dark:text-dark-tremor-brand hover:dark:text-dark-tremor-brand-emphasis"
              >
                Terms of use
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="capitalize text-tremor-brand hover:text-tremor-brand-emphasis dark:text-dark-tremor-brand hover:dark:text-dark-tremor-brand-emphasis"
              >
                Privacy policy
              </a>
            </p>
          </form>
        </Card>
        <p className="mt-6 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-tremor-brand hover:text-tremor-brand-emphasis dark:text-dark-tremor-brand hover:dark:text-dark-tremor-brand-emphasis"
          >
            Sign in
          </a>
        </p>
      </div>
    </>
  );
}
