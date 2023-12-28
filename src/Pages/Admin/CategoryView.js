import React from 'react';
import Adminsidebar from '../../Components/AdminSidebar';

function CategoryView() {
  return (
    <>
      <div className="flex">
        <Adminsidebar />

        <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Phone</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* Your table rows go here */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CategoryView;
