export const fetchInfo = async () => {
    const res = await fetch(`http://localhost:4000/general-info`)

    if (!res.ok) {
        throw Error('Something wrong: fetch error')
    }

    return res.json()
}