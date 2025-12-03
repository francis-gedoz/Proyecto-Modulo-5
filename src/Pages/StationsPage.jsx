import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import StationList from "../Components/StationList";

function StationsPage() {
    const { id } = useParams();
    const { data } = useFetch(`https://api.citybik.es/v2/networks/${id}`);
    
    if (!data) return <p>Cargando...</p>;

    return (
        <div>
        <h2>Página de estaciones</h2>
        <StationList stations={data.network.stations} />
        </div>
    );
}

export default StationsPage;