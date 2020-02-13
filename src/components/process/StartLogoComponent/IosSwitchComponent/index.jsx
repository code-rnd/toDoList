import React, {useState} from "react";

import './style.scss';

export default function IosSwitchComponent({getStartProcess}) {

    // для анимации свича
    const [isToggle, setToggle] = useState(false);

    const [isStart, setStart] = useState(false);

    const handleClick = () => {
        setToggle(!isToggle);
        setStart(true);
        handleSetTimeout();
    };

    const handleStartProcess = () => {
        getStartProcess(true);
    }

    const handleSetTimeout = () => {
        setTimeout(() => {
            handleStartProcess()
        }, 500)
    }

    return (
        <div className={`toggle ${isToggle && 'toggle-active'}`} onClick={() => handleClick()} disabled={isStart}>
            tasks
            <span>my</span>
        </div>
    )
}