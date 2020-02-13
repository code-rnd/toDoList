import {connect} from 'react-redux'
import WidjetComponent from "../../../components/tasks/WidjetComponent";

const mapStateToProps = state => ({
    status: state.process.status
})

const mapDispatchToProps = {}

export const WidjetContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WidjetComponent)