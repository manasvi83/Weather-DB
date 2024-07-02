import { FaThermometerEmpty } from "react-icons/fa"
import { BiSolidDropletHalf } from "react-icons/bi"
import { FiWind } from "react-icons/fi"
import { GiSunrise, GiSunset } from "react-icons/gi"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"

const TempDetails = ({ weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    feels_like,
    humidity,
    speed
    },
    units,
}) => {

    const Details = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Feels Like",
            value: `${feels_like.toFixed()}°`,
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`,
        },
        {
            id: 3,
            Icon: FiWind,
            title: "Wind Speed",
            value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
        }
    ]

    const BottomDetails = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise,
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset,
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max.toFixed()}°`,
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min.toFixed()}°`,
        }
    ]

    return (
        <div>
            <div className="flex items-center justify-center py-4 text-xl text-cyan-300">
                <p>{details}</p>
            </div>

            <div className="flex flex-row items-center justify-between py-3 ">
                <img
                    src={icon}
                    alt="weather icon"
                    className="w-20"
                />
                <p className="text-4xl">{`${temp.toFixed()}°`}</p>

                <div className="flex flex-col space-y-4 items-start">
                    {Details.map(({ id, Icon, title, value }) => (
                        <div
                            key={id}
                            className="flex font-light text-sm items-center justify-center"
                        >
                            <Icon size={18} className="mr-1" />
                            {`${title}:`}
                            <span className="font-medium ml-1">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
                {BottomDetails.map(({ id, Icon, title, value }) => (
                    <div key={id} className="flex flex-row items-center ">
                        <Icon size={30} />
                        <p className="ml-1">
                            {`${title}:`}
                            <span className="font-medium ml-1">{value}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TempDetails