import React, {useState} from "react";

import './style.scss';

export default function InputMenuComponent(props) {

    const {addTask} = props;
    const [isContent, setContent] = useState('');

    const handleAddTask = () => {
        addTask({content: isContent});
        setContent('');
    }

    const getButtonAddTask = () => {
        return (
            <div className={'task-edit-exit'} onClick={() => {
                handleAddTask()
            }} disabled={!isContent}>
            </div>
        )
    }

    return (
        <div className={'inputMenu'}>
            <input type={'text'} placeholder={'новая таска..'} value={isContent} onChange={(e) => {
                setContent(e.currentTarget.value)
            }}/>
            {getButtonAddTask()}
        </div>
    )
}