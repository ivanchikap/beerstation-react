export const loader = async (productType) => {
    const res = await fetch(`http://localhost:4000/${productType}`)

    if (!res.ok) {
        throw Error('Something wrong: fetch error')
    }

    return res.json()
}