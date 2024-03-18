import React, { useRef, useState } from "react";
import { Button, Col, Input, Row, Table } from "reactstrap";
import "./ProjectDeatils.css";
import { FaInstagram, FaRegCopy, FaSort } from "react-icons/fa";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
const RecentOrders = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [projectlistData, setTaskHistoryData] = useState([
    // Sample data, replace with your actual data
    {
      sno: "1",
      Userid: "6324",
      userName: 'mohit',
      socialplateform: 'Facebook',
      Socialplateformlink: "https:/mohitchhipa@facebook"
    },
    {
      sno: "2",
      Userid: "3246",
      userName: 'navratan',
      socialplateform: 'instagram',
      Socialplateformlink: "https:/Navratan@insta"
    },
    {
      sno: "3",
      Userid: "4243",
      userName: 'harsh',
      socialplateform: 'linkedin',
      Socialplateformlink: "https:/harsh@linkedin"
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

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredprojectlistData = projectlistData.filter((item) => {
    // Step 3
    return (
      // item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sno.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.projectid.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.projectname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.discription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.link.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.file.toLowerCase().includes(searchTerm.toLowerCase())
      // item.EditDelete.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortByUserNameone = () => {
    const sortedData = [...projectlistData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.sno.localeCompare(b.sno);
      } else {
        return b.sno.localeCompare(a.sno);
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

  const [go, setGo] = useState(false);
  const [show, setShow] = useState(false);

  const handlego = () => {
    setGo(!go)
    setShow(false);
  }

  const handleshow = () => {
    setShow(!show)
    setGo(false)
  }
  return (
    <>

      <div style={{ display: "flex" }} className="tableworkbutton">
        <div
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

      <div style={{ overflowX: "auto" }}>
        <Table className="projectdeatilstable-admin" id="myTable">
          <thead>
            <tr>
              <th onClick={sortByUserNameone}>
                S. No
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                User ID
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                User Name
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Social Plateform
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th onClick={sortByUserNameone}>
                Social Plateform Link
                <FaSort style={{ color: "#BABABA" }} />
              </th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredprojectlistData.map((item, index) => (
              <tr key={index}>
                <td>{item.sno}</td>
                <td>{item.Userid}</td>
                <td>{item.userName}</td>
                <td>{item.socialplateform}</td>
                <td>{item.Socialplateformlink}</td>
                <td><div style={{ display: "flex", gap: "5px" }}>
          <Button color="primary">Edit</Button>
          <Button>Delete</Button>
        </div></td>
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
    </>
  );
};

export default RecentOrders;



