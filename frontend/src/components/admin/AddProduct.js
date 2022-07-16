import React from "react";

function AddProduct() {
  return (
    <div className="py-10 px-16 bg-gray-bg1">
      <h1 className="text-center font-bold mb-2 text-xl">Add Product</h1>
      <form className="w-full m-auto rounded-lg  shadow-default  text-white">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-product"
            >
              Product Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-product"
              type="text"
              placeholder="7-seater"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-image-url"
            >
              Product Image URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-image-url"
              type="text"
              placeholder="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-description"
            >
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-description"
              type="text-area"
              placeholder="A comfortable Leather 2 - seater sofa"
            />
            <p className="text-gray-600 text-xs italic">
              Talk more about the product
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-stock"
            >
              Number of Pieces available
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-stock"
              type="number"
              placeholder="3"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-categories"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-categories"
              >
                <option>Sofa</option>
                <option>Recliners</option>
                <option>Foldable</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
      <table className="table-fixed w-full hover:border-collapse md:border-collapse text-left mt-6">
        <thead>
          <tr className="bg-gray-300 rounded text-sm focus:border-gray-500 p-5">
            <th>Product Id</th>
            <th>Image URL</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Product Description</th>
            <th>In Stock</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody className="self-center">
          <tr>
            <td>1</td>
            <td className="text-blue-400 line-clamp-1">
              <a href="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg">
                https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg
              </a>
            </td>
            <td> 7-seater Leather</td>
            <td>1000</td>
            <td className="line-clamp-1">
              New leather seat with a recliner system
            </td>
            <td>In Stock</td>
            <td>Sofa</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="text-blue-400 line-clamp-1">
              <a href="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg">
                https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg
              </a>
            </td>
            <td> 7-seater Leather</td>
            <td>1000</td>
            <td className="line-clamp-1">
              New leather seat with a recliner system
            </td>
            <td>In Stock</td>
            <td>Sofa</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="text-blue-400 line-clamp-1">
              <a href="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg">
                https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg
              </a>
            </td>
            <td> 7-seater Leather</td>
            <td>1000</td>
            <td className="line-clamp-1">
             
              New leather seat with a recliner system
            </td>
            <td>In Stock</td>
            <td>Sofa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AddProduct;
