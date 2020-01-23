import React from "react";
import {counterReadyTask} from "../../utils/countersTasks";

import './style.scss';

export default function DisplayComponent(props) {

    const {tasks} = props;

    const handleGetCountReadyTask = () => {
        const countReadyTask = counterReadyTask([...tasks]);

        return countReadyTask
    }

    const handleGetCountAllTasks = () => {
        const countAllTasks = tasks.length;

        return countAllTasks;
    }

    return (
        <div className={'display'}>
            <div>выполнено: {handleGetCountReadyTask()}</div>
            <div>общее кол-во: {handleGetCountAllTasks()}</div>
        </div>
    )
}