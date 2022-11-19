import React, { useState } from "react";
import CommitTable from "./components/CommitTable";
import FilterToolbar from "./components/FilterToolbar";
import Sidebar from "./components/SideBar";
import "./styles/App.css";

const App = () => {
    const [commitMessageSearch, setCommitMessageSearch] = useState<string>('');

    return (
        <div className="wrapper">
            <Sidebar />
            <div className="content">
                <FilterToolbar
                    inputSearch={commitMessageSearch}
                    onFilterChange={setCommitMessageSearch}
                />
                <CommitTable filterSearch={commitMessageSearch}/>
            </div>
        </div>
    )
}

export default App;