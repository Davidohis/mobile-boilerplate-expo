/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
      },
    },
    fontFamily: {
      "work-sans": "Work Sans",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#E40473",
      "secondary-yellow": "#FFB82E",
      "rubine-50": "#FFE6F2",
      "rubine-100": "#FEB4D8",
      "off-white": "#f4f6fa",
      white: "#ffffff",
      "neutral-50": "#F9FAFB",
      "neutral-100": "#F3F4F6",
      "neutral-200": "#E5E7EB",
      "neutral-300": "#D1D5DB",
      "neutral-400": "#9CA3AF",
      "neutral-500": "#6B7280",
      "neutral-700": "#374151",
      "neutral-600": "#4B5563",
      "neutral-800": "#1F2937",
      "neutral-900": "#111827",
      green: "#22C55E",
      yellow: "#FFEC89",
      grey: "#84868C",
      "light-grey": "#c3c4c7",
      "light-grey-200": "#E5E7EB",
      "light-grey-300": "#D1D5DB",
      error: "#EF4444",
      "error-light": "#fa5732",
      "error-light-200": "#FECACA",
      "error-200": "#FECACA",
      "error-500": "#EF4444",
      "error-light-100": "#FEF2F2",
      "error-light-2": "rgba(243, 96, 63, 0.3)",
      "error-light-3": "rgba(243, 96, 63, 0.04)",
      "warning-50": "#FFFBEB",
      "warning-200": "#FDE68A",
      "warning-500": "#F59E0B",
      success: "#22C55E",
      "success-500": "#22C55E",
      "success-600": "#16A34A",
      "toastify-color-dark": "#121212",
      "toastify-color-info": "#3498db",
      "toastify-color-warning": "#f1c40f",
      "toastify-color-error": "#EF4444",
    },
  },
  plugins: [],
};
