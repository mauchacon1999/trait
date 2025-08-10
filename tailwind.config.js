/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Brand Colors
                'slate-purple': {
                    50: 'var(--slate-purple-50)',
                    100: 'var(--slate-purple-100)',
                    200: 'var(--slate-purple-200)',
                    300: 'var(--slate-purple-300)',
                    400: 'var(--slate-purple-400)',
                    500: 'var(--slate-purple-500)', // Base color #7463F8
                    600: 'var(--slate-purple-600)',
                    700: 'var(--slate-purple-700)',
                    800: 'var(--slate-purple-800)',
                    900: 'var(--slate-purple-900)',
                    950: 'var(--slate-purple-950)',
                    DEFAULT: 'var(--slate-purple-500)',
                },
                'navy': {
                    50: 'var(--navy-50)',
                    100: 'var(--navy-100)',
                    200: 'var(--navy-200)',
                    300: 'var(--navy-300)',
                    400: 'var(--navy-400)',
                    500: 'var(--navy-500)',
                    600: 'var(--navy-600)',
                    700: 'var(--navy-700)',
                    800: 'var(--navy-800)',
                    900: 'var(--navy-900)', // Base color #18183a
                    950: 'var(--navy-950)',
                    DEFAULT: 'var(--navy-900)',
                },
                // System Colors
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)',
                },
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)',
                },
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)',
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                },
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'Consolas', 'monospace'],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-in': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'slide-in': 'slide-in 0.3s ease-out',
            },
        },
    },
    plugins: [],
}
