import React, { Fragment, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Table,
} from "reactstrap";
import { toast } from "react-toastify";
import { Breadcrumbs } from "../../../AbstractElements";
import "./daily.css";
import {
  FaSort,
  FaSortUp,
  FaSortDown,
  FaCheck,
  FaRegCopy,
} from "react-icons/fa"; // Import the icons
import { RxCross2 } from "react-icons/rx";
import { Color, Success } from "../../../Constant";
import PaginationOne from "./Pagination";
import PaginationTwo from "./PaginationTwo";

const GeneralComponent = () => {
  const [todayTaskFormData, setTodayTaskFormData] = useState({
    date: "",
    taskName: "",
    taskLink: "",
    remark: "",
    status: "",
  });

  const [taskHistoryData, setTaskHistoryData] = useState([
    // Sample data, replace with your actual data
    {
      date: "2022-01-01",
      taskName: "Sample Task",
      taskLink: "#",
      remark: "Comprehensive",
      status: "Complete",
      approval: "Approved",
      userid: "3242",
      username: "Mohit"
    },
    {
      date: "2022-01-02",
      taskName: "Another Task",
      taskLink: "#",
      remark: "from delhi",
      status: "Incomplete",
      approval: "Pending",
      userid: "6534",
      username: "Devanshu"
    },
    {
      date: "2022-01-01",
      taskName: "Sample ok",
      taskLink: "#",
      remark: "already",
      status: "Complete",
      approval: "Approved",
      userid: "1332",
      username: "Navratan"
    },
  ]);

  const [todaytaskHistoryData, settodayTaskHistoryData] = useState([
    // Sample data, replace with your actual data
    {
      date: "2022-01-01",
      taskName: "Sample Task",
      taskLink: "gadgadshag.in",
      remark: "new client",
      status: "Complete",
      approval: "Approved",
      EditDelete: (
        <div style={{ display: "flex", gap: "5px" }}>
          <Button color="primary">Edit</Button>
          <Button>Delete</Button>
        </div>
      )
    },
    {
      date: "2022-01-02",
      taskName: "Another Task",
      taskLink: "hsahdhas.com",
      remark: "facebook",
      status: "Incomplete",
      approval: "Pending",
      EditDelete: (
        <div style={{ display: "flex", gap: "5px" }}>
          <Button color="primary">Edit</Button>
          <Button>Delete</Button>
        </div>
      )
    },
    {
      date: "2022-01-01",
      taskName: "Sample ok",
      taskLink: "dajjdja.in",
      remark: "friend",
      status: "Complete",
      approval: "Approved",
      EditDelete: (
        <div style={{ display: "flex", gap: "5px" }}>
          <Button color="primary">Edit</Button>
          <Button>Delete</Button>
        </div>
      )
    },
  ]);

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortOrderone, setSortOrderone] = useState("asc");

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

  //------------------- today task history data-------------------------------------*/

  const copyTableone = () => {
    const table = document.getElementById("myTableone");

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

  const handlePrintone = () => {
    window.print();
  };
  const downloadTableAsCSVone = () => {
    const table = document.getElementById("myTableone");

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
  // *----------end----------------//

  const handleSort = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    setTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const [searchTerm, setSearchTerm] = useState(""); // Step 1

  // ... (unchanged)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTaskHistoryData = taskHistoryData.filter((item) => {
    // Step 3
    return (
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.taskName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.remark.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.approval.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Function to sort by taskName
  const sortByTaskName = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.taskName.localeCompare(b.taskName);
      } else {
        return b.taskName.localeCompare(a.taskName);
      }
    });
    setTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Function to sort by taskLink
  // Function to sort by taskLink
  const sortByTaskLink = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.taskLink.localeCompare(b.taskLink);
      } else {
        return b.taskLink.localeCompare(a.taskLink);
      }
    });
    setTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Function to sort by remark
  const sortByRemark = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.remark.localeCompare(b.remark);
      } else {
        return b.remark.localeCompare(a.remark);
      }
    });
    setTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Function to sort by status
  const sortByStatus = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.status.localeCompare(b.status);
      } else {
        return b.status.localeCompare(a.status);
      }
    });
    setTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Function to sort by approval
  const sortByApproval = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.approval.localeCompare(b.approval);
      } else {
        return b.approval.localeCompare(a.approval);
      }
    });
    setTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // {//--------------today task history data sorting functions----------///}
  const [searchTermone, setSearchTermone] = useState(""); // Step 1
  const handleSearchChangeone = (e) => {
    setSearchTermone(e.target.value);
  };

  const filteredtodaytaskHistoryData = todaytaskHistoryData.filter((item) => {
    // Step 3
    return (
      item.date.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.taskName.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.remark.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.approval.toLowerCase().includes(searchTermone.toLowerCase())
    );
  });

  const handleSortone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByTaskNameone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.taskName.localeCompare(b.taskName);
      } else {
        return b.taskName.localeCompare(a.taskName);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByTaskLinkone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.taskLink.localeCompare(b.taskLink);
      } else {
        return b.taskLink.localeCompare(a.taskLink);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByRemarkone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.remark.localeCompare(b.remark);
      } else {
        return b.remark.localeCompare(a.remark);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByStatusone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.status.localeCompare(b.status);
      } else {
        return b.status.localeCompare(a.status);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByApprovalone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.approval.localeCompare(b.approval);
      } else {
        return b.approval.localeCompare(a.approval);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const copyTables = (taskLink) => {
    const range = document.createRange();
    const dummyElement = document.createElement("textarea");
    dummyElement.value = taskLink;

    document.body.appendChild(dummyElement);
    dummyElement.select();
    document.execCommand("copy");
    document.body.removeChild(dummyElement);

    toast.success("Task Link copied to clipboard!");
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Daily Task" parent="Widgets" title="Daily Task" />
      <div style={{ background: "white" }} className="alldocument">
        <h2
          style={{
            color: "#7366FF",
            fontFamily: "arial",
            fontWeight: "bold",
          }}
        >
          Create Daily Task
        </h2>
        <div>
          <div>
            <p>Enter Date:</p>
            <Input
              type="date"
              placeholder="Enter user id"
            />
          </div>

          <div>
            <p>Task Name:</p>
            <Input
              type="text"
              placeholder="Enter Task Name"
            />
          </div>

          <div>
            <p>Task Link:</p>
            <Input type="text" placeholder="Enter Task Link" />
          </div>

          <div>
            <p>Remark:</p>
            <Input
              type="text"
              placeholder="Enter remark"
            />
          </div>
        </div>
        <Button >Submit</Button>
      </div>
      <Container style={{ marginTop: "20px" }} fluid={true} className="general-widget">
        {/* ... (unchanged) */}

        <Row style={{ marginTop: "20px" }}>
          <Col xl="12">
            <h3
              style={{
                color: "#7366FF",
                fontFamily: "arial",
                fontWeight: "bold",
              }}
            >
              Admin Task History
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
                  value={searchTermone}
                  onChange={handleSearchChangeone}
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
                  onClick={copyTableone}
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
                  onClick={downloadTableAsCSVone}
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
                  onClick={downloadTableAsCSVone}
                >
                  Excel
                </Button>
                <Button color="primary" onClick={handlePrintone}>
                  Print
                </Button>
              </div>
            </div>
            <div className="dailytasktable" style={{ overflowX: "auto" }}>
              <Table style={{ marginTop: "10px" }} id="myTableone">
                <thead>
                  <tr>
                    <th onClick={handleSortone}>
                      Date <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByTaskNameone}>
                      Task Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByTaskLinkone}>
                      Task Link
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByRemarkone}>
                      Remark
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>

                    <th onClick={sortByApprovalone}>
                      Edit/Delete

                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredtodaytaskHistoryData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.taskName}</td>
                      <td>
                        {item.taskLink}
                        <FaRegCopy
                          style={{ cursor: "pointer", marginLeft: "10px" }}
                          onClick={() => copyTables(item.taskLink)}
                        />
                      </td>
                      <td>{item.remark}</td>

                      <td>
                        {item.EditDelete}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <PaginationOne />
          </Col>
        </Row>
      </Container>
      <Container
        style={{ marginTop: "100px" }}
        fluid={true}
        className="general-widget"
      >
        <Row style={{ marginTop: "20px" }}>
          <Col xl="12">
            <h3
              style={{
                color: "#7366FF",
                fontFamily: "arial",
                fontWeight: "bold",
              }}
            >
              User  Task History
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
            <div className="dailytasktable" style={{ overflowX: "auto" }}>
              <Table id="myTable" className="task-history-table">
                <thead>
                  <tr>
                    <th onClick={handleSort}>
                      Date <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByTaskName}>
                      User ID
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByTaskName}>
                      User Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByTaskName}>
                      Task Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByTaskLink}>
                      Task Link
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByRemark}>
                      Remark
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByStatus}>
                      Status
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByApproval}>
                      Approval
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTaskHistoryData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.userid}</td>
                      <td>{item.username}</td>
                      <td>{item.taskName}</td>
                      <td>
                        {item.taskLink}
                        <FaRegCopy
                          style={{ cursor: "pointer", marginLeft: "10px" }}
                          onClick={() => copyTables(item.taskLink)}
                        />
                      </td>
                      <td>{item.remark}</td>
                      <td
                        style={{
                          color: item.status === "Complete" ? "blue" : "red",
                        }}
                      >
                        {item.status}
                      </td>
                      <td>{item.approval}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <PaginationTwo />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default GeneralComponent;
