// 기존 바닐라웹은 HTML이 중심이어서 HTML에서 IMPORT 작업을 했음
// JS가 중심이기에 모든 IMPORT 또한 JS에서 해주어야 함
import React from "react"
import ReactDOM from "react-dom/client"

import { Provider } from "react-redux"

import App from "./App"
import store from "./Redux/Reducer"

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store} >
        <App />
    </Provider>
)