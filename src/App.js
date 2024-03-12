import './App.css';
import Buildings from './assets/buildings.svg';

import Liquidity from './assets/liquidity.svg';
import Transparency from './assets/security_key.svg';
import Fractional from './assets/credit_card.svg';

const LINKS = [
  {
    link: "",
    title: "About"
  },
  {
    link: "",
    title: "Docs"
  },
  {
    link: "",
    title: "Team"
  },
  // {
  //   isConnect: true,
  //   title: "Connect"
  // }
]

const SECTION3_FEATURES = [{
  icon: Fractional,
  title: "Fractional Ownership",
  content: "Be a joint owner of prime real estate projects."
},
{
  icon: Transparency,
  title: "Transparency",
  content: "Using the power of block technology to ensure transparency and immutability of transactions."
},
{
  icon: Liquidity,
  title: "Liquidity",
  content: "Bricks provide a secondary market for trading real estate tokens."
}
]

function App() {
  return (
    <div className="App">
      <div className="flex flex-col gap-12 items-center w-full min-h-screen p-12">
        <div className='header flex items-center justify-between w-full'>
          <div className='text-[#640760] font-bold text-[40px]'>Bricks</div>
          <div className='nav-links flex items-center gap-12'>
            {
              LINKS.map((link, key) => {
                return <div className='text-[#00000073] hover:text-[#640760] hover:font-semibold'>
                  <a href="#">{link.title}</a></div>
              })
            }
          </div>
          <div>
            <button className='font-Bebas px-6 tracking-wide py-1.5 border rounded-md border-none bg-[#640760] text-white'>Join Waitlist</button>
          </div>
        </div>

        <div className='section-1 w-[60%] flex flex-col gap-7  font-WorkSans'>
          <div className='text-[46px] leading-[62.46px] font-medium px-[4.2rem] capitalize'>
          Revolutionalizing real estate investments
          </div>
          <div className='text-[#00000073] font-normal text-[18px] leading-[24.98px]'>
          Unlock the door to a new era of real estate investment with Bricks. Our platform aims to offer fractional ownership of prime properties, making real estate opportunities accessible to all. Join us today and start building your real estate portfolio, <span className='font-semibold text-[#640760]'>one brick at a time.</span>
          </div>
          <div className='leading-[20.82px] text-[15px] flex flex-col gap-7 items-center'>
            <span className='font-medium text-[#640760] text-[25px] font-sans'>Join our waitlist</span>
            <div className='flex w-[70%]'>
              <div className='w-full rounded-[10px] bg-[#F2F2F2] flex'>
                <input className='w-full bg-transparent placeholder:text-[#00000073] text-[15px] outline-none p-3' placeholder='Enter email address' />
                <button className='bg-[#640760] w-[30%] rounded-r-[10px] font-medium text-[15px] text-[#FFFFFF]'>Join</button>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-0 absolute w-full'>
        <svg width="1440" height="233" class="w-full" viewBox="0 0 1440 233" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1440.23 130.681L1399.9 130.644L1399.87 155.934L1359.54 155.897L1359.59 104.573L1319.25 104.536L1319.27 78.5026L1278.94 78.4657L1278.84 181.857L1238.51 181.82L1238.63 53.1388L1198.29 53.1019L1198.32 27.0682L1157.98 27.0312L1157.82 207.036L1117.48 206.999L1117.6 78.3179L1077.26 78.2809L1077.29 52.991L1036.95 52.9541L1036.9 104.278L996.569 104.241L996.522 155.564L956.187 155.527L956.116 232.885L915.781 232.848L915.993 1.51969L875.658 1.48274L875.635 26.7726L835.299 26.7357L835.229 104.093L794.893 104.056L794.988 1.40884L754.652 1.37189L754.464 206.666L714.129 206.629L714.27 52.6585L673.935 52.6215L633.6 52.5846L633.459 206.555L593.124 206.518L593.1 232.552L552.765 232.515L552.812 181.191L512.477 181.155L472.142 181.118L472.212 103.76L431.877 103.723L431.83 155.047L391.495 155.01L391.542 103.686L351.207 103.65L351.113 206.297L310.778 206.26L310.825 154.936L270.49 154.899L270.513 129.609L230.178 129.572L230.108 206.186L189.773 206.149L189.914 52.1782L149.578 52.1412L149.531 103.465L109.196 103.428L109.267 26.0706L68.932 26.0336L68.7671 206.038L28.4319 206.001L28.5021 129.388L-11.833 129.351L-11.927 231.998L28.4081 232.035L68.7432 232.072L109.078 232.109L149.414 232.146L189.749 232.183L230.084 232.219L270.419 232.256L310.754 232.293L351.089 232.33L391.424 232.367L431.759 232.404L472.095 232.441L512.43 232.478L552.765 232.515L593.1 232.552L633.435 232.589L673.77 232.626L714.105 232.663L754.44 232.7L794.776 232.737L835.111 232.774L875.446 232.811L915.781 232.848L956.116 232.885L996.451 232.921L1036.79 232.958L1077.12 232.995L1117.46 233.032L1157.79 233.069L1198.13 233.106L1238.46 233.143L1278.8 233.18L1319.13 233.217L1359.47 233.254L1399.8 233.291L1440.14 233.328L1440.23 130.681Z" fill="#640760" fill-opacity="0.2"></path></svg>
        </div>
      </div>


      <div className='section-2 h-screen w-full flex flex-col items-center justify-center'>
        <div className='w-full flex gap-8'>
          <div className='w-[40%] p-20'>
            <img src={Buildings} alt='Buildings'/>
          </div>
          
          <div className='w-[60%]'>
            <div className='p-16 flex flex-col gap-12 items-start text-start'>
              <div className='font-semibold text-[20px] leading-[50.4px] md:text-[40px] md:leading-[50.4px] capitalize'>With these features, we aim to make investments more accessible, liquid & transparent</div>
              <div className="grid md:g gap-x-8 gap-y-4 ap-x-16 md:gap-y-8 grid-cols-2">
                        { SECTION3_FEATURES.map((feature)=>{
                            return (
                                <div className="flex flex-col md:flex-row gap-4" key={feature.key}>
                                    <div className="bg-[#640760] rounded-xl p-2 w-fit h-fit">
                                        <div className="w-[30px] md:w-[20px]">
                                            <img 
                                                src={feature.icon} 
                                                aria-label="icon" 
                                                className="w-full" />
                                        </div>
                                    </div>
                                    <div className="space-y-1 text-[#100F11]">
                                        <div className="tracking-[0.5%] font-medium">{feature.title}</div>
                                        <div className="text-[14px] leading-[18.9px] tracking-[0.01em] md:text-[0.97vw] md:leading-[1.5vw] opacity-70">{feature.content}</div>
                                    </div>
                                </div>
                            );
                        }) }
                    </div>
            </div>

          </div>

        </div>
      </div>


      <div className='flex flex-col items-center py-10 text-center bg-[#640760]'>
        <div className='w-full flex flex-col items-center '>
            <div className='text-3xl md:text-5xl font-Bebas text-white'>
                Don't Miss Out
            </div>
            <div className='text-white my-8 md:mx-0 md:my-10'>
                Start building your real estate portfolio today using Bricks.
            </div>
            <div className="flex w-[60%] my- pr-[6%]">
                <div className="h-auto">
                <svg width="171" height="134" className=' w-24 md:w-auto' viewBox="0 0 171 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.26 45.2353C81.3715 33.4501 137.43 22.9893 157.069 28.1323C155.268 29.2695 154.026 30.2015 152.542 30.9055C149.903 32.3506 147.214 33.6561 144.626 35.2408C142.458 36.6716 141.855 38.4783 143.029 39.9484C144.357 41.8374 145.944 41.4126 147.708 40.6059C154.571 37.2908 161.523 33.7849 168.424 30.1393C171.621 28.4889 171.726 25.7563 168.922 23.3005C167.762 22.3005 166.234 21.5941 165.074 20.5941C157.123 14.4833 149.363 8.46077 141.603 2.43825C140.928 1.89411 140.341 1.15904 139.68 1.08506C138.358 0.937098 136.565 0.803461 135.882 1.53019C135.058 2.30822 134.785 4.15187 135.195 5.2688C135.657 6.52534 136.817 7.52531 137.837 8.5766C141.075 11.3486 144.54 13.8784 147.778 16.6504C148.695 17.4225 149.473 18.2458 150.685 19.3854C149.656 19.605 149.237 19.7589 148.907 19.7219C119.369 18.6923 91.4487 25.943 64.495 37.1173C60.4975 38.745 56.7053 40.9311 53.3462 43.4335C49.1638 46.7139 44.5708 48.8774 39.5817 50.3941C29.7945 53.5158 20.9535 58.35 13.5063 65.6828C9.30122 69.7639 5.82286 74.5288 3.40179 80.0144C-1.81626 92.5501 -0.0476204 104.261 8.69337 114.677C15.673 122.888 24.9545 127.876 35.2073 130.764C54.6699 136.289 73.8149 134.482 92.4945 126.666C93.8906 126.153 94.9932 125.272 96.1471 124.531C97.7198 123.636 98.3379 122.299 97.5313 120.536C96.7246 118.772 95.1232 118.727 93.5874 119.291C92.7497 119.599 91.8238 120.098 90.9861 120.406C76.4949 126.683 61.339 128.133 45.7893 125.924C37.2322 124.632 29.1906 121.724 21.8924 116.958C17.2301 113.758 13.1633 110.023 10.5154 104.975C6.1657 96.5893 6.51757 88.0608 11.1665 80.0132C16.875 69.6744 26.0035 63.4668 37.3862 58.6494C37.0104 60.2138 36.7598 61.2567 36.4579 62.16C36.2443 62.8724 35.8911 63.6362 35.5379 64.3999C31.0919 76.0179 33.5073 87.3327 42.6099 95.7144C44.7387 97.626 47.0072 99.4864 49.4009 100.825C70.0271 112.103 90.4203 111.105 110.102 99.1172C118.878 93.6733 123.615 85.4347 122.485 74.5984C121.748 67.4207 117.955 61.842 112.5 57.3493C107.53 53.3124 101.802 50.6633 95.5815 48.8293C87.2236 46.3544 78.49 45.444 69.7336 45.3343C68.3231 45.3773 67.001 45.2293 65.26 45.2353ZM97.1514 98.8058C86.5635 101.905 74.5817 102.505 64.5712 99.8454C58.2622 98.2023 52.3435 95.4649 47.4987 90.9065C40.6133 84.2456 38.68 76.3985 42.2204 67.4905C43.7071 63.7745 46.2368 60.3092 48.6783 57.0347C49.7665 55.6839 51.7581 54.635 53.3452 54.2102C68.7373 51.2471 83.8992 51.5381 98.572 57.3971C102.479 58.9723 106.223 61.3994 109.27 64.0831C117.837 71.8693 117.71 83.1675 109.044 90.6316C105.662 93.9347 101.209 96.0469 97.1514 98.8058Z" fill="white"/>
                </svg>
                </div>
                <div className='flex w-[70%] h-fit mx-5'>
                  <div className='w-full rounded-[10px] bg-[#F2F2F2] flex'>
                  <input className='w-full bg-transparent placeholder:text-[#00000073] text-[15px] outline-none p-3' placeholder='Enter email address' />
                  <button className='bg-[black] w-[30%] rounded-r-[10px] font-medium text-[15px] text-[#FFFFFF]'>Join</button>
                </div>
              </div>
            </div>
            <div className=''>

            </div>
    </div>
    <footer className='w-full relative md:mt-16'>
        <div className='x-footer'>
            <div className='text-white text-sm'>© 2024 Bricks. All rights reserved</div>
        </div>
    </footer>
    </div>
    </div>
  );
}

export default App;
