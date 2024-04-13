import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";

function CombinedForm() {
  const [formData, setFormData] = useState({
    districtName: "",
    unitName: "",
    FIRNo: "",
    RI: "",
    Year: "",
    Month: "",
    Offence_From_Date: "",
    Offence_To_Date: "",
    FIR_Reg_DateTime: "",
    FIR_Date: "",
    firType: "",
    firStage: "",
    complaintMode: "",
    crimeGroupName: "",
    crimeHeadName: "",
    latitude: "",
    longitude: "",
    actSection: "",
    ioName: "",
    designation: "",
    kgId: "",
    internalIo: "",
    placeOfOffence: "",
    distanceFromPs: "",
    beatName: "",
    villageAreaName: "",
    male: "",
    female: "",
    boy: "",
    girl: "",
    age: "",
    victimCount: "",
    accusedCount: "",
    arrestedMale: "",
    arrestedFemale: "",
    arrestedCountNo: "",
    accusedChargesheetedCount: "",
    convictionCount: "",
    firId: "",
    unitId: "",
    crimeNo: "",
  });
  const [formType, setFormType] = useState("add"); // 'add' for adding new data, 'update' for updating existing data
  const [isLoading, setIsLoading] = useState(false);
  const [searchedFirId, setSearchedFirId] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const [isTickLoading, setIsTickLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFirIdNotFoundDialogOpen, setIsFirIdNotFoundDialogOpen] =
    useState(false);
  const [isAddSuccessModalOpen, setIsAddSuccessModalOpen] = useState(false);

  const handleFormTypeChange = (type) => {
    setFormType(type);
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setIsAddSuccessModalOpen(true);
      // Reset form data
      setFormData({
        districtName: "",
        unitName: "",
        FIRNo: "",
        RI: "",
        Year: "",
        Month: "",
        Offence_From_Date: "",
        Offence_To_Date: "",
        FIR_Reg_DateTime: "",
        FIR_Date: "",
        firType: "",
        firStage: "",
        complaintMode: "",
        crimeGroupName: "",
        crimeHeadName: "",
        latitude: "",
        longitude: "",
        actSection: "",
        ioName: "",
        designation: "",
        kgId: "",
        internalIo: "",
        placeOfOffence: "",
        distanceFromPs: "",
        beatName: "",
        villageAreaName: "",
        male: "",
        female: "",
        boy: "",
        girl: "",
        age: "",
        victimCount: "",
        accusedCount: "",
        arrestedMale: "",
        arrestedFemale: "",
        arrestedCountNo: "",
        accusedChargesheetedCount: "",
        convictionCount: "",
        firId: "",
        unitId: "",
        crimeNo: "",
      });
      // Show success message or handle response from API
    }, 2000);
  };

  const handleCloseAddSuccessModal = () => {
    setIsAddSuccessModalOpen(false);
  };

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const fakeSearchResult = { firId: "201600002" };
      setSearchResult(fakeSearchResult);
      setIsSearchPerformed(true); // Set to true after search is performed
      if (searchedFirId !== "201600002") {
        setSearchResult(null);
        setIsFirIdNotFoundDialogOpen(true); // Show the dialog box for FIR ID not found
      }
    }, 2000);
  };

  const handleFieldSelect = (field) => {
    setSelectedField(field);
  };

  const handleUpdate = () => {
    // Perform update logic here
    setIsTickLoading(true);
    setTimeout(() => {
      setIsTickLoading(false);
      // Reset form data and selected field after update
      setFormData({
        // Reset form data here
      });
      setSelectedField(null);
      // Show success message or handle response from API
      setIsDialogOpen(true);
    }, 2000);
  };

  const DialogBox = ({ isOpen, onClose }) => {
    return (
      <div className={`dialog-box ${isOpen ? "open" : "closed"}`}>
        <div className="dialog-content">
          <p>Data added successfully!</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

  const SuccessModal = () => {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  {/* Success Icon */}
                  <svg
                    className="h-6 w-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Data Updated Successfully
                  </h3>
                  {/* Success Message */}
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      The data has been updated successfully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={() => setIsDialogOpen(false)}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FirIdNotFoundModal = () => {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  {/* Error Icon */}
                  <svg
                    className="h-6 w-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    FIR ID Not Found
                  </h3>
                  {/* Error Message */}
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      The FIR ID provided was not found. Please check and try
                      again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={() => setIsFirIdNotFoundDialogOpen(false)}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AddSuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  {/* Success Icon */}
                  <svg
                    className="h-6 w-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Data Added Successfully
                  </h3>
                  {/* Success Message */}
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      The data has been added successfully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={onClose}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex bg-red-900 min-h-screen justify-center items-center">
      <div className="w-full mx-auto -lg shadow-lg overflow-hidden">
        <div className="flex">
          <button
            className={`w-1/2 py-4 focus:outline-none text-base sm:text-lg font-semibold transition-colors duration-300 ${
              formType === "add"
                ? "bg-orange-100 text-red-900"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleFormTypeChange("add")}
          >
            Add New Data
          </button>
          <button
            className={`w-1/2 py-4 focus:outline-none text-base sm:text-lg font-semibold transition-colors duration-300 ${
              formType === "update"
                ? "bg-orange-100 text-red-900"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleFormTypeChange("update")}
          >
            Update Existing Data
          </button>
        </div>

        {formType === "add" ? (
          <div className="bg-white p-4 sm:p-8">
            <h2 className="text-red-900 text-xl sm:text-2xl mb-6 text-center">
              Add New Data
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {/* District Name */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  District Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="District Name"
                  value={formData.districtName}
                  onChange={(e) =>
                    setFormData({ ...formData, districtName: e.target.value })
                  }
                  required
                />
              </div>

              {/* Unit Name */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Unit Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Unit Name"
                  value={formData.unitName}
                  onChange={(e) =>
                    setFormData({ ...formData, unitName: e.target.value })
                  }
                  required
                />
              </div>

              {/* FIR Number */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  FIR Number:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="FIR Number"
                  value={formData.FIRNo}
                  onChange={(e) =>
                    setFormData({ ...formData, FIRNo: e.target.value })
                  }
                  required
                />
              </div>

              {/* RI */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  RI:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="RI"
                  value={formData.RI}
                  onChange={(e) =>
                    setFormData({ ...formData, RI: e.target.value })
                  }
                  required
                />
              </div>

              {/* Year */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Year:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Year"
                  value={formData.Year}
                  onChange={(e) =>
                    setFormData({ ...formData, Year: e.target.value })
                  }
                  required
                />
              </div>

              {/* Month */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Month:
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.Month}
                  onChange={(e) =>
                    setFormData({ ...formData, Month: e.target.value })
                  }
                  required
                >
                  <option value="">Select Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>

              {/* Offence From Date */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Offence From Date:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Offence From Date"
                  value={formData.Offence_From_Date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      Offence_From_Date: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Offence To Date */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Offence To Date:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Offence To Date"
                  value={formData.Offence_To_Date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      Offence_To_Date: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* FIR Reg Date Time */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  FIR Reg Date Time:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="FIR Reg Date Time"
                  value={formData.FIR_Reg_DateTime}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      FIR_Reg_DateTime: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* FIR Date */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  FIR Date:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="FIR Date"
                  value={formData.FIR_Date}
                  onChange={(e) =>
                    setFormData({ ...formData, FIR_Date: e.target.value })
                  }
                  required
                />
              </div>

              {/* Repeat this structure for other fields */}

              {/* FIR Type */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  FIR Type:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="FIR Type"
                  value={formData.firType}
                  onChange={(e) =>
                    setFormData({ ...formData, firType: e.target.value })
                  }
                  required
                />
              </div>

              {/* Complaint Mode */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Complaint Mode:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Complaint Mode"
                  value={formData.complaintMode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      complaintMode: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* CrimeGroup Name */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  CrimeGroup Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="CrimeGroup Name"
                  value={formData.crimeGroupName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      crimeGroupName: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* CrimeHead Name */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  CrimeHead Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="CrimeHead Name"
                  value={formData.crimeHeadName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      crimeHeadName: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Latitude */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Latitude:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Latitude"
                  value={formData.latitude}
                  onChange={(e) =>
                    setFormData({ ...formData, latitude: e.target.value })
                  }
                  required
                />
              </div>

              {/* Longitude */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Longitude:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Longitude"
                  value={formData.longitude}
                  onChange={(e) =>
                    setFormData({ ...formData, longitude: e.target.value })
                  }
                  required
                />
              </div>

              {/* actSection */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Act Section:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Act section"
                  value={formData.actSection}
                  onChange={(e) =>
                    setFormData({ ...formData, actSection: e.target.value })
                  }
                  required
                />
              </div>

              {/* ioName */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  IO Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="IO Name"
                  value={formData.ioName}
                  onChange={(e) =>
                    setFormData({ ...formData, ioName: e.target.value })
                  }
                  required
                />
              </div>

              {/* designation */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Designation:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Designation"
                  value={formData.designation}
                  onChange={(e) =>
                    setFormData({ ...formData, designation: e.target.value })
                  }
                  required
                />
              </div>

              {/* kgId */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  KGID:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="KGID"
                  value={formData.kgId}
                  onChange={(e) =>
                    setFormData({ ...formData, kgId: e.target.value })
                  }
                  required
                />
              </div>

              {/* Internal IO */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Internal IO:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Internal IO"
                  value={formData.internalIo}
                  onChange={(e) =>
                    setFormData({ ...formData, internalIo: e.target.value })
                  }
                  required
                />
              </div>

              {/* Place of Offence */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Place of Offence:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Place of Offence"
                  value={formData.placeOfOffence}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      placeOfOffence: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Distance from PS */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Distance from PS:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Distance from PS"
                  value={formData.distanceFromPs}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      distanceFromPs: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Beat Name */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Beat Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Beat Name"
                  value={formData.beatName}
                  onChange={(e) =>
                    setFormData({ ...formData, beatName: e.target.value })
                  }
                  required
                />
              </div>

              {/* Village Area Name */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Village Area Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Village Area Name"
                  value={formData.villageAreaName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      villageAreaName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              {/* Male */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Male:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Male"
                  value={formData.male}
                  onChange={(e) =>
                    setFormData({ ...formData, male: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Female */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Female:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Female"
                  value={formData.female}
                  onChange={(e) =>
                    setFormData({ ...formData, female: e.target.value })
                  }
                  required
                />
              </div>

              {/* Boy */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Boy:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Boy"
                  value={formData.boy}
                  onChange={(e) =>
                    setFormData({ ...formData, boy: e.target.value })
                  }
                  required
                />
              </div>

              {/* Girl */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Girl:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Girl"
                  value={formData.girl}
                  onChange={(e) =>
                    setFormData({ ...formData, girl: e.target.value })
                  }
                  required
                />
              </div>

              {/* Age */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Age:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Age"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  required
                />
              </div>

              {/* Victim Count */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Victim Count:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Victim Count"
                  value={formData.victimCount}
                  onChange={(e) =>
                    setFormData({ ...formData, victimCount: e.target.value })
                  }
                  required
                />
              </div>

              {/* Accused Count */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Accused Count:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Accused Count"
                  value={formData.accusedCount}
                  onChange={(e) =>
                    setFormData({ ...formData, accusedCount: e.target.value })
                  }
                  required
                />
              </div>

              {/* Arrested Male */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Arrested Male:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Arrested Male"
                  value={formData.arrestedMale}
                  onChange={(e) =>
                    setFormData({ ...formData, arrestedMale: e.target.value })
                  }
                  required
                />
              </div>

              {/* Arrested Female */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Arrested Female:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Arrested Female"
                  value={formData.arrestedFemale}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      arrestedFemale: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Arrested Count No. */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Arrested Count No.:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Arrested Count No."
                  value={formData.arrestedCountNo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      arrestedCountNo: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Accused Chargesheeted Count */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Accused Chargesheeted Count:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Accused Chargesheeted Count"
                  value={formData.accusedChargesheetedCount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      accusedChargesheetedCount: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Conviction Count */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Conviction Count:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Conviction Count"
                  value={formData.convictionCount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      convictionCount: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* FIR ID */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  FIR ID:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="FIR ID"
                  value={formData.firId}
                  onChange={(e) =>
                    setFormData({ ...formData, firId: e.target.value })
                  }
                  required
                />
              </div>

              {/* Unit ID */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Unit ID:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Unit ID"
                  value={formData.unitId}
                  onChange={(e) =>
                    setFormData({ ...formData, unitId: e.target.value })
                  }
                  required
                />
              </div>

              {/* Crime No. */}
              <div className="mb-4">
                <label className="text-gray-700 text-sm sm:text-l mb-2">
                  Crime No.:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Crime No."
                  value={formData.crimeNo}
                  onChange={(e) =>
                    setFormData({ ...formData, crimeNo: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center md:col-span-2">
              <button
                className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="animate-spin mr-2"
                  />
                ) : (
                  "Add Data"
                )}
              </button>
            </div>
            {/* Success modal */}
            <AddSuccessModal
              isOpen={isAddSuccessModalOpen}
              onClose={handleCloseAddSuccessModal}
            />
          </div>
        ) : (
          <div className="bg-white p-4 sm:p-8">
            <h2 className="text-red-900 text-xl sm:text-2xl mb-6 text-center">
              Update Existing Data
            </h2>
            <div className="mb-4">
              <label className="text-gray-700 text-sm sm:text-l mb-2">
                Search FIR ID:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter FIR ID"
                value={searchedFirId}
                onChange={(e) => setSearchedFirId(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                type="button"
                onClick={handleSearch}
                disabled={isLoading}
              >
                {isLoading ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="animate-spin mr-2"
                  />
                ) : (
                  "Search"
                )}
              </button>
            </div>
            {searchResult !== null && (
              <div className="mt-8">
                <h2 className="text-gray-700 text-2xl mb-4 text-center">
                  FIR ID: {searchResult.firId}
                </h2>
                <div className="mb-4">
                  <label className="text-gray-700 text-sm sm:text-l mb-2">
                    Select field to update:
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedField}
                    onChange={(e) => handleFieldSelect(e.target.value)}
                  >
                    <option value="">Select Field to Update</option>
                    <option value="">Select Field to Update</option>
                    <option value="districtName">District Name</option>
                    <option value="unitName">Unit Name</option>
                    <option value="FIRNo">FIR No</option>
                    <option value="RI">RI</option>
                    <option value="Year">Year</option>
                    <option value="Month">Month</option>
                    <option value="Offence_From_Date">Offence From Date</option>
                    <option value="Offence_To_Date">Offence To Date</option>
                    <option value="FIR_Reg_DateTime">
                      FIR Registration DateTime
                    </option>
                    <option value="FIR_Date">FIR Date</option>
                    <option value="firType">FIR Type</option>
                    <option value="firStage">FIR Stage</option>
                    <option value="complaintMode">Complaint Mode</option>
                    <option value="crimeGroupName">CrimeGroup Name</option>
                    <option value="crimeHeadName">CrimeHead Name</option>
                    <option value="latitude">Latitude</option>
                    <option value="longitude">Longitude</option>
                    <option value="actSection">Act Section</option>
                    <option value="ioName">IO Name</option>
                    <option value="designation">Designation</option>
                    <option value="kgId">KGID</option>
                    <option value="internalIo">Internal IO</option>
                    <option value="placeOfOffence">Place of Offence</option>
                    <option value="distanceFromPs">Distance from PS</option>
                    <option value="beatName">Beat Name</option>
                    <option value="villageAreaName">Village Area Name</option>
                    <option value="age">Age</option>
                    <option value="victimCount">Victim Count</option>
                    <option value="accusedCount">Accused Count</option>
                    <option value="arrestedMale">Arrested Male</option>
                    <option value="arrestedFemale">Arrested Female</option>
                    <option value="arrestedCountNo">Arrested Count No.</option>
                    <option value="accusedChargesheetedCount">
                      Accused Chargesheeted Count
                    </option>
                    <option value="convictionCount">Conviction Count</option>
                    <option value="firId">FIR ID</option>
                    <option value="unitId">Unit ID</option>
                    <option value="crimeNo">Crime No.</option>
                  </select>
                </div>
                {selectedField && (
                 <div className="mb-4">
                 <label className="text-gray-700 text-sm sm:text-l mb-2">
                   Enter updated value for {selectedField}:
                 </label>
                 {selectedField === "Month" ? (
                   <select
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     value={formData[selectedField]}
                     onChange={(e) =>
                       setFormData({
                         ...formData,
                         [selectedField]: e.target.value,
                       })
                     }
                   >
                     <option value="">Select Month</option>
                     <option value="January">January</option>
                     <option value="February">February</option>
                     <option value="March">March</option>
                     <option value="April">April</option>
                     <option value="May">May</option>
                     <option value="June">June</option>
                     <option value="July">July</option>
                     <option value="August">August</option>
                     <option value="September">September</option>
                     <option value="October">October</option>
                     <option value="November">November</option>
                     <option value="December">December</option>
                   </select>
                 ) : (
                   <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     type="text"
                     placeholder={`Updated ${selectedField}`}
                     value={formData[selectedField]}
                     onChange={(e) =>
                       setFormData({
                         ...formData,
                         [selectedField]: e.target.value,
                       })
                     }
                   />
                 )}
               </div>               
                )}
                <div className="flex items-center justify-center">
                  <button
                    className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                    type="button"
                    onClick={handleUpdate}
                    disabled={isTickLoading}
                  >
                    {isTickLoading ? (
                      <FontAwesomeIcon
                        icon={faSpinner}
                        className="animate-spin mr-2"
                      />
                    ) : (
                      "Update"
                    )}
                  </button>
                </div>
              </div>
            )}

            {isFirIdNotFoundDialogOpen && <FirIdNotFoundModal />}
            {isDialogOpen && <SuccessModal />}
          </div>
        )}
      </div>
    </div>
  );
}

export default CombinedForm;
