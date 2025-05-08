module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0079fe',
                gray: '#7c8395',
                lightbg: '#ffffff',
                lighttxt: '#1f2328',
                darkbg: '#141c2f',
                darktxt: '#ecedef',
                bluegray: '#1f2a48',
                lightgray: '#D8DDE5',
            },
            fontFamily: {
                mono: ['"Space Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
}
