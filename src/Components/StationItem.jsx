import React from "react";

function StationItem({ station }) {
    return (
        <div style={{ marginBottom: "10px" }}>
        <h4>{station.name}</h4>
        <p>Bicis libres: {station.free_bikes}</p>
        <p>Espacios libres: {station.empty_slots}</p>
        </div>
    );
}

export default StationItem;