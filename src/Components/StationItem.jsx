import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function StationItem({ station }) {
    return (
        <Card sx={{ mb: 2, p: 1 }}>
        <CardContent>
            <Typography variant="h6">{station.name}</Typography>
            <Typography>Bicicletas disponibles: {station.free_bikes}</Typography>
            <Typography>Espacios libres: {station.empty_slots}</Typography>
            <Button
            variant="contained"
            sx={{ mt: 1 }}
            onClick={() => window.open(`https://www.google.com/maps?q=${station.latitude},${station.longitude}`, "_blank")}
            >
            VER EN GOOGLE MAPS
            </Button>
        </CardContent>
        </Card>
    );
}

export default StationItem;