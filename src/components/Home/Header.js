import Navbar from "../Navbar"

export default function Header(props) {
    let HeroBeetle
    let HeroButterfly
    let HeroDragonFly
    let HeroBug

    if (props.darkMode) {
        HeroBeetle = "/images/hero-beetle-dark.png"
        HeroButterfly = "/images/hero-butterfly-dark.png"
        HeroDragonFly = "/images/hero-dragonfly-dark.png"
        HeroBug = "/images/hero-bug-dark.png"
    } else {
        HeroBeetle = "/images/hero-beetle-light.png"
        HeroButterfly = "/images/hero-butterfly-light.png"
        HeroDragonFly = "/images/hero-dragonfly-light.png"
        HeroBug = "/images/hero-bug-light.png"
    }

    return (
        <header className="bg-white dark:bg-gray-900">
            <Navbar />
            <div className="header--hero flex flex-col justify-center items-center relative">
                <h1 className="font-nunito text-5xl font-black tracking-widest relative -top-10 text-center text-black dark:text-white">
                    <svg className="absolute z-10 -top-3 -left-7 fill-primary" width="234" height="87" viewBox="0 0 234 87" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7937 20.0139C16.2874 20.468 11.3355 21.1667 8.36541 23.9283C5.94285 26.1855 5.47831 29.2103 5.13242 32.14L0.733349 68.4362C0.150228 73.2532 -0.25944 78.5185 3.45258 82.2704C8.46434 87.2555 18.2382 86.9027 26.5332 86.0834L201.287 69.1206C207.394 68.7493 213.448 67.7079 219.269 66.0273C222.177 65.169 224.853 63.8486 227.12 62.1523C229.387 60.456 231.194 58.422 232.424 56.1833C234.679 51.4142 233.196 46.2398 231.686 41.4341L223.349 14.9065C222.541 11.3233 220.835 7.9343 218.326 4.93132C211.383 -2.25489 197.622 1.3779 187.79 2.41875C174.284 3.84635 160.772 5.26916 147.251 6.6872L65.3715 15.3217L20.7937 20.0139Z" />
                    </svg>
                    <span className="font-grape mr-3 text-white relative -top-1 z-20">aspiring</span> frontend developer
                </h1>
                <img className="absolute left-12 bottom-4" src={HeroBeetle} alt="" />
                <img className="absolute left-80 -bottom-32 rotate-90" src={HeroButterfly} alt="" />
                <img className="absolute -left-16 top-10" src={HeroDragonFly} alt="" />
                <img className="absolute -left-24 -bottom-16" src={HeroBug} alt="" />
                <button onClick={props.changeTheme} className="absolute right-6 bottom-6 w-6 h-6 rounded-full bg-primary fill-white dark:fill-gray-900 flex justify-center items-center pr-px">
                    {
                        props.darkMode ?
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0V0Z" /></svg> :
                            <svg width="15" height="16" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg"><path d="M6.0001 0.277334C6.09772 0.395951 6.15752 0.541116 6.17178 0.694073C6.18604 0.84703 6.15411 1.00075 6.0801 1.13537C5.50195 2.19689 5.20002 3.38676 5.20209 4.59551C5.20209 8.61668 8.48015 11.8728 12.5202 11.8728C13.0472 11.8728 13.5602 11.8178 14.0532 11.7128C14.2044 11.6801 14.3618 11.6926 14.5058 11.7488C14.6499 11.805 14.7742 11.9024 14.8633 12.0288C14.9572 12.1603 15.0052 12.3191 14.9996 12.4806C14.994 12.6421 14.9351 12.7972 14.8323 12.9219C14.0479 13.8853 13.0585 14.6616 11.936 15.1941C10.8136 15.7267 9.58648 16.002 8.34414 16C3.73406 16 0 12.2858 0 7.70964C0 4.2655 2.11404 1.31138 5.12409 0.0593244C5.27403 -0.00404638 5.44048 -0.0170529 5.59845 0.0222585C5.75641 0.06157 5.89735 0.151077 6.0001 0.277334V0.277334Z" /></svg>
                    }

                </button>
            </div>
        </header>
    )
}