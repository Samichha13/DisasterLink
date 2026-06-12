# DisasterLink 🚨
 
DisasterLink is a full-stack web application designed to coordinate disaster response efforts between citizens, NGOs, and government agencies. During a disaster, communication and resource management break down — DisasterLink solves this by providing a single platform where SOS alerts can be sent, resources can be tracked, and volunteers can be coordinated in real time.
 
Built as a learning project using the MERN stack.
 
## Features
- Citizens can send SOS alerts and register as volunteers
- NGOs can manage resources and coordinate volunteers  
- Government can oversee all alerts and resources
- Role-based access with JWT authentication
 
## Tech Stack
 
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express, MongoDB
- **Auth:** JWT + bcryptjs
 
## Setup
1. Clone the repo
2. Add `.env` in server folder with:
```js

MONGO_URI = ""
JWT_SECRET = ""
```
3. To run server use:
```bash
$ cd server
$ npm install
$ node server.js
```
4. To run client use:
```bash
$ cd client
$ npm install
$ npm run dev
```