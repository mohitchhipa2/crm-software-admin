import React, { Fragment, useContext, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Media,
  Row,
  Table,
} from "reactstrap";
import { MarkJecno, MARKJENCOEMAIL } from "../../../Constant";
import NavTab from "./NavTab";
import { Link } from "react-router-dom";
import Img from "../../../assets/images/user/user.png";
import { Image, P, H6, Btn, Breadcrumbs } from "../../../AbstractElements";
import BookmarksTabs from "./BookmarksTabs";
import CustomizerContext from "../../../_helper/Customizer";
import "./withdraw.css";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { FaSort } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { SiMoneygram } from "react-icons/si";

const BookmarksContain = () => {
  const { layoutURL } = useContext(CustomizerContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showOTP, setShowOTP] = useState(false); // State to manage OTP visibility
  const [upiId, setUpiId] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const withdrawdata = [
    {
      SNo: "1",
      UserName: "JohnDoe123",
      UserID: "JD9876",
      Detail: "Purchase of Electronics",
      Amount: "120.50",
      WalletAddress: "0x3a7Cf21F45",
      Status: "Pending",
      Date: "2024-02-17",
      Time: "10:15:32"
    },
    {
      SNo: "2",
      UserName: "AliceSmith789",
      UserID: "AS5432",
      Detail: "Payment for Services",
      Amount: "75.20",
      WalletAddress: "0xF23bE6a7D",
      Status: "Completed",
      Date: "2024-02-17",
      Time: "11:45:28"
    },
    {
      SNo: "3",
      UserName: "BobJohnson456",
      UserID: "BJ1234",
      Detail: "Online Shopping",
      Amount: "45.70",
      WalletAddress: "0x8c7Aa2D4",
      Status: "Failed",
      Date: "2024-02-17",
      Time: "13:20:17"
    }
  ];

  const withdraw = () => {
    // Check if withdrawal amount and UPI ID are provided
    if (withdrawAmount.trim() === "" || upiId.trim() === "") {
      toast.error("Please enter the withdrawal amount ");
      return;
    }
    // Proceed with withdrawal
    toast.success("Withdraw Successful");
  };

  const [searchTermone, setSearchTermone] = useState(""); // Step 1
  const handleSearchChangeone = (e) => {
    setSearchTermone(e.target.value);
  };

  const filteredwithdrawdata = withdrawdata.filter((item) => {
    // Step 3
    return (
      item.SNo.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.UserName.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.UserID.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Detail.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Amount.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.WalletAddress.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Status.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Time.toLowerCase().includes(searchTermone.toLowerCase()) ||
      item.Date.toLowerCase().includes(searchTermone.toLowerCase())
    );
  });

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

  const handlePrintone = () => {
    window.print();
  };

  const handleOTPButtonClick = () => {
    // Show OTP section when OTP button is clicked
    setShowOTP(true);
  };

  const handleValidateButtonClick = () => {
    setShowOTP(false); // Hide the OTP section when "Validate" button is clicked
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Withdraw" parent="Apps" title="Withdraw" />
      <Container fluid={true}>


        <div >
          <h3 style={{ color: "#7366FF" }}>Withdraw Requests</h3>
          <div className="withdrawtablebutton">
            <div>
              <Input
                className="searchdaily"
                type="text"
                placeholder="Search..."
                value={searchTermone}
                onChange={handleSearchChangeone}
                style={{
                  height: "35px",
                  width: "380px",
                }}
              />
            </div>
            <div className="tableworkbuttondaily">
              <Button color="primary" onClick={copyTableone}>
                Copy
              </Button>
              <Button color="primary" onClick={downloadTableAsCSVone}>
                CSV
              </Button>
              <Button color="primary" onClick={downloadTableAsCSVone}>
                Excel
              </Button>
              <Button color="primary" onClick={handlePrintone}>
                Print
              </Button>
            </div>
          </div>
          <div className="dailytasktable" >
            <Table id="myTableone" className="table-main">
              <thead>
                <tr>
                  <th>
                    Sno.
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    UserName
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    User ID
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Details
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Amount
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Wallet Address
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Status
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Date
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Time
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                  <th>
                    Action
                    <FaSort style={{ color: "#BABABA" }} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredwithdrawdata.map((item, index) => (
                  <tr key={index}>
                    <td>{item.SNo}</td>
                    <td>{item.UserName}</td>
                    <td>{item.UserID}</td>
                    <td>{item.Detail}</td>
                    <td>{item.Amount}</td>
                    <td>{item.WalletAddress}</td>

                    <td
                      style={{
                        color: item.Status === "Complete" ? "blue" : "red",
                      }}
                    >
                      {item.Status}
                    </td>
                    <td>{item.Date}</td>
                    <td>{item.Time}</td>
                    <td>
                      {" "}
                      <RxCross2
                        title="Rejected"
                        style={{
                          color: "red",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      />
                      <FaCheck
                        title="Accepted"
                        style={{
                          color: "green",
                          fontSize: "20px",
                          paddingLeft: "5px",
                          cursor: "pointer",
                        }}
                      />
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
        </div>
      </Container>
    </Fragment>
  );
};
export default BookmarksContain;
