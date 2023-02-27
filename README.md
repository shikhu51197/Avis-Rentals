> 💻 CLONE PROJECT NAME⭐  --> ✨AVIS RENTALS💫
<br>

[![Backend Repo Link](https://img.shields.io/badge/Backend_Repo_Link-0A66C2?style=for-the-badge&logo=github&logoColor=#FF7139)](https://github.com/shikhu51197/backendcruise)
[![Deploy to Cyclic](https://img.shields.io/badge/Deployed_Cyclic_Link-0A66C2?style=for-the-badge&logo=ko-fi&logoColor=white)](https://lime-silly-goshawk.cyclic.app/)

[![Deployed App Vercel Link](https://img.shields.io/badge/Deployed_App_Vercel_Link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://cruiserental.vercel.app/)
[![Deployed Admin Vercel Link](https://img.shields.io/badge/Deployed_Admin_Vercel_Link-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://cruise-rental-admin-panel.vercel.app)  

---

 ![ShopGIF](https://media.giphy.com/media/IzoWwMyCtNyNwuLRWS/giphy.gif) 

> Avis is India's leading mobility Company with services ranging from chauffeur drive and self-drive car rentals, car-Sales, operating lease and fleet management and has been present in the country for over 20 years.This was a collaborative Project which is made by 5 team members within 5 Days.
---


## 🔗 Collaborators Profile Links✨



| Collaborators | Github                                                                                                                                   | Linkedin                                                                                                                                                            | Portfolio                                                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Shikha Gupta  (Team Lead)| [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shikhu51197/)| [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shikha-gupta-12a2b5199) |[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shikhu51197.github.io/) | 
| Mandar Deshmukh (Member 1) | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DeshmukhMandar3) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mandar-deshmukh-62821b189/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://deshmukhmandar3.github.io/) |
| R Giri Reddy (Member 2) | [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/geraltyen) |[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giri-reddy-geralt/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://geraltyen.github.io) |
| Kallol Sarkar (Member 3)| [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kallol0011) |[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kallol-sarkar-229000210/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kallol0011.github.io/) |
| Himanshu Sharma (Member 4)| [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=white)](https://github.com/himanshu7582901182) |[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/himanshu-sharma7/) | [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://himanshu7582901182.github.io/) |

<br>

💻Unique Project Name & logo :- CRUISE RENTALS🚗

![CRuise (1)-modified](https://user-images.githubusercontent.com/107506646/220362530-270d0d67-df50-44f2-961e-838b22b3e619.png)  

---
## 💫Tech-Stack->

- #### For Frontend :-
   - `HTML5`
  - `CSS3`
  - `JavaScript `
   - `Redux`
  - `ReactJS`
  - `Typescript `
   - `ES6 `

- #### For Backend :-
    - `NodeJS`
     - `ExpressJS`
    - `MongoDB `

- #### For deploy database :- 
      -`cyclic `

- #### For Styling :-  
   - `Chakra UI `
   - `BootStrap `

- #### For live Project : -
   - `Vercel`

![ShopGIF](https://media.giphy.com/media/26BRrcK4dXrxl817q/giphy.gif)

---
## Features ✨:-
---
 | Serial No            | Feature                                                              |
| ----------------- | ------------------------------------------------------------------ |
| 1 | User signup and Login |
| 2 | Products Page with Filter and Sort Functionalities |
| 3 | Dynamic add to cart and SinglePage feature |
| 4 | Dynamic cart page using userId |
| 5 | Admin Login & Page |
| 6 | Dummy payment using UPI-Paytm |
| 7 | Homepage & Reservation Page |
| 8 | location Page & Map Display|


---
# Package.json(Dependency)✨:-

 | Serial No            | Backend                      |  Frontend      |
| ----------------- | -------------------|------------------------ |
| 1 | bcrypt |   Chakra-ui , BootStrap|
| 2 | mongoose |  React Router dom |
| 3 | cors |    redux ,react-icons |
| 4 | dotenv |  react redux ,axios |
| 5 | express | typescript |
| 6 | jsonwebtoken | redux thunk |



---

## Flow

```mermaid
graph TD;
    App-->HomePage
    HomePage-->SignUpPage;
    HomePage-->loginPage;
      SignUpPage-->loginPage;
       loginPage-->HomePage;
       HomePage --> ReservationPage
       ReservationPage-->CartPage
       CartPage-->PaymentPage
       HomePage -->CarSales
       CarSales-->SinglePage
       SinglePage --> CartPage
       CartPage-->PaymentPage
       HomePage --> AdminLogin
       AdminLogin-->AdminDeshboard
       AdminLogin -->CarsData
       AdminLogin -->Users
       AdminLogin -->Bookings
       AdminLogin -->Feedback
       AdminLogin -->Profile
       
```

---
## Screenshots 📷
---

# HomePage

![Screenshot (1658)](https://user-images.githubusercontent.com/107506646/221434962-c51516ca-5281-4ef3-928e-31e7a2c88b84.png)


# Signup | Login
![Screenshot (1665)](https://user-images.githubusercontent.com/107506646/221434968-aff151ff-cadb-4e3c-a863-61515a5e5bc7.png)

# ReservationPage

![Screenshot (1659)](https://user-images.githubusercontent.com/107506646/221435011-750a99eb-436d-4971-9a26-6f35568c7b77.png)

# Products | SinglePage

![Screenshot (1660)](https://user-images.githubusercontent.com/107506646/221434990-8c730e12-23e5-4d33-a0f4-bb497f2394de.png)

![Screenshot (1661)](https://user-images.githubusercontent.com/107506646/221434996-33859663-1cd8-40a6-9127-a3be050c9ca2.png)

#  Payment 

![Screenshot (1662)](https://user-images.githubusercontent.com/107506646/221434978-509be1a5-b85a-42a5-9547-27799444ed0b.png)

# Admin & AdminDeshboard
![Screenshot (1663)](https://user-images.githubusercontent.com/107506646/221434971-4569981a-bc54-496a-a2e8-86e7fcdbffff.png)

![Screenshot (1664)](https://user-images.githubusercontent.com/107506646/221434972-7dd12b1f-43dc-4edf-aa23-85559d089c3a.png)

---




<h1 align="center">✨Thank You✨</h1>
