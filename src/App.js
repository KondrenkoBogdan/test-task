import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Home from "./parts/Home/Home";
import ConnectedFirstPageContainer from "./parts/First/FirstPageContainer";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";
import SecondPartContainer from "./parts/Second/secondPartContainer";

function App() {
    return (
        <div className="App">
            <Route exact path="/" render={Home}/>
            <Route path="/first" component={ConnectedFirstPageContainer}/>
            <Route path="/second" render={SecondPartContainer}/>
        </div>
    );
}

const MainApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    )
}


export default MainApp;
