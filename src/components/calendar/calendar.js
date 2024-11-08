import { useEffect } from "react";
import "./calendar.scss";

const Calendar = ({ plan }) => {

    useEffect(() => {
        console.log(plan);
    }, []);

    return(
        <div className="app-calendar-container">
            <h2>Calendar</h2>
            <div className="table">
            {Object.keys(plan).map((day) => (
                <div className="col" key={day}>
                    <p>{day}</p>
                    {Object.keys(plan[day]).map((lesson) => (
                        <div key={lesson} className="row"><span className="lesson">{lesson}.</span> {plan[day][lesson]}</div>
                    ))}
                </div>
            ))}
            </div>
        </div>
    )
};

export default Calendar;