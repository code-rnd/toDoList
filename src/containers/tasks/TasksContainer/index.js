import {connect} from 'react-redux'
import TasksComponent from "../../../components/tasks/TasksComponent";

const mapStateToProps = state => ({
    tasks: state.content.tasks,
    x: state.tasks
})

const mapDispatchToProps = dispatch => ({})

export const TasksContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksComponent)