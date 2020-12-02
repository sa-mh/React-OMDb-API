import React from 'react';

const Request = (props) => {
    const {data} = props

    return(
        <div>
            <h3>{data.Title}</h3>
            <h3>{data.year}</h3>
            <h3>{data.genre}</h3>
            <h3>{data.plot}</h3>
        </div>
    );
}
export default Request;