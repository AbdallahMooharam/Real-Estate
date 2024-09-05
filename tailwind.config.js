/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // المسارات إلى جميع ملفات JavaScript و TypeScript و JSX و TSX
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-dark': '#003366',   // الأزرق الداكن
        'custom-blue-light': '#0066cc',  // الأزرق الفاتح
        'custom-gray-light': '#f1f5f9',  // الرمادي الفاتح
      },
    },
  },
  plugins: [],
}
