import React from 'react';
import Clients from "./Clients";
import {connect} from "react-redux";

const ContainerClients = (props) => {
  return (
    <div>
      <Clients
        data={props.data}
      />
    </div>
  );
};

const putStateToProps = (state) => {
  return {
    data: state.registration.data,
  }
};

export default connect(putStateToProps)(ContainerClients);
