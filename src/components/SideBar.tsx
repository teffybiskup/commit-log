import BranchTreeView from "./BranchTreeView";
import "../styles/SideBar.css";

const Sidebar = () => {
    return (
        <div className="menu">
            <h3 className="title" title="organization/repository">organization/repository</h3>
            <BranchTreeView/>
        </div>
    );
};

export default Sidebar;