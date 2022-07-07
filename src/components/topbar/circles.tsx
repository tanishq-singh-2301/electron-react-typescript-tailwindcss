import classNames from '../../lib/basic/className';
import { IconType } from 'react-icons/lib';
import { useState } from 'react';

const Circle = ({ color, hoverColor, onClick, Icon, iconStroke = 1, iconColor = "#0e0c0a", scale = "scale-1" }: { color: string, hoverColor: string, onClick: Function, Icon: IconType, iconStroke?: number, iconColor?: string, scale?: string }): JSX.Element => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div
            onClick={() => onClick()}
            className={classNames(
                'h-4 w-4 rounded-full cursor-pointer duration-100 mr-2 z-10 flex justify-center items-center',
                color, hoverColor
            )}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Icon
                color={iconColor}
                strokeWidth={iconStroke}
                className={classNames(
                    "duration-100 self-center",
                    hover ? "opacity-90" : "opacity-0",
                    scale
                )}
            />
        </div>
    )
}

export default Circle