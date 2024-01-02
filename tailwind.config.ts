import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    "bg-light-blue-600",
    "bg-green-500",
    "bg-green-600",
    "bg-green-800",
    "bg-rose-700",
    "bg-red-600"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      inter: ['inter']
    },
    colors: {
      "white": '#fff',
      "sidebar": "#F9FAFB",
      "seperator": '#EAECF0',
      "gray-50": "#F9FAFB",
      "gray-200": "#EAECF0",
      "gray-300": '#D0D5DD',
      "gray-500": "#667085",
      "gray-600": "#4B5563",
      "gray-700": "#344054",
      "gray-800": "#1D2939",
      "gray-900": "#101828",
      "blue": "#033A5E",
      "blue-500": "#3B82F6",
      "light-blue-50": "#F0F9FF",
      "light-blue-200": "#BAE6FD",
      "light-blue-300": '#0EA5E9',
      "light-blue-500": '#3B82F6',
      "light-blue-600": "#0284C7",
      "light-blue-700": "#0369A1",
      "green-500": "#10B981",
      "green-600": "#059669",
      "green-800": "#065F46",
      "rose-700": "#BE123C",
      "red-600": "#DC2626",
      "success-50": "#ECFDF3",
      "success-200": "#ABEFC6",
      "success-700": "#067647",
      "indigo-50": "#EEF4FF",
      "indigo-200": "#C7D7FE",
      "indigo-700": "#3538CD",
      "warning-50": "#FFFAEB",
      "warning-200": "#FEDF89",
      "warning-700": "#B54708",
      "transparent": "transparent"
    }
  },
  plugins: [],
}
export default config
