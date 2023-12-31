/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter-Regular': 'Inter-Regular',
        'Inter-Bold': 'Inter-Bold',
        'Inter-SemiBold': 'Inter-SemiBold',
      },
      backgroundImage: {
        'bg-body': "url(../public/bg.png);"
      }

    },
  },
  plugins: [],
}

