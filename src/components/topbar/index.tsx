import classNames from '../../lib/basic/className';
import Controls from './controls';

const TopBar = ({ classes = "" }: { classes?: string }): JSX.Element => {
    return (
        <div className={classNames(classes, "h-[40px] w-full flex justify-start items-center")}>
            <Controls />
            <div id="top_bar" className='w-full min-h-[35px] h-full' />
        </div>
    )
}

export default TopBar;