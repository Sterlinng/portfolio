/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // Professional color palette
        'pro-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0f172a",      // Slate 900 - Deep professional blue-gray
          "secondary": "#475569",    // Slate 600 - Medium gray
          "accent": "#3b82f6",       // Blue 500 - Professional blue accent
          "neutral": "#1e293b",      // Slate 800
          "base-100": "#ffffff",     // Pure white background
          "base-200": "#f8fafc",     // Slate 50 - Subtle gray
          "base-300": "#f1f5f9",     // Slate 100
          "info": "#0ea5e9",         // Sky blue
          "success": "#10b981",      // Emerald green
          "warning": "#f59e0b",      // Amber
          "error": "#ef4444",        // Red
        },
        dark: {
          "primary": "#f8fafc",      // Slate 50 - Light text on dark
          "secondary": "#94a3b8",    // Slate 400 - Medium gray
          "accent": "#60a5fa",       // Blue 400 - Bright accent for dark mode
          "neutral": "#cbd5e1",      // Slate 300
          "base-100": "#0f172a",     // Slate 900 - Deep dark background
          "base-200": "#1e293b",     // Slate 800
          "base-300": "#334155",     // Slate 700
          "info": "#38bdf8",         // Sky 400
          "success": "#34d399",      // Emerald 400
          "warning": "#fbbf24",      // Amber 400
          "error": "#f87171",        // Red 400
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root",
  },
};
