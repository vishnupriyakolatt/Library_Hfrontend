import React from 'react'
import { referenceTitle, referenceSubtitle } from "../../data";
import ev1 from '../../assets/ev1.jpg'

import Frame from '../../Components/Frame';
function Event() {
  return (
   <>
     <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto mt-[80px]">
      <Frame delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {referenceTitle}
        </h1>
      </Frame>
      <Frame delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {referenceSubtitle}
        </h5>
      </Frame>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <Frame delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
          <img src={ev1}alt="" />
            <img src={ev1}alt="" />
          </div>
        </Frame>
        <Frame delay={0.2} direction="left">
          <div>
          <img src={ev1}alt="" />
          </div>
        </Frame>
      </div>
    </div>
   
   </>
  )
}

export default Event