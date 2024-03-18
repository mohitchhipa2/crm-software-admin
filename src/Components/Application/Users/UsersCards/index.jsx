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
import { FaSort, FaSortUp, FaSortDown, FaCheck } from "react-icons/fa"; // Import the icons
import { Breadcrumbs } from "@mui/material";
import "./income.css";
const UsersCardssContain = () => {
  const [todayTaskFormData, setTodayTaskFormData] = useState({
    date: "",
    MobileNumber: "",
    Image: "",
    UserId: "",
    Email: "",
    Refferalname: "",
  });

  const [todaytaskHistoryData, settodayTaskHistoryData] = useState([
    // Sample data, replace with your actual data
    {
      Sno: "1",
      Name: "mohit",
      UserId: "24343",
      Image: "326",
      MobileNumber: "23426546264",
      Email: "navratan@gmail.com",
      Totalprojectamount: "6243762",
      AmountReceived: "35264",
      date: "2022-01-01",
      ProjectEarningamount: "637",
      RefarralEarningamount: "23",
      TaskWalletAmount: "3",
      TotalWithdrawal: "798",
      TotalEarningamount: "500",
      WithdrawableAmount: "231",
      Addbonus: "1233",
      status: "pending",
    },
    {
      Sno: "2",
      Name: "navratan",
      UserId: "34524",
      Image: "432",
      MobileNumber: "242123121",
      Email: "mohit@gmail.com",
      Totalprojectamount: "112413",
      AmountReceived: "1323",
      date: "2022-01-04",
      ProjectEarningamount: "231",
      RefarralEarningamount: "2313",
      TaskWalletAmount: "3232",
      TotalWithdrawal: "12312",
      TotalEarningamount: "50340",
      WithdrawableAmount: "534",
      Addbonus: "11",
      status: "reject",
    },
    {
      Sno: "3",
      Name: "raghav",
      UserId: "42324",
      Image: "324",
      MobileNumber: "234432",
      Email: "raghav@gmail.com",
      Totalprojectamount: "54656",
      AmountReceived: "7676",
      date: "2022-01-08",
      ProjectEarningamount: "5435",
      RefarralEarningamount: "5345",
      TaskWalletAmount: "43",
      TotalWithdrawal: "4555",
      TotalEarningamount: "89778",
      WithdrawableAmount: "54564",
      Addbonus: "234",
      status: "compelete",
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

  const [searchTerm, setSearchTerm] = useState(""); // Step 1

  // ... (unchanged)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [searchTermone, setSearchTermone] = useState(""); // Step 1
  const handleSearchChangeone = (e) => {
    setSearchTermone(e.target.value);
  };

  const filteredtodaytaskHistoryData = todaytaskHistoryData.filter((item) => {
    // Step 3
    return (
      item.Sno.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Name.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.UserId.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Image.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.MobileNumber.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Email.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.ProjectEarningamount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.AmountReceived.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.TotalEarningamount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.RefarralEarningamount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.TaskWalletAmount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.TotalEarningamount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.TotalWithdrawal.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.WithdrawableAmount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Addbonus.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTermone.toLowerCase())
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

  const sortByMobileNumberone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.MobileNumber.localeCompare(b.MobileNumber);
      } else {
        return b.MobileNumber.localeCompare(a.MobileNumber);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByImageone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Image.localeCompare(b.Image);
      } else {
        return b.Image.localeCompare(a.Image);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortBySno = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
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

  const sortByEmailone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Email.localeCompare(b.Email);
      } else {
        return b.Email.localeCompare(a.Email);
      }
    });
    settodayTaskHistoryData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortByRefferalnameone = () => {
    const sortedData = [...todaytaskHistoryData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Refferalname.localeCompare(b.Refferalname);
      } else {
        return b.Refferalname.localeCompare(a.Refferalname);
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
              All Income
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
            <div className="dailytasktable dailytasktable-1">
              <Table id="myTable" className="myTable-19">
                <thead>
                  <tr>
                    <th onClick={sortBySno}>
                      S.No.
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortBySno}>
                      Name
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByUserIdone}>
                      User Id
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByImageone}>
                      Image
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByMobileNumberone}>
                      Mobile Number
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>

                    <th onClick={sortByEmailone}>
                      Email ID
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Project Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Project Amount Received
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Earning Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Referral Earning Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Task Wallet Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Earning
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Withdrawal
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Withdrawal Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Bonus / Deduct Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    {/* <th onClick={sortByEmailone}>
                      Task Reward Bonus
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Refund Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Remaining Amount
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Withdrawl
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Project Referral Income
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Level Income
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Total Income
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                    <th onClick={sortByEmailone}>
                      Joining Date
                      <FaSort style={{ color: "#BABABA" }} />
                    </th> */}
                    <th onClick={sortByEmailone}>
                      Status
                      <FaSort style={{ color: "#BABABA" }} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredtodaytaskHistoryData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Sno}</td>
                      <td>{item.Name}</td>
                      <td>{item.UserId}</td>
                      <td>{item.Image}</td>
                      <td>{item.MobileNumber}</td>
                      <td>{item.Email}</td>
                      <td>{item.Totalprojectamount}</td>
                      <td>{item.AmountReceived}</td>
                      <td>{item.ProjectEarningamount}</td>
                      <td>{item.RefarralEarningamount}</td>
                      <td>{item.TaskWalletAmount}</td>
                      <td>{item.TotalEarningamount}</td>
                      <td>{item.TotalWithdrawal}</td>
                      <td>{item.WithdrawableAmount}</td>
                      <td>{item.Addbonus}</td>
                      <td>{item.status}</td>
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

export default UsersCardssContain;
