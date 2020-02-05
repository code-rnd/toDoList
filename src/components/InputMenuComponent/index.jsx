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
            <input type={'button'} value={`add`} onClick={() => {
                handleAddTask()
            }} disabled={!isContent}/>
        )
    }

    return (
        <div className={'inputMenu'}>
            <input type={'text'} placeholder={'new task...'} value={isContent} onChange={(e) => {
                setContent(e.currentTarget.value)
            }}/>
            {getButtonAddTask()}
        </div>
    )
}