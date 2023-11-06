export const loader = (productType) => {
    const res = localStorage.getItem(productType)

    if (!res) {
        throw Error('Something wrong: fetch error')
    }

    return JSON.parse(res)
}