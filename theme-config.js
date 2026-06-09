tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                partyBlue: '#1e3a8a',
                partyDarkBlue: '#172554',
                partyYellow: '#f472b6',
                partyPink: '#f472b6',
                offWhite: '#fdfbf7',
                darkBg: '#0f172a',
                quoteGray: '#374151'
            },
            boxShadow: {
                'pop': '6px 6px 0px 0px rgba(30, 58, 138, 1)',
                'pop-hover': '2px 2px 0px 0px rgba(30, 58, 138, 1)',
                'pop-yellow': '6px 6px 0px 0px rgba(244, 114, 182, 1)',
                'pop-yellow-hover': '2px 2px 0px 0px rgba(244, 114, 182, 1)',
                'pop-white': '4px 4px 0px 0px #ffffff',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
            },
            animation: {
                'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'marquee': 'marquee 25s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'bounce-x': 'bounceX 1s infinite',
                'shimmer': 'shimmer 2.5s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 12s linear infinite'
            }
        }
    }
};
