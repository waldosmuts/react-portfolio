import Navbar from "../Navbar"
import ThemeSwitch from "../ThemeSwitch"

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
                <h1 className="font-nunito text-3xl md:text-4xl lg:text-5xl font-black tracking-widest relative -top-10 text-center text-black dark:text-white z-10 px-6">
                    <span className="font-grape mr-3 break-all lg:break-normal text-white relative -top-1 z-20">
                        <svg className="scale-60 md:scale-75 lg:scale-100 absolute -z-10 -top-6 lg:-top-3 md:-top-5 -left-15 lg:-left-7 md:-left-12 fill-primary" width="234" height="87" viewBox="0 0 234 87" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7937 20.0139C16.2874 20.468 11.3355 21.1667 8.36541 23.9283C5.94285 26.1855 5.47831 29.2103 5.13242 32.14L0.733349 68.4362C0.150228 73.2532 -0.25944 78.5185 3.45258 82.2704C8.46434 87.2555 18.2382 86.9027 26.5332 86.0834L201.287 69.1206C207.394 68.7493 213.448 67.7079 219.269 66.0273C222.177 65.169 224.853 63.8486 227.12 62.1523C229.387 60.456 231.194 58.422 232.424 56.1833C234.679 51.4142 233.196 46.2398 231.686 41.4341L223.349 14.9065C222.541 11.3233 220.835 7.9343 218.326 4.93132C211.383 -2.25489 197.622 1.3779 187.79 2.41875C174.284 3.84635 160.772 5.26916 147.251 6.6872L65.3715 15.3217L20.7937 20.0139Z" />
                        </svg>aspiring</span> frontend developer
                </h1>
                <img className="hidden sm:block absolute left-12 bottom-4" src={HeroBeetle} alt="" />
                <img className="hidden sm:block absolute left-80 -bottom-32 rotate-90" src={HeroButterfly} alt="" />
                <img className="hidden sm:block absolute -left-16 top-10" src={HeroDragonFly} alt="" />
                <img className="hidden sm:block absolute -left-24 -bottom-16" src={HeroBug} alt="" />
                <ThemeSwitch darkMode={props.darkMode} changeTheme={props.changeTheme} />
            </div>
        </header>
    )
}