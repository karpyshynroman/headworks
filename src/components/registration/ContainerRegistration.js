import React from 'react';
import {connect} from "react-redux";
import {register} from "../../store/registration/actions";
import Registration from "./Registration";

const ContainerRegistration = (props) => {
  return (
    <div>
      <Registration
        data={props.data}
        register={props.register}
      />
    </div>
  );
};
const putStateToProps = (state) => {
  return {
    data: state.registration.data,
  }
};
const putDispatchToProps = {
  register,
};
export default connect(putStateToProps, putDispatchToProps)(ContainerRegistration);
