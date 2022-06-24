/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/backgroundblur.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: { 
      greep: {
        388: '#00B37E',
        580: '#0e875F',
        789: '#015F43'
    },
      blue: {
      588: '#8108F7'
    },
      orange:{
      588: '#FBA94C'
    },
      red: {
      588: '#F75A68'
    },
      gray:{
      188: '#E1E1E6',
      289: '#C4C4CC',
      388: '#8D8D99',
      588: '#323238',
      688: '#29292E',
      788: '#121214',
      98: '#89890A'
      }
  }
}
},
  plugins: [],
}
