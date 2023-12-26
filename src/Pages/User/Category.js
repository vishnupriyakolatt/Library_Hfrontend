import React from 'react'

import book1 from '../../assets/book1.jpg'

import Frame from "../../Components/Frame";

function Category() {
  return (
<>
  <Frame delay={0.2} direction="down">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-[50px]">
      <div className="card bg-base-100 shadow-xl items-center">
        <figure className="px-10 pt-10">
          <img src={book1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Classics</h2>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl items-center">
        <figure className="px-10 pt-10">
          <img src={book1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Adventure stories</h2>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl items-center">
        <figure className="px-10 pt-10">
          <img src={book1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Autobiography</h2>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl items-center">
        <figure className="px-10 pt-10">
          <img src={book1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">Mystery</h2>
        </div>
      </div>
    </div>
  </Frame>
</>

  )
}

export default Category