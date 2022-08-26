/** @type {import('tailwindcss').Config} */ 
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
        '.outline-black': {
          outline: '2px dotted black',
          outlineOffset: '2px',
        },
        '.outline-white': {
          outline: '2px dotted white',
          outlineOffset: '2px',
        },
        '.message': {
          borderWidth: '2px',
          borderRadius: '20px',
          display: 'block',
          maxWidth: '100%',
          marginTop: '4px',
          padding: '4px',
        },
        '.dialog-item': {
          color: '#00628c',
          fontSize: '1.125rem',
          marginTop: '4px',
        },
        '.dialog-item.active': {
          textDecoration: 'underline',
          color: 'red',
        },
        '.posts': {
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'start',
          flexDirection: 'column',
        },
      })
    })
  ],
}
