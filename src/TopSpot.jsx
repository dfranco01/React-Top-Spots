const TopSpot = ({ name, description, location }) => {
    //using array destructuring to extract this info from props passed in
    //as well as to create an array for coordinates
    const [lat, long] = location;
    const mapURL = `https://maps.google.com/?q=${lat},${long}`
    return (
        <>
            {/*constructing single row with appropriate data */}
            <tr data-testid='topspot'>
                <td><h4>{name}</h4></td>
                <td><p>{description}</p></td>
                <td><a href={mapURL} target="_blank" className="btn link-primary">Explore!</a></td>
            </tr>
        </>
    )
};

export default TopSpot;