import { useState } from "react"
import { BiSearch, BiCurrentLocation } from "react-icons/bi"

const Inputs = ({ setQuery, setUnits }) => {

    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city !== '') setQuery({ q: city });
    };

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setQuery({ lat: latitude, lon: longitude })
            })
        }
    }

    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder="Search by City.."
                    className="text-gray-500 text-sm font-light p-2 w-full shadow-xl capitalize focus:outline-none rounded-3xl placeholder:lowercase"
                />
                <BiSearch
                    size={30}
                    className="cursor-pointer transiti ease-out hover:scale-125"
                    onClick={handleSearch}
                />
                <BiCurrentLocation
                    size={30}
                    className="cursor-pointer transiti ease-out hover:scale-125"
                    onClick={handleLocation}
                />
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button className="text-xl transition ease-out hover:scale-110"
                onClick={() => setUnits("metric")}
                >
                    °C
                </button>
                <p className="text-2xl  mx-1">|</p>
                <button className="text-xl transition ease-out hover:scale-110"
                onClick={() => setUnits("imperial")}
                >
                    °F
                </button>
            </div>
        </div>
    )
}

export default Inputs

