import { useState } from "react";
import "./style.css"

const Checkboxes = () => {
    const [interests, setInterests] = useState({
        coding: false,
        music: false,
        reading: false
    })
    const handleCheckBoxChange = (event) => {
        const {id, checked} = event.target;
        if (id === "all") {
            setInterests({
                coding: checked,
                music: checked,
                reading: checked
            });
        } else {
            const updatedInterests = {
                ...interests,
                [id]: checked
            };
            setInterests(updatedInterests);
        }
    }
    return (
        <div className="interests-wrapper">
            <div className="interests-list">
                <p>Choose your interests</p>
                <p>
                    <input type="checkbox" name="interests" id="all" checked={Object.keys(interests).every(key => interests[key])} onChange={handleCheckBoxChange}/>
                    <label htmlFor="all">All</label>
                </p>
                <p>
                    <input type="checkbox" name="interests" id="coding" checked={interests.coding} onChange={handleCheckBoxChange}/>
                    <label htmlFor="coding">Coding</label>
                </p>
                <p>
                    <input type="checkbox" name="interests" id="music" checked={interests.music} onChange={handleCheckBoxChange}/>
                    <label htmlFor="music">Music</label>
                </p>
                <p>
                    <input type="checkbox" name="interests" id="reading" checked={interests.reading} onChange={handleCheckBoxChange}/>
                    <label htmlFor="reading">Reading books</label>
                </p>
                <p>You selected:</p>
                <p>{JSON.stringify(interests)}</p>
            </div>
        </div>
    )
}

export default Checkboxes;