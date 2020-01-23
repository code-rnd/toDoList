import {connect} from 'react-redux'
import TaskComponent from "../../components/TaskComponent";
import {removeTask, setCurrentTask, updateTask} from "../../store/actions";

const mapStateToProps = state => ({
    tasks: state.content.tasks,
    currentTask: state.content.currentTask
})

const mapDispatchToProps = {
    updateTask,
    removeTask,
    setCurrentTask
}

export const TaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskComponent)