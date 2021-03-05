import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { External } from "./";

import { actions } from "../store/actions/counter.action";

function Counter(props) {
  const value = useSelector((state) => state.counter);
  const [elma, setElma] = useState("kırmızı");

  const [openModal, setOpenModal] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(elma);
  }, [elma]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      {value.value} <br />
      <button onClick={()=>setElma('mavi')}>Elmamı değiştir</button>
      {openModal && <div style={{background: 'red'}}>Gizli veri</div>}
      <button onClick={()=>setOpenModal(!openModal)}>Göster/Gizle</button>
      <br />
    </div>
  );
}

export default Counter;
