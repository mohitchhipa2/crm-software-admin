import React, { Fragment, useRef, useState } from "react";
import {
    Container,
    Row,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Col,
    Table,
} from "reactstrap";
// import { Breadcrumbs } from "../../../AbstractElements";
// import BarChartsWidgets from "./BarChartsWidgets";
// import ChartWidgets from "./ChartWidgets";
// import CryptoAnnotations from "./CryptoAnnotations";
// import CryptocurrencyPrices from "./CryptocurrencyPrices";
// import FinanceChart from "./FinanceChart";
// import LiveChart from "./LiveChart";
// import MonthlySaleChart from "./MonthlySaleChart";
// import OrderStatusProgressChart from "./OrderStatus";
// import OrderStatusChart from "./OrderStatusChart";
// import SkillStatusChart from "./SkillStatus";
// import TurnoverChart from "./TurnoverChart";
// import UsesChart from "./UsesChart";
// import StockMarket from "./StockMarket";
// import "./linkidin.css";
import { FaSort } from "react-icons/fa";
import { Breadcrumbs } from "@material-tailwind/react";
const CheckoutTableData = () => {
    const [linkedInFormData, setLinkedInFormData] = useState({
        userName: "",
        password: "",
        remark: "",
        date: "",
        numberOfConnections: "",
    });

    const handleLinkedInChange = (e) => {
        const { name, value } = e.target;
        setLinkedInFormData({
            ...linkedInFormData,
            [name]: value,
        });
    };

    const handleLinkedInSubmit = (e) => {
        e.preventDefault();
        // Add your LinkedIn task submission logic here
        console.log("LinkedIn Task submitted:", linkedInFormData);
        // Reset the form after submission
        setLinkedInFormData({
            userName: "",
            password: "",
            remark: "",
            date: "",
            numberOfConnections: "",
        });
    };

    const [lindinHistoryData, setlindinHistoryData] = useState([
        {
            date: "22/01/2024",
            status: "pending",
            userName: "mohit",
            userid: "3723",
            taskreward: "261"

        },
        {
            date: "23/01/2024",
            status: "Approved",
            userName: "navratan",
            userid: "3232",
            taskreward: "325"

        },
        {
            date: "24/01/2024",
            status: "pending",
            userName: "Devanshu",
            userid: "3232",
            taskreward: "435"
        },
    ]);
    const tableRef = useRef(null);

    const copyTable = () => {
        const table = document.getElementById("myTable");

        if (!table) {
            console.error("Table not found");
            return;
        }

        const range = document.createRange();
        range.selectNode(table);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            document.execCommand("copy");
            alert("Table copied to clipboard!"); // Show a simple notification
        } catch (err) {
            console.error("Unable to copy table to clipboard", err);
        } finally {
            window.getSelection().removeAllRanges();
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const downloadTableAsCSV = () => {
        const table = document.getElementById("myTable");

        if (!table) {
            console.error("Table not found");
            return;
        }

        const rows = table.querySelectorAll("tr");
        const csvData = [];

        rows.forEach((row) => {
            const rowData = [];
            const cells = row.querySelectorAll("td, th");

            cells.forEach((cell) => {
                rowData.push(cell.innerText);
            });

            csvData.push(rowData.join(","));
        });

        const csvContent = csvData.join("\n");
        const blob = new Blob([csvContent], { type: "text/csv" });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "table_data.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const [searchTerm, setSearchTerm] = useState(""); // Step 1

    // ... (unchanged)

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredlindinHistoryData = lindinHistoryData.filter((item) => {
        // Step 3
        return (
            item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Connection.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Approval.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    // const [lindinHistoryData, setLindinHistoryData] = useState(/* your initial data */);
    const [sortOrder, setSortOrder] = useState({
        date: "asc",
        connection: "asc",
        approval: "asc",
    });

    const handleshort = () => {
        const column = "date";

        const sortedData = [...lindinHistoryData].sort((a, b) => {
            const valueA = a[column];
            const valueB = b[column];

            if (sortOrder[column] === "asc") {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });

        setlindinHistoryData(sortedData);
        setSortOrder((prevSortOrder) => ({
            ...prevSortOrder,
            date: prevSortOrder.date === "asc" ? "desc" : "asc",
        }));
    };

    const sortByApproval = () => {
        const sortedData = [...lindinHistoryData].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.Approval.localeCompare(b.Approval);
            } else {
                return b.Approval.localeCompare(a.Approval);
            }
        });
        setlindinHistoryData(sortedData);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const sortByConnection = () => {
        const column = "Connection";

        const sortedData = [...lindinHistoryData].sort((a, b) => {
            const valueA = a[column];
            const valueB = b[column];

            if (sortOrder[column] === "asc") {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });

        setlindinHistoryData(sortedData);
        setSortOrder((prevSortOrder) => ({
            ...prevSortOrder,
            Connection: prevSortOrder.Connection === "asc" ? "desc" : "asc",
        }));
    };

    return (
        <Fragment>
            <Breadcrumbs
                mainTitle="Linkedin Account"
                parent="Widgets"
                title="Linkedin Account"
            />
            <Container fluid={true} className="chart-widget">
                <Row style={{ marginTop: "20px" }}>
                    <Col xl="12">
                        <h3
                            style={{
                                color: "#7366FF",
                                fontFamily: "arial",
                                fontWeight: "bold",
                            }}
                        >
                            Task Reward
                        </h3>
                        <div style={{ display: "flex" }} className="workinputnutton">
                            <div
                            //   style={ {
                            //     display: "flex",
                            //     position: "relative",
                            //     left: "66%",
                            //     top: "0",
                            //     gap: "5px"
                            // } }
                            >
                                <Input
                                    className="searchdaily"
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    style={{
                                        height: "35px",
                                        width: "380px",
                                        // marginTop:"15px"
                                        // position: "absolute"
                                    }}
                                />
                            </div>
                            <div className="tableworkbuttondaily">
                                <Button
                                    color="primary"
                                    // style={{
                                    //   border: "1px solid #DEE2E6",
                                    //   width: "70px",
                                    //   height: "30px",
                                    // }}
                                    onClick={copyTable}
                                >
                                    Copy
                                </Button>
                                <Button
                                    color="primary"
                                    // style={{
                                    //   border: "1px solid #DEE2E6",
                                    //   width: "70px",
                                    //   height: "30px",
                                    // }}
                                    onClick={downloadTableAsCSV}
                                >
                                    CSV
                                </Button>
                                <Button
                                    color="primary"
                                    // style={{
                                    //   border: "1px solid #DEE2E6",
                                    //   width: "70px",
                                    //   height: "30px",
                                    // }}
                                    onClick={downloadTableAsCSV}
                                >
                                    Excel
                                </Button>
                                <Button color="primary" onClick={handlePrint}>
                                    Print
                                </Button>
                            </div>
                        </div>
                        <div className="table-responsive" style={{ overflowX: "auto" }}>
                            <Table id="myTable" className="linkedin">
                                <thead>
                                    <tr>
                                        <th onClick={handleshort}>
                                            Date <FaSort style={{ color: "#BABABA" }} />
                                        </th>
                                        <th onClick={handleshort}>
                                            User ID <FaSort style={{ color: "#BABABA" }} />
                                        </th>
                                        <th onClick={handleshort}>
                                            User Name <FaSort style={{ color: "#BABABA" }} />
                                        </th>
                                        <th onClick={handleshort}>
                                            Task Reward <FaSort style={{ color: "#BABABA" }} />
                                        </th>
                                        <th onClick={sortByApproval}>
                                            Status <FaSort style={{ color: "#BABABA" }} />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredlindinHistoryData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.date}</td>
                                            <td>{item.userid}</td>
                                            <td>{item.userName}</td>
                                            <td>{item.taskreward}</td>

                                            <td
                                                style={{
                                                    color: item.Approval === "Approved" ? "blue" : "red",
                                                }}
                                            >
                                                {item.status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        <div className="pagination-first">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Previous
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default CheckoutTableData;
