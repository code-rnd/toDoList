import React from "react";
import {TaskContainer} from "../../containers/TaskContainer";

import './style.scss';

export default function TasksComponent(props) {

    const {tasks} = props;

    return (
        <div className={'tasks'}>
            {
                tasks ?
                    tasks.map((task, key) => <TaskContainer key={key} task={task}/>) :
                    'На сегодня задач нет'
            }
        </div>
    )
}