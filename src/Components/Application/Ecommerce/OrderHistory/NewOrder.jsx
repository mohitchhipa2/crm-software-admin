import React, { useRef, useState } from "react";
import { Button, Col, Input, ModalBody, Row, Table, Modal, ModalFooter } from "reactstrap";
// import "./ProjectDeatils.css";

import { FaInstagram, FaRegCopy, FaSort } from "react-icons/fa";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { GrView } from "react-icons/gr";
const NewOrderClass = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [projectlistData, setTaskHistoryData] = useState([
    {
      SNo: "1",
      Username: "JohnDoe123",
      UserID: "JD9876",
      PanNumber: "ABCDE1234F",
      AadharNumber: "1234 5678 9012",
      Status: "pending",
      Date: "2024-02-17",
      Time: "09:30:00"
    },
    {
      SNo: "2",
      Username: "AliceSmith789",
      UserID: "AS5432",
      PanNumber: "FGHIJ5678K",
      AadharNumber: "9876 5432 1098",
      Status: "approved",
      Date: "2024-02-17",
      Time: "11:45:00"
    },
    {
      SNo: 3,
      Username: "BobJohnson456",
      UserID: "BJ1234",
      PanNumber: "LMNOP9012L",
      AadharNumber: "6543 2109 8765",
      Status: "rejected",
      Date: "2024-02-17",
      Time: "13:20:00"
    }
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

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredprojectlistData = projectlistData.filter((item) => {
    // Step 3
    return (item.SNo === parseInt(searchTerm) ||
      item.Username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.UserID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.PanNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.AadharNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.Status && item.Status.toLowerCase().includes(searchTerm.toLowerCase())) ||
      item.Date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Time.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const sortByUserNameone = () => {
    const sortedData = [...projectlistData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.SNo.toString().localeCompare(b.SNo.toString());
      } else {
        return b.SNo.toString().localeCompare(a.SNo.toString());
      }
    });
    setTaskHistoryData(sortedData);
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

  const [pdfFiles, setPdfFiles] = useState([]);

  // Function to handle PDF file upload
  const handlePdfUpload = (event) => {
    const files = event.target.files;
    setPdfFiles([...pdfFiles, ...files]);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handlleview = () => {
    setModalOpen(true)
  }
  return (
    <>
      <div className="w-full md:w-72">
        <select
          style={{
            border: "1px solid #DEE2E6",
            height: "38px",
            borderRadius: "5px",
          }}
          className="mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 "
        >
          <option value="">Select</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <h3 style={{ color: "#7366FF", marginTop: "20px" }}>KYC Approval</h3>
      <div style={{ display: "flex" }} className="tableworkbutton">
        <div>
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

      <div style={{ overflowX: "auto" }}>
        <Table className="projectdeatilstable" id="myTable">
          <thead>
            <tr>
              <th onClick={sortByUserNameone}>
                S.No.
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                User Name
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                User ID
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Pan Number
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Aadhar Number
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Status
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Date
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Time
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredprojectlistData.map((item, index) => (
              <tr key={index}>
                <td>{item.SNo}</td>
                <td>{item.Username}</td>
                <td>{item.UserID}</td>
                <td>{item.PanNumber}</td>
                <td>{item.AadharNumber}</td>
                <td>{item.Status}</td>
                <td>{item.Date}</td>
                <td>{item.Time}</td>
                <td>
                  <GrView style={{ cursor: "pointer" }} onClick={handlleview} />
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
      <Modal style={{ width: "335px" }} isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalBody>
          <p>Pan Card</p>
          <img style={{ width: "300px", height: "200px" }} src="https://www.informalnewz.com/wp-content/uploads/2023/07/Pan-Card-Update-1200x900.jpg" alt="" />
        </ModalBody>
        <ModalBody>
          <p>Aadhar Card</p>
          <img style={{ width: "300px", height: "200px" }} src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/untitled_design_90-sixteen_nine.jpg" alt="" />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModalOpen(!modalOpen)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default NewOrderClass;
