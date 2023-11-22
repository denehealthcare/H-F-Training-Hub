import { useState } from "react";

export default function Accordion(){

    const [open, setOpen] = useState(false);

    const handleOpen = () => {

        open ? setOpen(false) : setOpen(true);

        console.log(open)
    };


    const closePanel = {
        maxHeight: '0px',
        overflow: 'hidden'
    }

    const openPanel = {
        maxHeight: '2000px'
    }

    const closeArrow = {
        transform: 'rotate(360deg)',
        transition: 'transform 0.2s'
    }

    const openArrow = {
        transform: 'rotate(180deg)',
        transition: 'transform 0.2s'
    };


    return(
        <>
            <div onClick={handleOpen} className={`bg-[#D6BEDA] text-[#7D7D7D] w-[100%] hover:cursor-pointer py-[23px] px-[35px]`}>

                <div className="flex justify-between items-center">

                    <h2 className="text-[#7D7D7D] text-[1.5rem] r-bold">This is resource number one</h2>

                    <svg style={open ? openArrow : closeArrow} xmlns="http://www.w3.org/2000/svg" width="23" height="30" viewBox="0 0 23 30" fill="none">
                        <g clip-path="url(#clip0_207_512)">
                            <path d="M10.1465 27.5742C10.8951 28.3066 12.111 28.3066 12.8597 27.5742L22.4431 18.1992C23.1918 17.4668 23.1918 16.2773 22.4431 15.5449C21.6944 14.8125 20.4785 14.8125 19.7298 15.5449L13.4168 21.7266V3.75C13.4168 2.71289 12.5603 1.875 11.5001 1.875C10.4399 1.875 9.58343 2.71289 9.58343 3.75V21.7207L3.27041 15.5508C2.52171 14.8184 1.30583 14.8184 0.557129 15.5508C-0.191569 16.2832 -0.191569 17.4727 0.557129 18.2051L10.1405 27.5801L10.1465 27.5742Z" fill="#5C5C5C" />
                        </g>
                        <defs>
                            <clipPath id="clip0_207_512">
                                <rect width="23" height="30" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>

                <div style={open ? openPanel : closePanel}>

                    <div className="pt-[11px] pb-[20px] border-b-[1.5px] border-[#989898] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.
                    </div>

                    <p className="r-bold pt-[20px] text-[#4E82E7] text-[1.1rem]">View Resource</p>


                </div>



            </div>

        
        </>
    )
}