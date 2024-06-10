export default function ResponsiveContainer({children}){

    return(
        <div className="max-w-[1440px] m-auto min-h-[70vh]">
            <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">
                {children}
            </div>
        </div>
    )
}