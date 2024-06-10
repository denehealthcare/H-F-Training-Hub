import Link from "next/link"

export default function LearningBlock({title, icon, url}){

    return(
            <>
                <div className="bg-[#358486] px-[29px] py-[20px]">

                    <div className="max-h-[50px]">
                        {icon}
                    </div>

                    <h2 className="text-[white] text-[1.2rem] r-reg mt-[19px]">
                        {title}
                    </h2>

                    <Link href={url}>
                        <button className="flex justify-center items-center bg-[white] text-[#358486] text-[0.8rem] rounded-[8px] w-[100%] mt-[19px] gap-[10px] py-[7px] r-reg">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.1em" className="fill-[#358486]" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" /></svg>
                        </button>
                    </Link>

                </div>
        
             </>
    )
}