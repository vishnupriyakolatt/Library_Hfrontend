import React from 'react'
import { careTitle, careSubtitle, careList } from "../../data";
import Header from '../../Components/Header'
import Frame from "../../Components/Frame";
function About() {
  return (
   <>
   <Header/>
   
   <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
      <Frame delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {careTitle}
        </h1>
      </Frame>

      <Frame delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12">
          {careSubtitle}
        </h5>
      </Frame>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-8 items-start">
          {careList.map((item, i) => (
            <Frame key={i} delay={(i + 1) * 0.2} direction="left">
              <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[88px] w-[68px]"
                />
                <div>
                  <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium">
                    {item.title}
                  </h3>
                  <h6 className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">
                    {item.subtitle}
                  </h6>
                </div>
              </div>
            </Frame>
          ))}
        </div>

        <Frame delay={0.6} direction="right">
          <img src='https://images.pexels.com/photos/4102712/pexels-photo-4102712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="about" />
        </Frame>
      </div>
    </div>
   
   </>
  )
}

export default About