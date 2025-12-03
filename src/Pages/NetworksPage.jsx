import React from "react";
import useFetch from "../Hooks/UseFetch";
import NetworkList from "../Components/NetworkList";

function NetworksPage() {
    const { data } = useFetch("https://api.citybik.es/v2/networks");

    if (!data) return <p>Cargando...</p>;

    return (
        <div>
        <h2>Página de redes</h2>
        <NetworkList networks={data.networks} />
        </div>
    );
}

export default NetworksPage;