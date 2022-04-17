export default function ThemeSwitch(props) {
    return (
        <button onClick={props.changeTheme} className="absolute right-6 bottom-6 w-6 h-6 rounded-full bg-primary fill-white dark:fill-gray-900 flex justify-center items-center pr-px border-0 active:outline-none">
            {
                props.darkMode ?
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0V0Z" /></svg> :
                    <svg width="15" height="16" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg"><path d="M6.0001 0.277334C6.09772 0.395951 6.15752 0.541116 6.17178 0.694073C6.18604 0.84703 6.15411 1.00075 6.0801 1.13537C5.50195 2.19689 5.20002 3.38676 5.20209 4.59551C5.20209 8.61668 8.48015 11.8728 12.5202 11.8728C13.0472 11.8728 13.5602 11.8178 14.0532 11.7128C14.2044 11.6801 14.3618 11.6926 14.5058 11.7488C14.6499 11.805 14.7742 11.9024 14.8633 12.0288C14.9572 12.1603 15.0052 12.3191 14.9996 12.4806C14.994 12.6421 14.9351 12.7972 14.8323 12.9219C14.0479 13.8853 13.0585 14.6616 11.936 15.1941C10.8136 15.7267 9.58648 16.002 8.34414 16C3.73406 16 0 12.2858 0 7.70964C0 4.2655 2.11404 1.31138 5.12409 0.0593244C5.27403 -0.00404638 5.44048 -0.0170529 5.59845 0.0222585C5.75641 0.06157 5.89735 0.151077 6.0001 0.277334V0.277334Z" /></svg>
            }

        </button>
    )
}