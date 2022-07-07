import Circle from "./circles";
import { IoIosClose } from 'react-icons/io';
import { AiOutlineExpand } from 'react-icons/ai';
import { FiMinus } from 'react-icons/fi';

const Controls = (): JSX.Element => {
    const ipcRenderer = (window as any).Main

    return (
        <div className='w-fit flex justify-center items-center py-4 pl-4'>
            <Circle Icon={IoIosClose} onClick={() => ipcRenderer.sendMessage("quit")} color='bg-rose-600' hoverColor='hover:bg-rose-700' />
            <Circle scale="scale-[.65]" iconStroke={4} Icon={AiOutlineExpand} onClick={() => ipcRenderer.sendMessage("max-res")} color='bg-amber-400' hoverColor='hover:bg-amber-500' />
            <Circle scale="scale-75" iconColor={"black"} Icon={FiMinus} onClick={() => ipcRenderer.sendMessage("min")} color='bg-green-600' hoverColor='hover:bg-green-700' />
        </div>
    )
}

export default Controls;