import "../styles/BranchTreeView.css";

const BranchTreeView = () => {
    return (
        <div className="tree-view">
            <h4 title="Branches">Branches</h4>
            <ul>
                <li title="dev">dev</li>
                <li title="master">master</li>
                <li title="feature/test">feature/test</li>
                <li title="feature/test2">feature/test2</li>
            </ul>
        </div>
    );
};

export default BranchTreeView;