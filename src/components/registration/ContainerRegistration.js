import React from 'react';
import {connect} from "react-redux";
import {register ,getMeowFact} from "../../store/registration/actions";
import Registration from "./Registration";

const ContainerRegistration = (props) => {
  return (
    <div>
      <Registration
        data={props.data}
        fact={props.fact}
        getFact={props.getFact}
        register={props.register}
      />
    </div>
  );
};
const putStateToProps = (state) => {
  return {
    data: state.registration.data,
    fact: state.registration.fact,
  }
};
const putDispatchToProps = {
  register,
  getFact: getMeowFact
};
export default connect(putStateToProps, putDispatchToProps)(ContainerRegistration);
