import React from "react";

function AddCategory() {
  return (
    <div className="pb-56 py-6 px-16 bg-gray-bg1 ">
      <h1 className="text-center font-bold mb-2 text-xl">Add Category</h1>
      <div className="justify-between flex">
        <form className="w-full m-auto rounded-lg  shadow-default  text-white">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-category"
              >
                category
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-category"
                type="text"
                placeholder="Sofa"
                required
              />
            </div>
          </div>
        </form>
        <table className="table-fixed w-full hover:border-collapse md:border-collapse text-left mt-6">
          <thead>
            <tr className="bg-gray-300 rounded text-sm focus:border-gray-500 p-5">
              <th>Category Id</th>
              <th>Category Name</th>
            </tr>
          </thead>
          <tbody className="self-center">
            <tr>
              <td>1</td>

              <td>Sofa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddCategory;
