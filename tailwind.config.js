/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/components/Footer.jsx",
    "./src/components/NavBar.jsx",
    "./src/components/TopBar.jsx",
    "./src/components/AboutComp.jsx",
    "./src/components/CheckArablity.jsx",
    "./src/components/ServicesComp.jsx",
    "./src/components/QuestionsComp.jsx",
    "./src/components/RoomsComp.jsx",
    "./src/components/Specialty.jsx",
    "./src/pages/HomePage.jsx",
    "./src/pages/AboutPage.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-image" : "url('/src/images/HomePageImg.jpg')",
        "home-image2" : "url('/src/images/banner1.jpg')",
      },
      colors: {
        buttonColor: '#B56952',
        topNavBg: '#110439',
        textColor: "#555555",
        cardColor: "#F5F5F5"
      },
      width: {
        '1500': '85rem',
        '1600' : "25.5rem",
        'cardImage2' : '20rem',
        'cardImage3' : '15rem',
        'cardImage4' : '25rem',
        'cardOuter2' : '67rem',
        'cardOuter3' : '52rem',
        'cardOuter4' : '45rem',
        'cardOuter5' : '30rem',
        'roomImage' : '26.5rem',
        'roomImage2' : '20rem',
        'roomImage3' : '14rem',
      },
      fontFamily: {
        'noto': ['Noto Sans']
      },
      height: {
        '24': '45rem',
        '20': '35rem',
        '10': '20rem',
        'backGray': '40rem',
        'roomImage' : '15.5rem',
        'roomImage2' : "11.5rem",
        'roomImage3' : '8.5rem',
      },
      screens: {
        'llg': {'max' : '1450px'},
        'lg' : {'max': '1220px'},
        'mmd' : {'max' : '1150px'},
        'mds' : {'max' : '950px'},
        'sms' : {'max' : '850px'},
        'xs' : {'max' : '750px'},
        'xss' : {'max' : '620px'},
        'xxxs' : {'max' : '550px'},
        'ss' : {'max' : '520px'},
        'mob' : {'max' : '490px'}
      }

    },
  },
  plugins: [],
}

