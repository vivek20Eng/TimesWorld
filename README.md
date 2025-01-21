# 🌍 React Countries App

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

A modern React application showcasing countries information with authentication, filtering, and responsive design.

## ✨ Features

- 🔐 Secure authentication system
- 🌐 Countries information display
- 🎯 Region-based filtering
- 📱 Responsive design
- 🎠 Interactive country slider
- 📄 Load more pagination
- 🛡️ Protected routes
- 🎨 Modern UI with React Bootstrap

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/react-countries-app.git
cd react-countries-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **Frontend Framework**: React.js
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **UI Framework**: React Bootstrap
- **API**: REST Countries API

## 📁 Project Structure

```
src/
  ├── components/          # Reusable components
  │   ├── CountrySlider
  │   ├── RegionFilter
  │   └── ProtectedRoute
  ├── pages/              # Page components
  │   ├── Login
  │   └── Home
  ├── store/              # Redux store setup
  │   ├── index
  │   └── slices/
  │       ├── authSlice
  │       └── countriesSlice
  ├── styles/             # Global styles
  ├── App.js             # Main app component
  └── index.js           # Entry point
```

## 🔒 Authentication

The login form includes validation for:
- Valid email format
- Password requirements:
  - Minimum 8 characters
  - At least 1 capital letter
  - At least 1 number
  - At least 1 special character

## 🌐 API Integration

The application integrates with the REST Countries API:
```
https://restcountries.com/v2/all?fields=name,region,flag
```

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop computers

## 🎯 Features in Detail

### Home Page
- Country slider with navigation
- Region filter dropdown
- Country cards with flags
- Load more pagination
- Responsive grid layout

### Login Page
- Form validation
- Error messages
- Protected routing
- Responsive design

## 🎨 Styling

The project uses:
- React Bootstrap components
- Custom CSS for enhanced styling
- Responsive design principles
- Modern UI/UX practices

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App
npm run eject
```

## 📝 Notes

- Ensure all environment variables are properly set
- Check browser compatibility (supports modern browsers)
- Review API documentation for any endpoint changes

## 📫 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/react-countries-app](https://github.com/yourusername/react-countries-app)

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)

---

⭐️ Thank you for checking out this project! If you find it helpful, please consider giving it a star!