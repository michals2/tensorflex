import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Model imports
import { incrementStep, decrementStep } from "Model/actions/actions";

// View imports
import ModelCreator from "Components/ModelCreator";

function mapStateToProps(state) {
  return { state: state.modelCreator.modelCreatorProgress };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ incrementStep, decrementStep }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelCreator);
