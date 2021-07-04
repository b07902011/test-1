import './App.css';
import { useState, useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './component/Header';
import MainPage from './container/MainPage'
import Footer from './component/Footer';
import { Switch, Route } from 'react-router';
import ClassFeedBack from './container/ClassFeedBack';
import { BrowserRouter } from 'react-router-dom'
import PostPage from './container/PostPage'
import PostMenu from './container/PostMenu'
import TodoList from "./container/TodoList";
import LoginForm from "./Login/LoginForm";
import SearchCourse from "./container/SearchCourse";
import { CONCAT_SERVER_URL } from "./utils";
import axios from "axios";
const config = {
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

function App() {
  
  const [userInfo, setUserInfo] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  console.log('userInfo', userInfo)
  const try_login = async () =>{
    let personalInfo = {};
    try{
      personalInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    }
    catch{}
    console.log('personalInfo', personalInfo)
    const ret = await axios.post(
          CONCAT_SERVER_URL("/login"),
          personalInfo,
          config
        )
    if(ret.data === "login success"){
      setUserInfo(personalInfo);
    }
  }
  useEffect(() => {
    document.title = "UT's blog";
    try_login()
  }, []);
  return (
    <>
      <CssBaseline />
        <Container maxWidth="lg">
            <Header 
              data={userInfo}
              onLogin={() => setModalShow(true)}
              onLogout={() => {
                setUserInfo(null)
                sessionStorage.removeItem("userInfo")
              }} 
            />
            <main>
              
              <Switch>
                <Route exact path="/">
                  <MainPage />
                </Route>
                <Route exact path="/todolist">
                  <TodoList userInfo={userInfo} setModalShow={setModalShow} />
                </Route>
                <Route path="/classFeedBack">
                    <ClassFeedBack />
                </Route>
                <Route path="/search">
                  <SearchCourse userInfo={userInfo} setModalShow={setModalShow} />
                </Route>
                <Route exact path="/post">
                    <PostMenu/>
                </Route>
                <Route path="/post/:postID">
                    <PostPage/>
                </Route>
              </Switch>
              
            </main>
        </Container>
        <LoginForm
          backdrop={true}
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
          setUserInfo={setUserInfo}
          otherOption="取消"
        />
        <Footer/>
    </>
  );
}

export default App;
