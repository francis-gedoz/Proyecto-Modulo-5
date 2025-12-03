import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NetworkList({ networks }) {
    return (
        <div>
        {networks.map((net) => (
            <Card key={net.id} sx={{ mb: 2, p: 1 }}>
            <CardContent>
                <Typography variant="h6">{net.name}</Typography>
                <Typography>{net.location.city}, {net.location.country}</Typography>
                <Button component={Link} to={`/stations/${net.id}`} variant="contained" sx={{ mt: 1 }}>
                VER ESTACIONES
                </Button>
            </CardContent>
            </Card>
        ))}
        </div>
    );
}

export default NetworkList;