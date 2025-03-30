
type ContactProps = {
    isDarkMode : boolean
    setIsDarkMode : () => void
}


const Contract = ({isDarkMode , setIsDarkMode}:ContactProps) => {
    return(
        <div  className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")]
            bg-no-repeat bg-center bg-[length:90%_auto]'>
            <h4 className=" text-center mb-2 text-lg font-ovo">
                My Contract 
            </h4>
            <h2 className=" text-center text-5xl font-ovo">
                Contract with me
            </h2>
            <p className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eveniet atque nemo quasi quisquam vel aut dolorem rerum sapiente itaque veritatis impedit similique, 
                sunt soluta quo, fugit sint. Alias, totam possimus.
            </p>

            <form>
                <div>
                    <input type=" text"/>
                </div>
            </form>
        </div>
    )
}

export default Contract