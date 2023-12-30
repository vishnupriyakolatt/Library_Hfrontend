import React from "react";

function CategoryAdd() {
  return (
    <>
      <div>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-10 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl  text-center text-gray-900 font-bold mb-2">
              ADD BOOKS
            </h1>
            <div></div>
            <div class="relative">
              <label
                title="Click to upload"
                for="button2"
                class="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <div class="w-max relative">
                  <img
                    class="w-12"
                    src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                    alt="file upload icon"
                    width="512"
                    height="512"
                  />
                </div>
                <div class="relative">
                  <span class="block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500">
                    Upload a file
                  </span>
                  <span class="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
                    Max 2 MB
                  </span>
                </div>
              </label>
              <input hidden="" type="file" name="button2" id="button2" />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="name"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryAdd;
