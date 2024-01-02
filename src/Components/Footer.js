import { footerLinksColumnOne, footerLinksColumnTwo } from '../data';

const Footer = () => {
  return (
    <div className='bg-black '>
      <div className='max-w-[1490px] mx-auto px-10 py-[80px] '>
        <div className='flex flex-col items-center xl:items-start xl:flex-row xl:justify-between gap-12'>
          <img
            src='https://images.pexels.com/photos/2898170/pexels-photo-2898170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='h-40 '
          />

          <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-10 w-full'>
            <div className='flex flex-col xs:flex-row gap-12 w-full md:w-auto'>
              {footerLinksColumnOne.map((item, index) => (
                <div
                  key={index}
                  className='text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto'
                >
                  <h6 className='mb-8 text-base lg:text-lg font-bold text-center xl:text-start'>
                    {item.title}
                  </h6>
                  <ul className='flex flex-col gap-4'>
                    {item.links.map((link, i) => (
                      <div
                        key={`list-item-${i}`}
                        className='w-full flex mx-auto justify-center xl:justify-start'
                      >
                        <li className='font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit'>
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className='flex flex-col xs:flex-row gap-12 w-full md:w-auto'>
              {footerLinksColumnTwo.map((item, index) => (
                <div
                  key={index}
                  className='text-white max-w-screen md:max-w-[340px] flex-1 md:flex-auto'
                >
                  <h6 className='mb-8 text-base lg:text-lg font-bold text-center xl:text-start'>
                    {item.title}
                  </h6>
                  <ul className='flex flex-col gap-4'>
                    {item.links.map((link, i) => (
                      <div
                        key={`list-item-${i}`}
                        className='w-full flex mx-auto justify-center xl:justify-start'
                      >
                        <li
                          className={`font-medium text-sm md:text-base ${
                            index !== 1 && 'cursor-pointer'
                          } text-center xl:text-start w-fit`}
                        >
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full h-[1px] bg-white my-12' />

        <h6 className='text-white text-center text-base lg:text-lg'>
          &copy; Heavenlibrary - All rights reserved
        </h6>
      </div>
    </div>
  );
};

export default Footer;
