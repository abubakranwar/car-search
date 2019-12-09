import React from 'react';

function Filter(props) {
    return (
        <div>
            <label className="makeFilter">
                <input type="text" name="make" placeholder="Make" onChange={props.handleFilterChange} />
            </label>
            <label className="transmissionFilter">
                <input type="text" name="transmission" placeholder="Transmission" onChange={props.handleFilterChange}/>
            </label>
        </div>
    );
}

export default Filter;