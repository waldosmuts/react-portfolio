export function FeaturedGhost() {
    return (
        <div className="flex items-center odd:ml-60 even:mr-60 max-w-4xl">
            <div className="bg-primary shrink-0 rounded-lg overflow-hidden w-80 h-80"></div>
            <div className="relative -left-20 overflow-hidden max-w-2xl">
                <div className="mr-12">
                    <div className="bg-gray-800 dark:bg-white h-6 w-32 ml-auto opacity-10 rounded-md"></div>
                    <div className="ml-auto w-64 rounded-lg bg-white dark:bg-gray-800 h-10 mt-2"></div>
                </div>
                <div className="flex mt-2">
                    <div className="flex items-center justify-center bg-white dark:bg-gray-800 py-6 px-64 rounded-lg max-h-60 shadow-md h-28"></div>
                    <div className="flex flex-col gap-2 justify-start ml-2">
                        <div className="flex justify-center items-center shadow-md p-2 rounded-md bg-tertiary w-7 h-7"></div>
                        <div className="flex items-center justify-center shadow-md p-2 rounded-md bg-primary w-7 h-7"></div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-end gap-2 mt-2 ml-20 pl-2">
                    <div className="bg-tertiary h-6 w-32 rounded-md"></div>
                    <div className="bg-tertiary h-6 w-16 rounded-md"></div>
                    <div className="bg-tertiary h-6 w-52 rounded-md"></div>
                    <div className="bg-tertiary h-6 w-20 rounded-md"></div>
                    <div className="bg-tertiary h-6 w-24 rounded-md"></div>
                    <div className="bg-tertiary h-6 w-32 rounded-md"></div>
                </div>
            </div>
        </div>
    )
}

export function ProjectGhost() {
    return (
        <div className="flex flex-col items-center rounded-lg overflow-hidden w-full">
            <div className="bg-primary w-full h-40 object-cover object-top" alt="" />
            <div className="bg-white dark:bg-gray-800 px-6 pt-8 pb-6 -mt-px w-full h-full relative">
                <div className="bg-gray-800 dark:bg-white h-6 w-24 opacity-10 rounded-md" />
                <div className="bg-white dark:bg-gray-700 h-8 w-52 mt-2 rounded-md" />
                <div className="bg-white dark:bg-gray-700 h-32 w-full mt-4 rounded-md" />
                <div className="flex flex-wrap gap-2 mt-4 mb-14 text-black dark:text-white">
                    <div className="bg-gray-700 h-6 w-32 rounded-md grow"></div>
                    <div className="bg-gray-700 h-6 w-16 rounded-md grow"></div>
                    <div className="bg-gray-700 h-6 w-52 rounded-md grow"></div>
                    <div className="bg-gray-700 h-6 w-20 rounded-md grow"></div>
                    <div className="bg-gray-700 h-6 w-24 rounded-md grow"></div>
                    <div className="bg-gray-700 h-6 w-32 rounded-md grow"></div>
                </div>
                <div className="flex gap-2 items-center absolute p-6 w-full bottom-0 left-0">
                    <div className="h-px w-full opacity-25 bg-highlight mr-2"></div>
                    <div className="flex justify-center items-center p-2 rounded-md uppercase tracking-wider text-sm bg-tertiary w-7 h-7"></div>
                    <div className="flex items-center justify-center p-2 rounded-md uppercase tracking-wider text-sm bg-primary w-7 h-7"></div>
                </div>
            </div>
        </div>
    )
}