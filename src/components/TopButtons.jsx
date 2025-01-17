const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id: 1,
            name: 'Delhi'
        },
        {
            id: 2,
            name: 'Mumbai'
        },
        {
            id: 3,
            name: 'Bangalore'
        },
        {
            id: 4,
            name: 'Hyderabad'
        },
        {
            id: 5,
            name: 'Jaipur'
        },
    ];
    return (
        <div className="flex items-center justify-around my-4">
            {
                cities.map((city) => (
                    <button key={city.id} 
                    className="text-lg hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
                    onClick={() => setQuery({ q: city.name})}
                    >
                        {city.name}</button>
                ))
            }
            
        </div>
    )
}

export default TopButtons