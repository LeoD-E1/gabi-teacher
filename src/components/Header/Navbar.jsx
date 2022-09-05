import React from "react";

const Navbar = () => {
  return (
    <>
      {/* {!isOpen ? null : <Menu setOpen={setOpen} navigation={menu} />} */}
      <header>
        <nav className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center ">
              <button
                type="button"
                className="bg-white p-2 rounded-full lg:hidden text-gray-600 hover:bg-gray-200 focus:bg-gray-300 justify-start"
                onClick={() => setOpen(true)}
              >
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 md:justify-center justify-start">
                <Link
                  href="/"
                  className="bg-black text-white font-bold text-xl p-2"
                >
                  leoda shop
                </Link>
              </div>

              {/* Flyout menus */}
              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <ul className="h-full flex space-x-8">
                  {menu.map((page) => (
                    <li
                      key={page.name}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      <Link href={`${page.links}`}>{page.name} </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ml-auto flex items-center justify-end">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link
                    href="/register"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <button className="text-gray-700 hover:text-gray-800 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-united-states.svg"
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">USD</span>
                  </button>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link href="#" className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
