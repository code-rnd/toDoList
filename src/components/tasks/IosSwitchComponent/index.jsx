import React, {useEffect, useState} from "react";

import './style.scss';

export default function IosSwitchComponent(props) {

    const {ready, handleCheckedTask} = props;

    // для анимации свича
    const [isToggle, setToggle] = useState(ready);

    useEffect(() => {
        setToggle(ready);
    }, [ready]);

    const handleClick = () => {
        setToggle(!isToggle);
        handleCheckedTask(!isToggle);
    };

    return (
        <div className={`toggle ${isToggle && 'toggle-active'}`} onClick={() => handleClick()}>
            <span/>
        </div>
    )
}