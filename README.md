# KnoxClubSharing

# KnoxClubSharing Platform

Welcome to the **KnoxClubSharing Platform**, an innovative solution designed to help clubs in colleges share resources and reduce costs. This platform enables clubs to list items they are willing to share and allows other clubs to borrow these items for their events, promoting a culture of collaboration and sustainability.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact Information](#contact-information)

## Project Overview
In colleges, clubs often face limited funding, making it challenging to purchase everything needed for their events. The **KnoxClubSharing Platform** aims to address this issue by allowing clubs to reuse resources that other clubs already own. This not only helps in saving costs but also promotes the efficient utilization of available funds.


https://github.com/Santoshpant23/KnoxClubSharing/assets/72144199/93430f09-be94-4a92-a315-4f47732028fe


## Features
- **Item Listing**: Clubs can list items they are willing to share.
- **Item Borrowing**: Clubs can borrow items listed by other clubs.
- **Approval System**: A system to request and approve the borrowing of items.
- **User Authentication**: Secure login and registration for club members.
- **Email Notifications**: Automatic email notifications for various actions like item requests and approvals.

## Technologies Used
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Email Service**: Nodemailer
- **Hosting**: AWS

## Installation
To get started with the project, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/Santoshpant23/KnoxClubSharing.git
    cd KnoxClubSharing
    ```

2. **Install dependencies**
    ```bash
    cd backend 
    npm install
    cd ../
    cd frontend/Club Resource Sharing
    npm install
    ```

3. **Set up environment variables**
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    PORT=Your_Port
    mongoURI=your_mongodb_connection_string
    jwtSecret=your_jwt_secret
    email=your_email
    password=your_email_password
    adminEmail=your_admin_email
    adminPassword=your_admin_password
    saltRounds=some_number
    ```

4. **Run the application**
    ```bash
    npm run dev
    ```

## Usage
Once the application is up and running, you can perform the following actions:

### For Clubs
- **Register and Login**: Create an account and log in.
- **List Items**: Add items that your club is willing to share.
- **Request Items**: Browse items listed by other clubs and request to borrow them.
- **Approve Requests**: Approve or reject borrowing requests from other clubs.

### For Admins
- **Manage Clubs**: Oversee club registrations and activities.
- **Monitor Items**: Ensure items are being shared and borrowed appropriately.

## Contributing
We welcome contributions from the community! To contribute, please follow these steps:

1. **Fork the repository**
2. **Create a new branch**
    ```bash
    git checkout -b feature-branch
    ```
3. **Make your changes**
4. **Commit your changes**
    ```bash
    git commit -m "Description of changes"
    ```
5. **Push to the branch**
    ```bash
    git push origin feature-branch
    ```
6. **Create a pull request**

## Contact Information
For any inquiries or support, please contact:

**Santosh**
- **Email**: spant@knox.edu
- **College**: Knox College
- **Major**: Computer Science
- **Year**: Freshman

Thank you for using the **KnoxClubSharing Platform**! We hope this tool helps your club save costs and promote a collaborative environment on campus.
