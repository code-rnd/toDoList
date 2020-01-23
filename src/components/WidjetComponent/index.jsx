import React from "react";
import {TasksContainer} from "../../containers/TasksContainer";
import {InputMenuContainer} from "../../containers/InputMenuContainer";
import {DisplayContainer} from "../../containers/DisplayContainer";

import './style.scss';

export default function WidjetComponent(props) {

    return (
        <div className={'widjet'}>
            <DisplayContainer/>
            <TasksContainer/>
            <InputMenuContainer/>
        </div>
    )
}