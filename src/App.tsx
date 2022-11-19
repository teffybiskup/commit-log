import React from "react";
import CommitTable from "./components/CommitTable";
import FilterToolbar from "./components/FilterToolbar";
import Sidebar from "./components/SideBar";
import "./styles/App.css";

const App = () => {
    return (
        <body>
            <div className="wrapper">
                <Sidebar />
                <div className="content">
                    <FilterToolbar />
                    <CommitTable />
                </div>
            </div>
        </body>
    )
}
export default App;
