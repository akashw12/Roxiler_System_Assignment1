# Roxiler Systems - MERN Stack Coding Challenge

## Introduction  
This is a **MERN stack** application that fetches product transaction data from a third-party API, initializes a database, and provides APIs to retrieve and analyze transactions. The frontend visualizes this data through tables and charts.

---

## Features  

### Backend (Node.js, Express, MongoDB)  
- **Database Initialization API** - Fetches data and initializes the database.  
- **Transactions API** - Lists transactions with search and pagination.  
- **Statistics API** - Provides total sales amount, sold, and unsold items for a selected month.  
- **Bar Chart API** - Returns item count in predefined price ranges.  
- **Pie Chart API** - Returns item count by category.  
- **Combined Data API** - Merges responses from all APIs.  

### Frontend (React.js)  
- **Transaction Table** - Displays transactions with search, pagination, and month selection.  
- **Statistics Boxes** - Shows total sales, sold, and unsold items.  
- **Bar Chart** - Displays price range distribution.  
- **Pie Chart** - Displays category-wise item distribution.  

---

## Installation & Setup  

### Prerequisites  
- Node.js  
- MongoDB  
- React.js  

### Backend Setup  
```sh
git clone https://github.com/yourusername/repository-name.git
cd repository-name/backend
npm install
nodemon index.js
```
### Frontend Setup
```sh
cd repository-name/frontend
npm install
npm start
```


