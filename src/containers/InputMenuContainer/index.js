import {connect} from 'react-redux'
import {addTask} from "../../store/actions";
import InputMenuComponent from "../../components/InputMenuComponent";

const mapStateToProps = state => ({})

const mapDispatchToProps = {
    addTask
}

export const InputMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputMenuComponent)