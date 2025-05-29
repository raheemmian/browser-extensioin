
interface CardDataProps {
    icon: string;
    title: string;
    description: string;
    active: boolean;
    onRemove: () => void;
    onToggle: () => void;
}

const Card = ({icon, title, description, active, onRemove, onToggle}: CardDataProps) => {
    return (
        <>
            <div className="dark:border dark:border-gray-700 rounded-xl p-5 md:h-50 h-44 md:w-[23rem] w-[20rem] grid grid-rows-2 bg-white dark:bg-gray-800 dark:border-gray-700">
                <div className="grid grid-cols-[80_1fr]">
                <div className="">
                    <img src={`${icon}`} />
                </div>
                <div className="grid grid-rows-[30_auto]">
                    <h1 className="dark:text-white text-lg text-black">{title}</h1>
                    <p className="text-gray-400 text-gray-500 text-sm">
                    {description}</p>
                </div>
                </div>
                <div className="flex flex-row justify-between items-center h-10 mt-10">
                <button
                  className="dark:text-gray-300 border hover:bg-red-500 dark:border-gray-600 border-gray-400 
                  focus:outline-2 focus:outline-orange-600 focus:outline-offset-2 text-sm rounded-full px-3 py-1 cursor-pointer 
                  hover:bg-red-600 hover:text-white dark:hover:text-black dark:hover:bg-orange-600 text-black"
                  onClick={onRemove}
                >Remove</button>
                <label className="cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={active}
                            onChange={onToggle}
                        />
                        <div
                            className="relative w-11 h-6 dark:bg-gray-600 bg-gray-300 peer rounded-full
                            after:content-[''] after:h-5 after:w-5 after:bg-white after:rounded-full after:absolute
                            after:top-0.5 after:start-[2px] after:border-white after:border-gray-300 after:border
                            peer-checked:after:translate-x-full after:transition-all dark:peer-checked:bg-orange-600 peer-checked:bg-red-700
                            hover:bg-red-600 dark:hover:peer-checked:bg-orange-700 dark:hover:bg-orange-600
                            focus:outline-none peer-focus:outline-2 peer-focus:outline-offset-2 dark:peer-focus:outline-orange-600 
                            peer-focus:outline-red-700"
                        ></div>
                </label>
                </div>
            </div>
        </>
  );
}

export default Card