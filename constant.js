export const BREAKPOINTS = {
  phone: 860,
  laptop: 1300
}

export const WEIGHTS = {
    normal: 400,
    bold: 700
}

export const COLORS = {
    "darkSlateGray": "hsl(234, 29%, 20%)",
    "charcoalGrey": "hsl(235, 18%, 26%)",
    "white": "hsl(0, 0%, 100%)",
    "grey": "hsl(231, 7%, 60%)",
    "primary": "hsl(4, 100%, 67%)",
    "lightRed": "hsl(4, 100%, 92%)"
}

export const QUERIES = {
    phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
    laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`
}