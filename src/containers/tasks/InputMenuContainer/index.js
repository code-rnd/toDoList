import {connect} from 'react-redux'
import {addTask} from "../../../store/actions/tasks";
import InputMenuComponent from "../../../components/tasks/InputMenuComponent";

const mapStateToProps = state => ({})

const mapDispatchToProps = {
    addTask
}

export const InputMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputMenuComponent)