import { connect } from "react-redux";
import CountUI from "../../components/Count"
import { creatIncrementAction, creatDecrementAction, creatIncrementAsyncAction } from "../../redux/count_action"

function mapStateToProps(state) {
    return {
        count: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addCount: num => dispatch(creatIncrementAction(num)),
        removeCount: num => dispatch(creatDecrementAction(num)),
        addAsyncCount: num => dispatch(creatIncrementAsyncAction(num,2000))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CountUI)