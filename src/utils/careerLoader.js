const loadCareers = async () => {
    const res = await fetch("http://localhost:4000/careers")
    const data = await res.json()
    if (!res.ok) {
        throw Error("Could not fetch Careers")
    }
    return data;
}

export default loadCareers;