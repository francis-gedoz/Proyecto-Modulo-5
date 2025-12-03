import React from "react";
import { Link } from "react-router-dom";

function NetworkList({ networks }) {
    return (
        <div>
        {networks.map((net) => (
            <div key={net.id} style={{ marginBottom: "10px" }}>
            <h4>{net.name}</h4>
            <p>{net.location.city}, {net.location.country}</p>

            <Link to={`/stations/${net.id}`}>
                Ver estaciones
            </Link>
            </div>
        ))}
        </div>
    );
}

export default NetworkList;