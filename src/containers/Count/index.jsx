import { connect } from "react-redux";
import CountUI from "../../components/Count"
import { creatIncrementAction, creatDecrementAction, creatIncrementAsyncAction } from "../../redux/count_action"

export default connect(
    state => ({ count: state }),
    {
        addCount: creatIncrementAction,
        removeCount: creatDecrementAction,
        addAsyncCount: creatIncrementAsyncAction
    }
)(CountUI)