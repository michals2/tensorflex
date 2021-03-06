import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Model imports
import * as modelCreatorProgressActions from "Model/actions/modelCreatorProgressActions";

// View imports
import Component from "Components/...";

function mapStateToProps(state) {
  return { state: state.modelCreator };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(modelCreatorProgressActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
