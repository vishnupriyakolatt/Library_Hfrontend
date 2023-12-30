import React from 'react'
import Frame from '../../Components/Frame'
import { services } from '../../data'
import Header from '../../Components/Header'
function Service() {
  return (
<>
<Header/>
<div id='services' className='mt-[100px] max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 xs:justify-between w-full'>
{
  services.map((Service,i)=>(
    <Frame key={i} delay={0.2} direction="down">
          <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
            <img
              src={Service.icon}
              className="max-h-[84px] max-w-[84px]"
              alt=""
            />
            
            <div className="flex flex-col gap-1.5">
              <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">
                {Service.title}
              </h3>
              <h6 className="text-center lg:text-start text-base lg:text-lg text-fontGray font-medium">
                {Service.subtitle}
              </h6>
            </div>
          </div>
        </Frame> 
  ))
}

</div>

</>
  )
}

export default Service