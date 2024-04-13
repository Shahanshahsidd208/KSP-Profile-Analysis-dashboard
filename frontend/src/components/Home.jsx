import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faQuestion,
  faUser,
  faRobot,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home({ language }) {
  const [loginType, setLoginType] = useState("profile");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedYear, setSelectedYear] = useState("2023"); // Default selected year
  const [isLoading, setIsLoading] = useState(false); // State for loading state of the login button

  const [error, setError] = useState("");

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );
  const navigate = useNavigate();

  //chatbot
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State for chatbot visibility
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null); // State to track selected question index
  const [feedback, setFeedback] = useState([]); // State to store feedback
  const [isChatbotLoading, setIsChatbotLoading] = useState(false);
  const [chatbotQuestions, setChatbotQuestions] = useState([
    {
      question:
        "How do I select between Profile Analysis and Data & Resource Management?",
      answer:
        "You can select between Profile Analysis and Data & Resource Management by clicking on the respective buttons.",
      thumbsUpCount: 0,
      thumbsDownCount: 0,
    },
    {
      question: "How do I choose the performance analysis year?",

      answer:
        "You can choose the performance analysis year from the dropdown menu.",
      thumbsUpCount: 0,
      thumbsDownCount: 0,
    },
    {
      question: "How do I login?",
      answer:
        'Enter your credentials in the respective fields and click the "Login" button.',
      thumbsUpCount: 0,
      thumbsDownCount: 0,
    },
    {
      question: "What happens after I login?",
      answer:
        "Once logged in, you can see your performance in Dashboard form and download the report of your performance.",
      thumbsUpCount: 0,
      thumbsDownCount: 0,
    },
    {
      question:
        "How do I navigate between analysis and resource management pages?",
      answer:
        "You can navigate seamlessly between analysis and resource management pages for comprehensive insights.",
      thumbsUpCount: 0,
      thumbsDownCount: 0,
    },
    {
      question: "How can I improve data accuracy in performance analysis?",
      answer:
        "To improve data accuracy, ensure that all data inputs are verified and validated regularly.",
      thumbsUpCount: 0,
      thumbsDownCount: 0,
    },
    {
      question:
        "What tools are available for data visualization in performance analysis?",
      answer:
        "Various tools such as charts, graphs, and dashboards are available for data visualization in performance analysis.",
      thumbsUpCount: 0,
      thumbsDownCount: 0,
    },
    {
      question: "How often should I review performance analysis data?",
      answer:
        "It is recommended to review performance analysis data regularly, preferably on a weekly or monthly basis, to identify trends and make timely decisions.",
      thumbsUpCount: 0,
      thumbsDownCount: 0,
    },
    {
      question:
        "What are the key metrics to track in police performance analysis?",
      answer:
        "Key metrics to track in police performance analysis may include response time, crime rates, clearance rates, and officer productivity.",
      thumbsUpCount: 0,
      thumbsDownCount: 0,
    },
    {
      question:
        "How can I ensure data security in police performance analysis?",
      answer:
        "To ensure data security, use encryption methods, implement access controls, and regularly update security protocols to protect sensitive information.",
      thumbsUpCount: 0,
      thumbsDownCount: 0,
    },
  ]);

  // Function to handle toggling feedback
  const handleFeedback = (index, isPositive) => {
    setChatbotQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      if (isPositive) {
        updatedQuestions[index].thumbsUpCount++;
      } else {
        updatedQuestions[index].thumbsDownCount++;
      }
      return updatedQuestions;
    });
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  // Function to handle question click and show loading animation
  const handleQuestionClick = (index) => {
    setIsChatbotLoading(true); // Set loading state to true
    setSelectedQuestionIndex(index);
    // Simulate loading delay with setTimeout
    setTimeout(() => {
      setIsChatbotLoading(false); // Reset loading state after 1 second
    }, 1500);
  };

  //chatbot end

  const handleProfileClick = () => {
    setLoginType("profile");
  };

  const handleDataClick = () => {
    setLoginType("data");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    if (email.length > 0 && password.length > 0) {
      const formData = {
        email,
        password,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/login",
          formData
        );
        localStorage.setItem("auth", JSON.stringify(response.data.token));
        toast.success("Login successfull");
        navigate("/dashboard");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  const toggleHelp = () => {
    setIsHelpOpen(!isHelpOpen);
  };

  useEffect(() => {
    if (token !== "") {
      toast.success("You already logged in");
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      {/* Heading */}
      <div className="bg-red-950 py-4 text-white text-center">
        <h1 className="text-3xl font-bold">
        {language === "english"
            ? "Police Performance and Resource Management"
            : "ಪೊಲೀಸ್ ಪರಿಣಾಮ ಮತ್ತು ಸಂಪನ್ಮೂಲ ನಿರ್ವಹಣೆ"}
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center h-screen bg-orange-100 p-20 relative z-10">
        {/* Chatbot Button */}
        <button
          className="absolute top-0 right-0 mr-4 flex items-center mt-5 bg-red-950 text-orange-100 py-2 px-3 rounded-lg focus:outline-none z-20 hover:text-orange-200"
          onClick={toggleChatbot}
        >
          <span>{language === "english" ? "Chatbot" : "ಚಾಟ್‌ಬಾಟ್"}</span>
          <FontAwesomeIcon icon={faRobot} className="ml-2" />
        </button>
        {/* Chatbot Popup */}
        {isChatbotOpen && (
          <div
            className="absolute top-0 right-0 mt-20 transition-transform duration-300 bg-red-950 p-4 rounded-lg shadow-md h-auto w-80 z-50 overflow-y-auto"
            style={{ maxHeight: "60vh", width: "27%" }}
          >
            <div className="flex flex-col">
              {chatbotQuestions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleQuestionClick(index)}
                  className={`bg-orange-100 rounded-lg p-3 shadow-md mb-2 cursor-pointer relative ${
                    selectedQuestionIndex === index ? "bg-gray-400" : ""
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-red-950 text-xl absolute top-0 right-0 mt-1 mr-1"
                  />
                  <p className="ml-2 text-lg text-red-950">{item.question}</p>
                  {selectedQuestionIndex === index && (
                    <div className="flex flex-row mt-2 items-end">
                      {isChatbotLoading ? (
                        <FontAwesomeIcon
                          icon={faSpinner}
                          className="text-gray-500 animate-spin mr-2"
                        />
                      ) : (
                        <img
                          src="chatbot.png"
                          alt="chatbot"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                      )}
                      <div className="bg-orange-200 rounded-lg p-3 shadow-md">
                        <p className="text-red-950">{item.answer}</p>
                        <div className="flex justify-between mt-2">
                          {/* Thumbs up icon with count */}
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faThumbsUp}
                              className="text-green-500 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFeedback(index, true);
                              }}
                            />
                            <span className="ml-1">{item.thumbsUpCount}</span>
                          </div>
                          {/* Thumbs down icon with count */}
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={faThumbsDown}
                              className="text-red-500 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFeedback(index, false);
                              }}
                            />
                            <span className="ml-1">{item.thumbsDownCount}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          Chatbot - {new Date().toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Year Dropdown */}
        <div className="absolute top-0 left-0 mt-4 ml-4 z-10 pl-5">
          <label className="font-bold text-xl text-red-900">
          {language === "english" ? "Choose Year: " : "ವರ್ಷವನ್ನು ಆರಿಸಿ: "} <span></span>
          </label>
          <select
            className="bg-red-950 text-white rounded px-4 py-2 focus:outline-none "
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2023">
              {language === "english" ? "2023" : "೨೦೨೩"}
            </option>
            <option value="2022">
              {language === "english" ? "2022" : "೨೦೨೨"}
            </option>
            <option value="2021">
              {language === "english" ? "2021" : "೨೦೨೧"}
            </option>
            <option value="2020">
              {language === "english" ? "2020" : "೨೦೨೦"}
            </option>
            <option value="2019">
              {language === "english" ? "2019" : "೨೦೧೯"}
            </option>
            <option value="2018">
              {language === "english" ? "2018" : "೨೦೧೮"}
            </option>
            <option value="2017">
              {language === "english" ? "2017" : "೨೦೧೭"}
            </option>
            <option value="2016">
              {language === "english" ? "2016" : "೨೦೧೬"}
            </option>
            {/* Add more years as needed */}
          </select>
        </div>
        {/* Background Image */}
        <div className="absolute inset-0  bg-opacity-20">
          <img
            className="absolute inset-0 w-full h-full  opacity-50"
            src="logoksp.png"
            alt="Background"
          />
        </div>
        {/* Combined Login Form */}
        <div className="w-full sm:w-1/2 mx-16 mb-4 rounded-t relative">
          {/* Buttons for Profile and Data */}
          <div className="flex justify-center w-full rounded-t">
            <button
              className={`w-1/2 rounded-t py-2 px-4 focus:outline-none ${
                loginType === "profile"
                  ? "bg-red-900 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={handleProfileClick}
            >
             {language === "english"
                ? "Profile Analysis"
                : "ಪ್ರೊಫೈಲ್ ವಿಶ್ಲೇಷಣೆ"}
            </button>
            <button
              className={`w-1/2 py-2 px-4 rounded-t focus:outline-none ${
                loginType === "data"
                  ? "bg-red-900 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={handleDataClick}
            >
              {language === "english"
                ? "Data And Resource Management"
                : "ಡೇಟಾ ಮತ್ತು ಸಂಸಾಧನ ನಿರ್ವಹಣೆ"}
            </button>
          </div>
          {/* Login Form */}
          <form
            onSubmit={handleLoginSubmit}
            className="bg-red-900 shadow-md rounded-b px-8 pt-6 pb-8 relative z-10"
          >
            <h2 className="text-white text-2xl mb-1 text-center">
            {loginType === "profile"
                ? language === "english"
                  ? "Performance Analysis"
                  : "ಪ್ರದರ್ಶನ ವಿಶ್ಲೇಷಣೆ"
                : language === "english"
                ? "Data & Resource Management"
                : "ಡೇಟಾ ಮತ್ತು ಸಂಸಾಧನ ನಿರ್ವಹಣೆ"}
            </h2>
            <h6 className="text-orange-100 text-l mb-10 text-center">
            {language === "english"
                ? "Enter your credentials to access your account"
                : "ನಿಮ್ಮ ಖಾತೆಗೆ ಪ್ರವೇಶಿಸಲು ನಿಮ್ಮ ಶ್ರೇಣಿಗಳನ್ನು ನಮೂದಿಸಿ"}
            </h6>
            <div className="mb-4">
              <label className="text-white text-l mb-1"> {language === "english" ? "User ID:" : "ಬಳಕೆದಾರ ಐಡಿ:"}</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                id="usernamePerf"
                type="text"
                name="email"
                placeholder={
                  language === "english" ? "Username" : "ಬಳಕೆದಾರ ಹೆಸರು"
                }
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <label className="text-white text-l mb-1">{language === "english" ? "Password:" : "ಪಾಸ್‌ವರ್ಡ್:"}</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                id="passwordPerf"
                type="password"
                name="password"
                placeholder={language === "english" ? "Password" : "ಪಾಸ್‌ವರ್ಡ್"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-orange-100 hover:text-red-950 text-red-800 font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading} // Disable the button when loading
              >
                {isLoading ? ( // Display spinner if loading, otherwise display "Login"
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="animate-spin mr-2"
                  />
                ) : language === "english" ? (
                  "Login"
                ) : (
                  "ಲಾಗಿನ್"
                )}
              </button>
              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
