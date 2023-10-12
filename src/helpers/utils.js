const removeFirstChar = (str, charToRemove) => {
    return str.charAt(0) === charToRemove ? str.slice(1) : str
}

const isNumPositive = (num) => {
    return num > 0
}

export { removeFirstChar, isNumPositive }