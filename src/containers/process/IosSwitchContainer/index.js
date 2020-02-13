import {connect} from 'react-redux'
import IosSwitchComponent from "../../../components/process/StartLogoComponent/IosSwitchComponent";
import {getStartProcess} from "../../../store/actions/process";

const mapStateToProps = state => ({})

const mapDispatchToProps = {
    getStartProcess
}

export const IosSwitchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IosSwitchComponent)