import "../styles/CommitTable.css";

const CommitTable = () => {
    return (
        <table className="commit-table">
            <tr className="table-header">
                <th>Graph</th>
                <th>Description</th>
                <th>Commit #</th>
                <th>Author</th>
                <th>Date</th>
            </tr>
            <tr>
                <td>X</td>
                <td>Somme commit message from the developer here</td>
                <td>000000000000</td>
                <td>John Smith</td>
                <td>Today at 9:25 PM</td>
            </tr>
        </table>
    );
};

export default CommitTable;