const matchDesktop = () => {
    if (typeof window !== "undefined") {
        const queryList = window.matchMedia("min-width: 1024px")
        return queryList.matches
    }
}

export default matchDesktop