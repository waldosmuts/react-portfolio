export default function ThemeSwitch(props) {
    return (
        <button onClick={props.changeTheme} className="fixed right-6 bottom-6 w-10 lg:w-6 h-10 lg:h-6 rounded-full dark:p-2 lg:dark:p-1 bg-primary dark:bg-tertiary fill-white dark:fill-gray-900 flex justify-center items-center pr-px border-0 active:outline-none focus:outline-none z-20">
            {
                props.darkMode ?
                    <div className="bg-highlight rounded-full w-full h-full"></div> :
                    <svg className="w-5 h-5 lg:w-4 lg:h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M6.0001 0.277334C6.09772 0.395951 6.15752 0.541116 6.17178 0.694073C6.18604 0.84703 6.15411 1.00075 6.0801 1.13537C5.50195 2.19689 5.20002 3.38676 5.20209 4.59551C5.20209 8.61668 8.48015 11.8728 12.5202 11.8728C13.0472 11.8728 13.5602 11.8178 14.0532 11.7128C14.2044 11.6801 14.3618 11.6926 14.5058 11.7488C14.6499 11.805 14.7742 11.9024 14.8633 12.0288C14.9572 12.1603 15.0052 12.3191 14.9996 12.4806C14.994 12.6421 14.9351 12.7972 14.8323 12.9219C14.0479 13.8853 13.0585 14.6616 11.936 15.1941C10.8136 15.7267 9.58648 16.002 8.34414 16C3.73406 16 0 12.2858 0 7.70964C0 4.2655 2.11404 1.31138 5.12409 0.0593244C5.27403 -0.00404638 5.44048 -0.0170529 5.59845 0.0222585C5.75641 0.06157 5.89735 0.151077 6.0001 0.277334V0.277334Z" /></svg>
            }

        </button>
    )
}