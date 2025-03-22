import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import store from "./store";
import GptChild from "./chat";

function Creater(){
    return(

        <Provider store={store}>
          <GptChild></GptChild>
        </Provider>

    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Creater></Creater>);