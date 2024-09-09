import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faFileDownload,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  Legend,
} from "recharts";
import html2canvas from "html2canvas";
import { useRef } from "react";
import axios from "axios";
import domtoimage from "dom-to-image";
import { toast } from "react-toastify";
import {
  faClock,
  faGavel,
  faSearch,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );
  const [searchQuery, setSearchQuery] = useState("");

  const [error, setError] = useState(null);
  const [email1, setEmail] = useState(""); // Define email state

  const [data, setData] = useState({});
  const dashboardRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false); // state to control notification visibility
  const [notificationSliderVisible, setNotificationSliderVisible] =
    useState(false); // state to control notification slider visibility
  const [pendingCasesCount, setPendingCasesCount] = useState(0); // state to hold the number of pending cases
  const userRole = "DySP"; // example user role, replace it with actual role logic
  const [firNo, setFirNo] = useState("");

  const [searchResult, setSearchResult] = useState(null);
  const [listResult, setListResult] = useState([]);


  useEffect(() => {
    disData();
    // handleList();
    if (token === "") {
      navigate("/login");
      toast.warn("Please login first to access dashboard");
    }
    // Calculate the number of pending cases
    const pendingCases = recentList.filter(
      (item) => item.firStage === "Pending Trial"
    );
    setPendingCasesCount(pendingCases.length);
    
  }, [token, searchResult]); // This effect runs only once after the initial render

  
  // Log the listResult whenever it changes
  useEffect(() => {
    console.log("List Result:", listResult);
  }, [listResult]);

  const handleDownload = () => {
    html2canvas(dashboardRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "dashboard.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  const clearSearch = () => {
    setFirNo("");
    setSearchResult(null);
  };

// Inside the handleSearch function



  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/search?firNo=${firNo}`
      );
      setSearchResult(response.data);
      
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleLogout = () => {
    window.location.href = "/logout"; // Redirect to the home page
  };

  //display data
  const disData = async () => {
    let axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/dashboard",
        axiosConfig
      );
      // console.log("Response from API:", response.data);
      setData({
        msg: response.data.msg,
        luckyNumber: response.data.secret,
        unitName: response.data.unitName,
        unitId: response.data.unitId,
        districtName: response.data.districtName,
        firNo: response.data.firNo,
        year: response.data.year,
        month: response.data.month,
        firDate: response.data.firDate,
        firType: response.data.firType,
        firStage: response.data.firStage,
        crimeGroupName: response.data.crimeGroupName,
        ioName: response.data.ioName,
        firId: response.data.firId,
        designation: response.data.designation,
        policeId: response.data.policeId,
        policePassword: response.data.policePassword,
        underOfficer: response.data.underOfficer,
        topCase1: response.data.topCase1,
        topCase2: response.data.topCase2,
        topCase3: response.data.topCase3,
        topCase1no: response.data.topCase1no,
        topCase2no: response.data.topCase2no,
        topCase3no: response.data.topCase3no,
        others: response.data.others,
        pendingTrial: response.data.pendingTrial,
        underInvestigation: response.data.underInvestigation,
        convicted: response.data.convicted,
        undetected: response.data.undetected,
        username: response.data.username,
        email: response.data.email,
        password: response.data.password,
        jan: response.data.jan,
        feb: response.data.feb,
        march: response.data.march,
        april: response.data.april,
        may: response.data.may,
        jun: response.data.jun,
        jul: response.data.jul,
        aug: response.data.aug,
        sep: response.data.sep,
        oct: response.data.oct,
        nov: response.data.nov,
        dec: response.data.dec,
      });
      setEmail(response.data.email);
      // console.log("Data:", response.data);
      
    } catch (error) {
      toast.error(error.message);
    }finally{
     await handleList();
    }
  };

  const handleNotification = () => {
    if (notificationSliderVisible === false) {
      setShowNotification(true);
      setNotificationSliderVisible(true);
    } else {
      setShowNotification(false);
      setNotificationSliderVisible(false);
    }
  };

  // Dummy data for the user information
  const userInfo = {
    username: data.msg,
    unitName: data.unitName,
    unitId: data.unitId,
    designation: data.designation,
    district: data.districtName,
    email1: data.email,
  };
// use this for debugging
  // console.log("User Info:", userInfo.email1);




  const handleList = async () => {
    try {
      // Check if data.email is defined before using it in the URL
      if (userInfo.email1) {
        const response = await axios.get(
          `http://localhost:3000/api/v1/search2?email=${userInfo.email1}`
        );
        setListResult(response.data);
        // console.log("List Result:", listResult); // Log the search result instead of displaying it
      } else {
        console.error("Email is undefined");
      }
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  if(!listResult.length){
    disData();
    handleList();
  }
  

  // Update the boxData array with appropriate icons
  const boxData = [
    {
      title: "Pending",
      value: data.pendingTrial,
      change: "+10%",
      icon: faClock,
    },
    {
      title: "Convicted",
      value: data.convicted,
      change: " -5% ",
      icon: faGavel,
    },
    {
      title: "Investigation",
      value: data.underInvestigation,
      change: "+15% ",
      icon: faSearch,
    },
    {
      title: "Undetected",
      value: data.undetected,
      change: "-8%",
      icon: faExclamation,
    },
  ];

  // Dummy data for the line chart
  const lineChartData = [
    { month: "Jan", cases: parseInt(data.jan) },
    { month: "Feb", cases: parseInt(data.feb) },
    { month: "Mar", cases: parseInt(data.march) },
    { month: "Apr", cases: parseInt(data.april) },
    { month: "May", cases: parseInt(data.may) },
    { month: "Jun", cases: parseInt(data.jun) },
    { month: "Jul", cases: parseInt(data.jul) },
    { month: "Aug", cases: parseInt(data.aug) },
    { month: "Sep", cases: parseInt(data.sep) },
    { month: "Oct", cases: parseInt(data.oct) },
    { month: "Nov", cases: parseInt(data.nov) },
    { month: "Dec", cases: parseInt(data.dec) },
  ];


  // Accumulate cases month by month
  const accumulatedData = lineChartData.map((entry, index) => {
    const accumulatedCases = lineChartData
      .slice(0, index + 1)
      .reduce((acc, curr) => acc + curr.cases, 0);
    return { ...entry, accumulatedCases };
  });

  // Dummy data for the pie chart
  const pieData = [
    { name: data.topCase1, value: parseInt(data.topCase1no) },
    { name: data.topCase2, value: parseInt(data.topCase2no) },
    { name: data.topCase3, value: parseInt(data.topCase3no) },
    { name: "Others", value: parseInt(data.others) }, // You can keep this as it is if it's a constant value
  ];

  // Dummy data for the dropdown options just for checking
  const piOptions = ["PI 1", "PI 2", "PI 3"];

  // Colors for the pie chart
  const COLORS = ["#4c0519", "#1d4ed8", "#15803d", "#86198f", "#c2410c"];

  // Dummy data for the recent cases list
  const defaultRecentList = Array.from({ length: 7 }, (_, index) => ({
    snNumber: index + 1,
    firId: "",
    firStage: "",
    firDate: "",
    firCrimeType: "",
  }));
  
  const recentList = defaultRecentList.map((item, index) => ({
    ...item,
    firId: listResult[index]?.firNo || item.firId,
    firStage: listResult[index]?.firStage || item.firStage,
    firDate: listResult[index]?.firDate || item.firDate,
    firCrimeType: listResult[index]?.crimeGroupName || item.firCrimeType,
  }));

  return (
    <div ref={dashboardRef} className="flex h-screen">
      {/* Sidebar */}

      <div className="bg-red-950 w-1/6 p-2">
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Profile Logo and Username */}
            <div className="flex mb-4 text-red-500 text-xl">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-2xl" />
              <div>{userInfo.username}</div>
            </div>
            {/* Unit Information */}
            <div className="text-orange-100 mb-4">
              <div>Unit Name: {userInfo.unitName}</div>
              <br />
              <div>Unit ID: {userInfo.unitId}</div>
              <br />
              <div>Designation: {userInfo.designation}</div>
              <br />
              <div>District: {userInfo.district}</div>
              <br />
              {/* Notification Icon */}
              <div className="flex items-center justify-start mt-auto cursor-pointer text-orange-100 hover:text-orange-200">
                <button className="flex " onClick={handleNotification}>
                  <FontAwesomeIcon icon={faBell} className="text-xl mr-3" />
                  Notification{" "}
                  <h3 className="text-red-500 ml-2 font-bold text-xl">
                    {pendingCasesCount}
                  </h3>
                </button>
                {showNotification && (
                  <div
                    className={`absolute top-10 text-orange-100 left-60 ml-8 items-center mt-0 p-10 transition-transform duration-600 ease-linear shadow-2xl shadow-red-950 ${
                      notificationSliderVisible
                        ? "translate-y-0"
                        : "translate-y-1/2"
                    }`}
                    style={{
                      width: "50%",
                      maxWidth: "600px",
                      height: "20%",
                      backgroundColor: "#450a0a",
                      zIndex: "30",
                    }}
                  >
                    <h1 className="text-2xl">Your Notification:</h1>
                    {pendingCasesCount > 0 ? (
                      <p>
                        {pendingCasesCount} pending cases. Check the Recent
                        Cases section for details.
                      </p>
                    ) : (
                      <p>No pending cases.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
            {/* Render dropdown if the role is DySP */}
            {data.designation === "Dy.SP" && (
              <div className="mt-2">
                <select className="text-gray-900 border border-gray-300 rounded px-1 py-1 w-full bg-orange-100">
                  <option value="" disabled selected>
                    PI under DySP
                  </option>
                  {piOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {/* add search here */}
            <div className="mt-4 flex items-center ">
              <input
                type="text"
                value={firNo}
                onChange={(e) => setFirNo(e.target.value)}
                className="border border-gray-700 bg-orange-100 rounded-md py-2 px-1 focus:outline-none focus:border-red-500"
                placeholder="Enter FIR ID"
              />
              <FontAwesomeIcon
                icon={faSearch}
                onClick={handleSearch}
                className="px-1 py-2 text-2xl bg-red-950 font-bold  text-orange-100 hover:text-orange-200 rounded-r cursor-pointer"
              />
            </div>

            {/* change this / search result */}
            {searchResult && (
                            <div className={` absolute  bottom-28 left-0 border-4 border-red-900 rounded   shadow-2xl shadow-red-600/50 ${searchResult> 0 ? 'translate-x-0' : 'translate-x-1/12'}`} style={{ width: '76%', height: '19%', backgroundColor: '#450a0a',zIndex: '55' }}>
                                <div className="flex items-center justify-between bg-red-950 text-red-950 px-3 py-1 ">
                                    <div className='text-xl font-bold text-orange-100' >Search Results:</div>
                                    <button onClick={clearSearch} className='text-orange-100 text-xl font-bold hover:text-orange-200'>X</button>
                                </div>
                                <div className="mt-0">
                                    <table className="table-auto w-full ">
                                        <thead>
                                            <tr className="bg-orange-200 text-red-950 text-lg text-center justify-between">
                                                <th >FIR ID</th>
                                                <th >District Name</th>
                                                <th >Unit Name</th>
                                                <th >FIR Date</th>
                                                <th >FIR Stage</th>
                                                <th >CrimeGroup Name</th>
                                                {/* <th >Unit ID</th> */}
                                            </tr>
                                        </thead>
                                        <tbody className='text-center justify-between text-lg'>
                                            
                                                <tr className="bg-gray-200">
                                                    <td >{searchResult.firNo}</td>
                                                    <td >{searchResult.districtName}</td>
                                                    <td >{searchResult.unitName}</td>
                                                    <td >{searchResult.firDate}</td>
                                                    <td >{searchResult.firStage}</td>
                                                    <td >{searchResult.crimeGroupName}</td>
                                                    {/* <td >{result.Unit_ID}</td> */}
                                                </tr>
                                         
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

            {/* till here */}
          </div>
          {/* Logout and Download Report Buttons */}
          <div className="flex">
            <button
              onClick={handleLogout}
              className="text-red-100 px-4 py-2 rounded mb-2 hover:text-orange-200"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              LogouT
            </button>
            <button
              onClick={handleDownload}
              className="text-orange-100 px-4 py-2 rounded hover:text-oraange-200"
            >
              <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
              Report
            </button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-2 flex flex-col bg-orange-100 text-red-800 ">
        <div className="flex mb-4">
          <div className="flex flex-row gap-1 justify-between items-end w-full">
            {/* Render boxes */}
            {boxData.map((box, index) => (
              <div
                key={index}
                className="bg-red-950 px-1 py-1 mb-4 pr-2 rounded-md mr-1 ml-1 w-32 h-1/2 font-bold shadow-xl shadow-red-900 text-orange-100"
              >
                {/* Render the icon */}
                <FontAwesomeIcon
                  icon={box.icon}
                  className="text-2xl mb-0 mt-2 ml-20 "
                />
                <div className="text-lg text-center text-orange-100 hover:text-orange-200 mb-4 mt-4">
                  {box.title}
                </div>
                {/* Separate smaller text for "Total" */}
                <div className="flex items-center justify-start mt-2">
                  <div className="text-sm mr-2">Total:</div>
                  <div className="text-sm text-red-500">{box.value}</div>
                </div>
                {/* Separate smaller text for "This Month" */}
                <div className="flex items-center justify-start mt-1">
                  <div className="text-xl text-green-500">{box.change}</div>
                  <div className="text-xs ">
                    <p className="text-xs ml-4"> this Month</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Second Division: Area Chart */}
          <div className="w-1/2 ml-8">
            <h2 className="text-center font-bold">
              Total Cases Growth Month Wise
            </h2>
            <AreaChart
              className="shadow-red-900 shadow-xl"
              width={600}
              height={300}
              data={accumulatedData}
            >
              <XAxis
                dataKey="month"
                label={{
                  value: "Months",
                  position: "insideBottom",
                }}
              />
              <YAxis
                label={{
                  value: "Total Cases",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="accumulatedCases"
                stroke="#A00D21"
                fillOpacity={1}
                fill="#450a0a"
              />
            </AreaChart>
          </div>
        </div>
        <div className="flex mt-1">
          {/* Third Division: Recent Cases List */}
          <div className="bg-orange-100 flex-1 mr-8 p-0 rounded-md shadow-red-900 shadow-xl ml-2">
            <table className="table-auto w-fit m-0 p-0">
              <thead className="bg-red-950 text-red-100">
                <tr>
                  <th className="p-1">SN Number</th>
                  <th className="p-1">FIR ID</th>
                  <th className="p-1">FIR Stage</th>
                  <th className="p-1">FIR Date</th>
                  <th className="p-1">FIR CrimeType</th>
                </tr>
              </thead>
              <tbody>
                {recentList.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-orange-100" : "bg-orange-200"
                    }
                  >
                    <td className="text-center  p-0 text-sm  ">{row.snNumber}</td>
                    <td className="text-center text-sm p-0">{row.firId}</td>
                    <td className="text-center text-sm p-0">{row.firStage}</td>
                    <td className="text-center text-sm p-0">{row.firDate}</td>
                    <td className="text-center text-sm p-0">{row.firCrimeType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2 className="text-center font-bold">Recent Cases of this IO</h2>
          </div>
          {/* Fourth Division: Pie Chart */}
          <div className="bg-orange-100 flex-1">
            <PieChart
              className="shadow-red-900 shadow-xl"
              width={550}
              height={350}
            >
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="60%"
                innerRadius={50}
                outerRadius={75}
                fill="#8884d8"
                label
                labelLine
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <text
                x={250}
                y={25}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold text-red-900"
              >
                Top Three Crime Group cases of this IO
              </text>
              <Legend align="center" verticalAlign="bottom" iconSize={5} />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
