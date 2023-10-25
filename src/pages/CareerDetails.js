import {useLoaderData} from "react-router-dom";

const CareerDetails = () => {
    const career = useLoaderData();

    return (
        <div className='career-details'>
            <h2>Career details for: {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className='details'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque laborum repellat reprehenderit tempore.
                Amet earum eligendi esse facilis fugit, itaque necessitatibus obcaecati perspiciatis recusandae
                repudiandae sequi sit suscipit tenetur, voluptatum.
            </div>
        </div>
    )
}

export default CareerDetails

export const careerDetailsLoader = async ({params}) => {
    const {id} = params;

    const res = await fetch('http://localhost:4000/careers/' + id);

    if (!res.ok) {
        throw Error('No such career in db.json')
    }

    return res.json()
}