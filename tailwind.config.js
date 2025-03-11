/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: "jobflow-",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // ✅ Scan all src files
    // "./src/contents/**/*.{js,ts,jsx,tsx}", // ✅ Include content scripts
    // "./src/popup/components/**/*.{js,ts,jsx,tsx}", // ✅ Include popup scripts
    // "./src/styles/**/*.css"  // ✅ Include CSS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
