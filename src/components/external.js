import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../store/actions/counter.action";

function External(props) {
  const dispatch = useDispatch();
  const addCounter = (value) => {
    dispatch(actions.increment(value));
  };
  return (
    <div>
      <button onClick={() => addCounter(15)}>Arttır</button>
    </div>
  );
}

export default External;
