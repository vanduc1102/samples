import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const { user } = useUser();
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link
          href="/"
          className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
        >
          <svg
            className="h-10 w-10 rounded-full bg-blue-500 p-2 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            ></path>
          </svg>
          a
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <div className="mr-5">
          <Link  href="/studio">Studio</Link>
          </div>
          {!!user && (
            <div className="mr-5 flex items-center justify-center rounded-md bg-blue-500 px-3 py-1 capitalize text-white">
              <Link href="/admin">+ Create</Link>
            </div>
          )}
          {user ? (
            <div className="flex items-center space-x-5">
              <Link href="/api/auth/logout">Logout</Link>
              <img
                alt="profile"
                className="h-12 w-12 rounded-full"
                src={user.picture ? user.picture : ""}
              />
            </div>
          ) : (
            <Link href="/api/auth/login"> Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
