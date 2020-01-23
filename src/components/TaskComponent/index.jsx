import React, {useState, useEffect} from "react";

import './style.scss';

export default function TaskComponent(props) {

    const {task} = props;
    const {content, ready, id, isCurrentEdit} = task;

    const {updateTask, removeTask} = props;
    const [isEdit, setEdit] = useState(false);
    const [isTaskContent, setTaskContent] = useState(content);

    useEffect(() => {
        isCurrentEdit ? setEdit(true) : setEdit(false);
    }, [isCurrentEdit])

    const handleSetEdit = (edit) => {
        setEdit(edit);
        updateTask({
            id: id,
            isCurrentEdit: edit
        });
    }

    const getViewTask = () => {

        const handleCheckedTask = (checked) => {
            updateTask({
                id: id,
                ready: checked
            });
        }

        return (
            <div className={'task-view'}>
                <div className={"task-content"}>{content}</div>
                <div className={'task-childBlocksCenter'}>
                    <label className={'task-label'}>
                        <input type={'checkbox'} checked={ready} onChange={(e) => {
                            handleCheckedTask(e.currentTarget.checked);
                        }}/>
                        <div>
                            {ready ? '🟢' : '⭕'}
                        </div>
                    </label>

                    <input type={'button'} value={'⚙'} onClick={() => {
                        handleSetEdit(true)
                    }}/>
                </div>
            </div>
        )
    }

    const getEditTask = () => {

        const handleRemoveTask = () => {
            handleSetEdit(false);
            removeTask({
                id: id
            })
        }

        const handleUpdateTask = () => {
            handleSetEdit(false);
            updateTask({
                id: id,
                content: isTaskContent
            });
            setTaskContent(isTaskContent);
        }

        const handleCancelEditTask = () => {
            handleSetEdit(false);
            setTaskContent(content);
        }

        return (
            <div className={'task-edit'}>
                <input type={'text'} value={isTaskContent} onChange={(e) => {
                    setTaskContent(e.currentTarget.value)
                }}/>

                <input type={'button'} value={'💾'} onClick={() => {
                    handleUpdateTask()
                }}/>
                <input type={'button'} value={'🗑️'} onClick={() => {
                    handleRemoveTask()
                }}/>
                <input type={'button'} value={'❌'} onClick={() => {
                    handleCancelEditTask()
                }}/>
            </div>
        )
    }

    return (
        <div className={`task ${ready ? 'task-ready' : ''}`}>
            {isEdit ? getEditTask() : getViewTask()}
        </div>
    )
}