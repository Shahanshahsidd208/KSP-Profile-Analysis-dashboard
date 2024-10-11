# <span style="font-size: 150%;">Police Performance Analysis and Data & Resource Management</span>

Our approach involves developing a user-friendly dashboard accessible through two login options: one for individual police officers which is used to analyze their own performance, while allowing superior officers to assess the performance of any officer. Additionally, the performance of PIs is contingent upon the performance of PSIs under them. Similarly, the performance DySPs depends on the performance of various PIs under them. This maintains the hierarchical structure of the police system.
- When any police officer logs into the profile analysis system, they can view their performance analysis through various graphical and statistical representations. They can also download their report and opt for real-time notifications through mobile number or email from their dashboard. Additionally, they can search for details of any FIR. The dashboard will also include a performance evaluation system showing the cumulative score of the logged-in police officer along with feedback ranging from outstanding to poor.
- Another login option is provided for the designated officer responsible for managing data and resources of each police station, such as adding new FIR data, updating existing FIR data, updating user information, and managing resource allocation for each police station
## Table of Contents

- [Architecture Design](#architecture-design)
- [What You Need to Run This Application](#what-you-need-to-run-this-application)
- [How to Run This Code](#how-to-run-this-code)
- [Sample for Dashboard Access](#sample-for-dashboard-access)
- [Snapshots of Home Page](#snapshots-of-home-page)
- [Personalized Dashboard](#personalized-dashboard)
- [Search Bar and Notification Button Demo](#search-bar-and-notification-button-demo)
- [Language Toggling](#language-toggling)
- [User Can Add New Data or Update Existing Data](#user-can-add-new-data-or-update-existing-data)
- [Watch Demo Video Here](#watch-demo-video-here)
- [Future Work Roadmap](#future-work-roadmap)
- [Contributing](#contributing)
- [Contact](#contact)

## <span style="font-size: 120%;">Architecture Design</span>

![image](https://github.com/Shahanshahsidd208/KSP-Profile-Analysis-dashboard/assets/105127757/1054c47f-4ae3-4530-b34d-d01f9b22b259)

## <span style="font-size: 120%;">What You Need to Run This Application</span>

###  For Frontend:
- axios: ^1.6.8
- chart.js: ^4.4.2
- dom-to-image: ^2.6.0
- file-saver: ^2.0.5
- html2canvas: ^1.4.1
- react: ^18.2.0
- react-chartjs-2: ^5.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.22.3
- react-toastify: ^10.0.5
- recharts: ^2.12.2

### For Backend:
- bcryptjs: ^2.4.3
- cors: ^2.8.5
- dotenv: ^16.3.1
- express: ^4.18.2
- express-async-errors: ^3.1.1
- jsonwebtoken: ^9.0.2
- mongoose: ^8.0.3

## <span style="font-size: 120%;">How to Run This Code</span>

- Make sure MongoDB is running on your system
- Clone this repository

### To Run Frontend:

- **Run the following command inside \KSP Dasboard final\frontend> to install all packages and to start frontend:**
  
bash
  npm install
  npm run dev

### To Run Server:

- **Run the following command inside `\KSP Dasboard final>` to install all packages and to start server:**
bash
  npm install
  npm run dev
  
## <span style="font-size: 120%;">Sample for Dashboard Access</span>

1. **Username:** ravinaiklambani494@gmail.com
   **Password:** ravinaiklambani494

2. **Username:** manjannat1364@gmail.com
   **Password:** manjannat1364


## <span style="font-size: 120%;">Snapshots of Home Page</span>

![image](https://github.com/Shahanshahsidd208/KSP-Profile-Analysis-dashboard/assets/105127757/81063b03-4757-42d3-91d3-8e2ba8cba9e6)
![image](https://github.com/Shahanshahsidd208/KSP-Profile-Analysis-dashboard/assets/105127757/25953fc8-58d0-4f9d-afee-9066c48ccb80)


## <span style="font-size: 120%;">Personalized dashboard</span> 

![image](https://github.com/Shahanshahsidd208/KSP-Profile-Analysis-dashboard/assets/105127757/00cf4d86-4b57-4505-bf29-03992596bc96)
![image](https://github.com/Shahanshahsidd208/KSP-Profile-Analysis-dashboard/assets/105127757/9038b8ff-6cb4-4678-a7df-e3af6e1938b1)

## <span style="font-size: 120%;">Search Bar and notification button demo</span> 
![image](https://github.com/Shahanshahsidd208/KSP-Profile-Analysis-dashboard/assets/105127757/c3c006a3-cdb1-463f-9e90-72cde0342088)


## <span style="font-size: 120%;">Language toggling</span> 

![image](https://github.com/Shahanshahsidd208/KSP-Profile-Analysis-dashboard/assets/105127757/0201ac60-af25-4033-a61d-979dc86900e8)

## <span style="font-size: 120%;">User can add new data or update existing data</span> 

![image](https://github.com/Shahanshahsidd208/KSP-Profile-Analysis-dashboard/assets/105127757/68bea228-4256-4faf-961c-cba9b9b35741)

## <span style="font-size: 120%;">Watch demo video here:</span>
https://youtu.be/2r89xyq0okE?si=hHKANuyF2MAVvJCW


## <span style="font-size: 120%;">Future Work Roadmap</span>

#### 1. **Real-time Notifications:**
- Introduce a planned feature to notify officers about pending and undetected cases through mobile notifications.
- Allow users to opt for notifications on their mobile devices through a button in their profile performance analysis dashboard.
- This enhancement aims to improve responsiveness and ensure timely action on critical cases.

#### 2. Database for All Other Remaining Years:
- Initiate preprocessing of the database and upload it to MongoDB for each remaining year.
- Enable users to target specific datasets for analysis by selecting a year from the drop-down menu.
- Illustrate hierarchical structure within the police force, aiding in performance evaluation and decision-making.

#### 3. Resource Management for Each Station:
- Develop a system for managing the resources of each police station.
- Track which resources are allocated to which officer.

#### 4. Performance of Each Unit:
- Analyze the performance of each unit in all sections of crime.
- Conduct team performance analysis from same unit.
- Schedule teams for crimes relevant to their expertise.


#### 5. Performance Evaluation Framework:
- Implement structured method to score officers based on factors such as pending and convicted cases, determining each factor's weightage for the overall score.
- Provide officers with feedback ranging from outstanding to poor based on their scores, aiding in improvement and recognizing excellence.

## Contributing

Contributions are welcome!! Please fork the repository and create a pull request with your changes.



## Contact

For any inquiries or support, please contact:

- **Shahanshah Siddiqui**
  - [Email](mailto:shahanshahsidd208@gmail.com)
  - [LinkedIn](https://www.linkedin.com/in/shahanshah-siddiqui-851354304/)
  - [GitHub](https://github.com/Shahanshahsidd208)

- **Mehwish Nidgundi**
  - [Email](mailto:mehwish.codes@gmail.com)
  - [LinkedIn](https://www.linkedin.com/in/mehwish-nidgundi-712372238/)
  - [GitHub](https://github.com/mehwishferoz)

- **Pramod Naik**
  - [Email](mailto:pramodkumta26@gmail.com)
  - [LinkedIn](https://www.linkedin.com/in/pramod-naik-203902222/)
  - [GitHub](https://github.com/Pramod26naik)

- **Kanhaiya Kumar**
  - [Email](mailto:kanhaiya2zee3669@gmail.com)
  - [LinkedIn](https://www.linkedin.com/in/kanhaiya-kumar-37b320228/)
  - [GitHub](https://github.com/kanhaiyakumar1838)

