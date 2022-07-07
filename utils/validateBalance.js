const validateBalance = (balance) => {
    return Number(balance.replace(/[$,]/g, ''));
}

export { validateBalance }