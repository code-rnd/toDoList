import React, {useEffect, useState} from "react";

import './style.scss';
import IosSwitchComponent from "../IosSwitchComponent";

export default function TaskComponent(props) {

    const {task} = props;
    const {content, ready, id} = task;

    const {updateTask, removeTask} = props;
    const [isEdit, setEdit] = useState(false);
    const [isTaskContent, setTaskContent] = useState(content);
    const [isReady, setIsReady] = useState(ready);

    useEffect(() => {
        setIsReady(ready);
    }, [ready])

    useEffect(() => {
        setTaskContent(content);
    }, [task])

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
                <div className={"task-content"} onClick={() => {
                    handleSetEdit(true);
                }}>{content}</div>
                <div className={'task-childBlocksCenter'}>
                    <IosSwitchComponent ready={isReady} handleCheckedTask={handleCheckedTask}/>
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
        }

        const handleOnBlur = () => {
            !isTaskContent || isTaskContent === ' ' ?
                handleRemoveTask() : handleUpdateTask()
        }

        return (
            <div className={'task-edit'}>
                <textarea value={isTaskContent}
                          onChange={e => setTaskContent(e.currentTarget.value)}
                          rows={3}
                          className={'task-textarea'}
                          autoFocus={true}
                    onBlur={() => handleOnBlur()}
                />
                <div className={'task-edit-exit'}>save</div>
            </div>
        )
    }

    return (
        <div className={`task ${ready ? 'task-ready' : ''}`}>
            {isEdit ? getEditTask() : getViewTask()}
        </div>
    )
}