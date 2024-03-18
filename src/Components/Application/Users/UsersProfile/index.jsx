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
// import { Breadcrumbs } from "../../../AbstractElements";
// import "./daily.css";
import "./income.css";
import { FaSort, FaSortUp, FaSortDown, FaCheck } from "react-icons/fa"; // Import the icons
import { RxCross2 } from "react-icons/rx";
// import { Color } from "../../../Constant";
import { Breadcrumbs } from "@mui/material";

const UsersProfileContain = () => {
  const [todayTaskFormData, setTodayTaskFormData] = useState({
    date: "",
    ProjectName: "",
    ProjectId: "",
    UserId: "",
    UserName: "",
  });

  const [taskHistoryData, setTaskHistoryData] = useState([
    // Sample data, replace with your actual data
    {
      Sno: "1",
      date: "2022-01-01",
      UserId: "224",
      username: "mohit",
      Refferalid: "24343",
      Refferalname: "navratan",
      IncomeType: "Affilate Bonus",
      EarningAmount: "6243762",
      Time:"12:34:56"
    },
    {
      Sno: "2",
      date: "2022-01-02",
      UserId: "564",
      username: "navratan",
      Refferalid: "342",
      Refferalname: "prajapat",
      IncomeType: "Task Reward Bonus",
      EarningAmount: " 4763534",
      Time:"6:36:56"

    },
    {
      Sno: "3",
      date: "2022-01-01",
      UserId: "546",
      username: "mohit",
      Refferalid: "247",
      Refferalname: "mohit",
      IncomeType: "Affilate Bonus",
      EarningAmount: "2313312",
      Time:"8:23:56"
    },
  ]);

  const [todaytaskHistoryData, settodayTaskHistoryData] = useState([
    {
      SNo: "1",
      ProjectID: "P001",
      ProjectName: "Project X",
      ToUserID: "USR001",
      ToUserName: "JohnDoe123",
      FromUserID: "USR002",
      FromUserName: "AliceSmith789",
      IncomeType: "Tier 1",
      ProjectInstallmentAmount: "500.00",
      EarningAmount: "250.00",
      Date: "2024-02-17",
      Time: "09:30:00"
    },
    {
      SNo: "2",
      ProjectID: "P002",
      ProjectName: "Project Y",
      ToUserID: "USR003",
      ToUserName: "BobJohnson456",
      FromUserID: "USR001",
      FromUserName: "JohnDoe123",
      IncomeType: "Tier 2",
      ProjectInstallmentAmount: "750.00",
      EarningAmount: "300.00",
      Date: "2024-02-17",
      Time: "11:15:00"
    },
    {
      SNo: "3",
      ProjectID: "P003",
      ProjectName: "Project Z",
      ToUserID: "USR002",
      ToUserName: "AliceSmith789",
      FromUserID: "USR003",
      FromUserName: "BobJohnson456",
      IncomeType: "Tier 3",
      ProjectInstallmentAmount: "1000.00",
      EarningAmount: "500.00",
      Date: "2024-02-17",
      Time: "14:45:00"
    }
  ]
  );

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
      item.ProjectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.UserId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.UserName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.approval.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Function to sort by ProjectName
  const sortByProjectName = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.ProjectName.localeCompare(b.ProjectName);
      } else {
        return b.ProjectName.localeCompare(a.ProjectName);
      }
    });
    setTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Function to sort by ProjectId
  // Function to sort by ProjectId
  const sortByProjectId = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.ProjectId.localeCompare(b.ProjectId);
      } else {
        return b.ProjectId.localeCompare(a.ProjectId);
      }
    });
    setTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Function to sort by UserId
  const sortByUserId = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.UserId.localeCompare(b.UserId);
      } else {
        return b.UserId.localeCompare(a.UserId);
      }
    });
    setTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Function to sort by UserName
  const sortByUserName = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.UserName.localeCompare(b.UserName);
      } else {
        return b.UserName.localeCompare(a.UserName);
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
      item.SNo.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.ProjectID.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.ProjectName.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.ToUserID.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.ToUserName.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.FromUserID.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.FromUserName.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.IncomeType.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.FromUserID.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.ProjectInstallmentAmount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.EarningAmount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Date.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Time.toLowerCase().includes(searchTermone.toLowerCase())
    );
  });

  const handleSortone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      const dateA = new Date(a.Date);
      const dateB = new Date(b.Date);
      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByProjectNameone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.ProjectName.localeCompare(b.ProjectName);
      } else {
        return b.ProjectName.localeCompare(a.ProjectName);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByProjectIdone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.ProjectID.localeCompare(b.ProjectID);
      } else {
        return b.ProjectID.localeCompare(a.ProjectID);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortBySno = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.SNo.localeCompare(b.SNo);
      } else {
        return b.SNo.localeCompare(a.SNo);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortBySno1 = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Sno.localeCompare(b.Sno);
      } else {
        return b.Sno.localeCompare(a.Sno);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByUserIdone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.UserId.localeCompare(b.UserId);
      } else {
        return b.UserId.localeCompare(a.UserId);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByUserIdone1 = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Refferalid.localeCompare(b.Refferalid);
      } else {
        return b.Refferalid.localeCompare(a.Refferalid);
      }
    });
    setTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByUserNameone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.UserName.localeCompare(b.UserName);
      } else {
        return b.UserName.localeCompare(a.UserName);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByUserNameone1 = () => {
    const sortedData = [...taskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Refferalname.localeCompare(b.Refferalname);
      } else {
        return b.Refferalname.localeCompare(a.Refferalname);
      }
    });
    setTaskHistoryData(sortedData);
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

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Daily Task" parent="Widgets" title="Daily Task" />
      <Container fluid={true} className="general-widget">
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
              Project Income
            </h3>
            <div className="workinputnutton">
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
            <div className="dailytasktable dailytasktable-1">
              <Table id="myTable" className="myTable-1">
                <thead>
                  <tr>
                    <th onClick={sortBySno}>
                      S.No.
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByProjectIdone}>
                      Project id
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByProjectNameone}>
                      Project Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserIdone}>
                      To User ID
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserNameone}>
                      To User Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserNameone}>
                      From User ID
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserNameone}>
                      From User Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserNameone}>
                      Income Type
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserNameone}>
                      {" "}
                      Installment Amount
                      <FaSort style={{ color: "#BABABA", display: "inline" }} />
                    </th>
                    <th onClick={sortByUserNameone}>
                      Earning Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>

                    <th onClick={handleSortone}>
                      Date <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={handleSortone}>
                      Time <FaSort style={{ color: "#BABABA" }} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredtodaytaskHistoryData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.SNo}</td>
                      <td>{item.ProjectID}</td>
                      <td>{item.ProjectName}</td>
                      <td>{item.ToUserID}</td>
                      <td>{item.ToUserName}</td>
                      <td>{item.FromUserID}</td>
                      <td>{item.FromUserName}</td>
                      <td>{item.IncomeType}</td>
                      <td>{item.ProjectInstallmentAmount}</td>
                      <td>{item.EarningAmount}</td>
                      <td>{item.Date}</td>
                      <td>{item.Time}</td>

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
              Affiliate and Task Reward
            </h3>
            <div className="workinputnutton">
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
            <div
              className="dailytasktable"
              style={{ overflowX: "auto", width: "100%" }}
            >
              <Table id="myTable" className="earning-table">
                <thead>
                  <tr>
                    <th onClick={sortByUserIdone1}>
                      S.No.
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserIdone1}>
                      User ID
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserIdone1}>
                      User Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserIdone1}>
                      Refferal Id
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserNameone1}>
                      Refferal Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserNameone1}>
                      Income Type
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserNameone1}>
                      Earning Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>

                    <th onClick={sortByUserNameone1}>
                      Date <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserNameone1}>
                      Time <FaSort style={{ color: "#BABABA" }} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTaskHistoryData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Sno}</td>
                      <td>{item.UserId}</td>
                      <td> {item.username}</td>
                      <td>{item.Refferalid}</td>
                      <td>{item.Refferalname}</td>
                      <td>{item.IncomeType}</td>
                      <td>{item.EarningAmount}</td>
                      <td>{item.date}</td>
                      <td>{item.Time}</td>
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

export default UsersProfileContain;
