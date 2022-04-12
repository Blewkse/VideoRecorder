module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      spacing: {
        '1/5': '20%',
        '1/6': '16%',
        '5/6': '83%',
        '1/12': '8%',
        '5/12': '41%',
        '7/12': '58%',
        '11/12': '91%',
        '1/24': '4%'

      },
      minWidth: {
      '1/5': '20%',
      '1/2': '50%',
    },
    fontSize: {
      'xxs': '.30rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  }
},
  plugins: [],
}
  