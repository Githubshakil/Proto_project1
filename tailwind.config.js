/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        
      },
      maxWidth:{
        'customContainer':'1170px'
      }
     
      
  
    },
  },
  plugins: [],
}
 
