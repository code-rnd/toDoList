import React from "react";
import {TasksContainer} from "../../../containers/tasks/TasksContainer";
import {InputMenuContainer} from "../../../containers/tasks/InputMenuContainer";
import {DisplayContainer} from "../../../containers/tasks/DisplayContainer";
import StartLogoComponent from "../../process/StartLogoComponent";

import './style.scss';

export default function WidjetComponent(props) {

    const {status} = props;

    const getProcessForm = () => {
        return (
            <div className={'processSwitch'}>
                <StartLogoComponent/>
            </div>
        )
    }

    const getTasksForm = () => {
        return (
            <div className={'widjet'}>
                <DisplayContainer/>
                <TasksContainer/>
                <InputMenuContainer/>
            </div>
        )
    }

    return (
        <div>
            {
                status ? getTasksForm() : getProcessForm()
            }
        </div>
    )
}