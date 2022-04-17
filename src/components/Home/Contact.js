import { send } from "emailjs-com"
import { useState } from "react"

export default function Contact() {
    const [emailData, setEmailData] = useState({
        from_name: "",
        to_name: "Waldo",
        message: "",
        reply_to: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            emailData,
            process.env.REACT_APP_USER_ID
        )
            .then((res) => {
                console.log("SUCCESS", res.status, res.text);
            })
            .catch((err) => {
                console.log("FAILED", err);
            })
    }

    function handleChange(e) {
        setEmailData(prevEmailData => {
            return ({
                ...prevEmailData,
                [e.target.name]: e.target.value
            })
        })
    }

    return (
        <section id="contact" className="flex flex-col justify-center items-center main--section py-10 lg:py-20 px-8 md:px-16 lg:px-32 relative text-black dark:text-white  bg-secondary transition dark:bg-gray-800">
            {/* Background Elements */}
            <div className="contact--background absolute h-full top-0">
                <svg className="absolute bottom-0 left-36 fill-primary" width="224" height="116" viewBox="0 0 224 116" xmlns="http://www.w3.org/2000/svg">
                    <path d="M124.802 4.69179C121.709 6.39189 119.023 8.74625 116.93 11.5912C110.711 20.0179 110.192 31.7756 104.133 40.5421C96.5401 51.6763 81.7734 53.6669 69.2043 53.4223C56.6351 53.1776 43.5702 51.4589 31.9044 56.6128C20.2386 61.7668 12.5222 77.2889 20.3852 87.2792C28.2482 97.2694 46.6558 93.7729 56.0353 103.141C64.4482 111.537 61.205 126.577 52.9975 135.189C44.79 143.801 33.2762 148.097 22.8497 153.766C12.4231 159.434 2.04228 167.825 0.375011 179.757C-2.33136 198.087 18.5456 212.833 36.9878 211.216C55.43 209.6 70.924 197.296 85.2054 185.484L126.24 151.644C131.527 147.296 138.166 142.666 144.619 144.941C151.072 147.216 153.229 155.525 151.298 161.8C148.738 168.036 144.358 173.353 138.733 177.054C127.783 185.646 115.611 192.593 106.812 203.216C98.0118 213.839 93.2234 229.466 99.9058 241.536C106.996 254.36 124.625 258.194 138.47 253.52C152.315 248.847 162.976 237.702 171.998 226.163C194.351 197.996 210.167 165.198 218.299 130.15C226.243 94.0072 227.694 52.8024 197.763 26.1332C183.4 13.3777 163.287 1.5897 143.521 0.676725C137.033 0.276038 130.559 1.66473 124.802 4.69179Z" />
                </svg>
            </div>
            {/* Main Content */}
            <span className="font-nunito font-black tracking-wider text-center">questions?</span>
            <h3 className="font-nunito font-black text-xl tracking-wider text-center relative mt-2 sm:mt-0">
                <span className="ml-1 -translate-x-48 -top-1 text-white relative">
                    <span className="relative top-1 -left-2">
                        <svg className="absolute fill-primary scale-x-60 -left-7 -top-1 -z-10" width="106" height="36" viewBox="0 0 106 36" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M13.0432 1.10021C11.035 0.992156 8.81465 0.961 7.32314 1.97014C6.10628 2.79532 5.69617 4.09082 5.34461 5.35268L0.9392 20.9781C0.354854 23.0519 -0.183974 25.3341 1.18887 27.2335C3.04787 29.7625 7.36035 30.2743 11.0558 30.4805L88.8879 34.9554C91.593 35.209 94.3201 35.1649 96.9888 34.8245C98.3236 34.6462 99.5874 34.2493 100.698 33.6597C101.808 33.07 102.74 32.3008 103.432 31.4025C104.747 29.4637 104.449 27.0922 104.114 24.8807L102.265 12.6728C102.155 11.0455 101.638 9.44218 100.742 7.95349C98.1853 4.32694 91.9 4.98247 87.5148 4.7686C81.4918 4.47397 75.4658 4.17672 69.4369 3.87686L32.9223 2.08149L13.0432 1.10021Z" />
                            </g>
                        </svg>send
                    </span>
                </span> me a message</h3>
            <form className="w-full max-w-2xl mt-14 grid grid-cols-2 gap-x-10 gap-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="font-nunito text-sm" htmlFor="from_name">Name</label>
                    <input className="bg-transparent outline-none font-nunito mt-2 focus:text-primary" id="from_name" type="text" name="from_name" placeholder="Enter your name" value={emailData.from_name} onChange={handleChange} required />
                    <div className="bg-primary w-full h-px mt-2"></div>
                </div>
                <div className="flex flex-col">
                    <label className="font-nunito text-sm" htmlFor="reply_to">Email</label>
                    <input className="bg-transparent outline-none font-nunito mt-2 focus:text-primary" id="reply_to" type="email" name="reply_to" placeholder="Enter your email address" value={emailData.reply_to} onChange={handleChange} required />
                    <div className="bg-primary w-full h-px mt-2"></div>
                </div>
                <div className="flex flex-col col-span-2">
                    <label className="font-nunito text-sm" htmlFor="message">Message</label>
                    <input className="bg-transparent outline-none font-nunito mt-2 focus:text-primary" id="message" type="text" name="message" placeholder="Anything on your mind?" value={emailData.message} onChange={handleChange} required />
                    <div className="bg-primary w-full h-px mt-2"></div>
                </div>
                <button className="col-span-2 mt-10 font-nunito font-black text-xl tracking-wider text-center text-white fill-primary hover:fill-highlight relative" type="submit">
                    <svg className="absolute left-1/2 -translate-x-1/2" width="105" height="32" viewBox="0 0 105 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M93.0078 29.8618C95.0187 29.8386 97.2364 29.7248 98.6588 28.6204C99.8192 27.7176 100.144 26.3981 100.412 25.116L103.789 9.23631C104.236 7.12885 104.625 4.81628 103.131 3.0106C101.111 0.608242 96.7744 0.379046 93.0734 0.414476L15.1151 1.02895C12.3992 0.952449 9.68083 1.17443 7.0401 1.6883C5.71979 1.95327 4.48452 2.43182 3.41503 3.0927C2.34555 3.75358 1.46591 4.58192 0.833601 5.52356C-0.351664 7.54398 0.10037 9.89098 0.578859 12.0759L3.2205 24.1371C3.43651 25.7537 4.0577 27.3199 5.04895 28.7469C7.83657 32.1989 14.0657 31.1345 18.4555 31.0618C24.4849 30.9627 30.5174 30.866 36.5531 30.7717L73.107 30.1801L93.0078 29.8618Z" />
                    </svg>
                    <span className="relative top-px">whoosh</span>
                </button>
            </form>
        </section>
    )
}