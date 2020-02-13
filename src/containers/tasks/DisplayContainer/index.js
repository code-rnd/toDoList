import {connect} from 'react-redux'
import DisplayComponent from "../../../components/tasks/DisplayComponent";

const mapStateToProps = state => ({
    tasks: state.content.tasks
})

const mapDispatchToProps = {}

export const DisplayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayComponent)