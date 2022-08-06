export default function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_LANG":
            const language = state.language === "tr" ? "en" : "en"
            localStorage.setItem('language', language)
            return {
                ...state,
                language,
            }
        case "UPDATE_THEME":
            const theme = state.theme === "light" ? "dark" : "light"
            localStorage.setItem('theme', theme)
            return {
                ...state,
                theme,
            }

        default:
            break;
    }
}