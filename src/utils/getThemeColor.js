const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#f5f5f5"
  if (theme === "dark") return "#84a9ac"
}

export default getThemeColor
