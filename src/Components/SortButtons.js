import React from 'react';

function SortButtons(props) {
    return (
        <div>
            <label className={"sortButton " + (props.selectedOption === "option1" ? "active" : "inactive")}>
                <input type="radio" value="option1" checked={props.selectedOption === "option1"} onChange={props.handleOptionChange} />
                sort <b>alphabetically</b>
            </label>
            <label className={"sortButton " + (props.selectedOption === "option2" ? "active" : "inactive")}>
                <input type="radio" value="option2" checked={props.selectedOption === "option2"} onChange={props.handleOptionChange} />
                sort by <b>price</b>
            </label>
            <label className={"sortButton " + (props.selectedOption === "option3" ? "active" : "inactive")}>
                <input type="radio" value="option3" checked={props.selectedOption === "option3"} onChange={props.handleOptionChange} />
                sort by <b>age</b>
            </label>
        </div>
    )
}  

export default SortButtons;