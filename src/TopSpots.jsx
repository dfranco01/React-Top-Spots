import TopSpot from "./TopSpot";
//importing TopSpot component 

const TopSpots = ({ spots }) => {
    return (
        <>
            {/*rendering a table to be filled in by TopSpot */}
            <div data-testid='topspots' className="table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    {/*utilizing TopSpot component */}
                    <tbody>
                        {spots.map((topspot, index) => (
                        <TopSpot
                            key={index}
                            name={topspot.name}
                            description={topspot.description}
                            location={topspot.location}
                        />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TopSpots;
