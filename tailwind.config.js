/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    
screens: {
      sm: '480px',
      md: '768px',
      ls: '800px',
      lx: '900px',
      lg: '1024px',
      lm:  '1200px',
      xs:  '1300px',
      xl: '1440px',
    },
    fontFamily: {
      AkayaTelivigala: ["Akaya Telivigala"],
      Sora: ["Sora"],
      Great: ["Great Vibes"],
      Climate: ["Climate Crisis"]

      
    },
    extend: {
      animation: {
        'spinSlow': 'spin 4s linear infinite',
      }
    },

  },
  variants: {
    animationDelay: ['responsive'],
    animationDuration: ['responsive'],
    animationIteration: ['responsive'],
    animationTiming: ['responsive'],
    animationDirection: ['responsive'],
    animationFillMode: ['responsive'],
    animationPlayState: ['responsive'],
  },
  plugins: [require('tailwindcss-animation'),],
}