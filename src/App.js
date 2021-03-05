import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Counter,
  External,
  StudentList,
  AddStudent,
  EditStudent,
  NotificationContainer,
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import alertify from "alertifyjs";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function App() {
  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  } 
  // const { t } = useTranslation();
  // const test= function handleClick(lang) {
  //     i18next.changeLanguage(lang);
  //   } 
  //  const translateReducer =useSelector((state)=>state.translateReducer);
  // useEffect(()=> {
    
  // test(translateReducer.language)
  // },[translateReducer])
  
  const notification = useSelector((state) => state.notification);
  useEffect(() => {
    if (notification.message?.text) {
      alertify.success(notification.message.tkey ? t(notification.message.tkey) : notification.message.text);
    }
  }, [notification]);


  return (
    <Router>
      <div>
        <nav style={{ width: "100%", padding: "2rem ", marginLeft: "8rem" }}>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>handleClick("en")}
          >
            English
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => handleClick("tr")}
          >
            Türkçe
          </button>
        </nav>
        {/* <p> {t('Add.1')} </p>
        <p> {t('Delete.1')} </p> */}
<Container>      
  <Row>
          <Col xs="9">
            {" "}
            <StudentList />
          </Col>
        </Row>
        <Row >
          <Col xs="6">
            <AddStudent />
          </Col>
        </Row>
        <Row>
          {" "}
          <Switch>
            <Col xs="6">
              <Route path="/edit/:id">
                <EditStudent />
              </Route>
            </Col>
          </Switch>
        </Row></Container>
  
      </div>
    </Router>
  );
}

export default App;
