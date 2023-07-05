const loadCareerDetails = async ({params}) => {
    const {id} = params
    const res = await fetch("http://localhost:4000/careers/" + id)
    const careerDetail =  await res.json()
    if (!res.ok) {
        throw Error("Could not find that career")
    }
    return careerDetail;
}

export default loadCareerDetails;