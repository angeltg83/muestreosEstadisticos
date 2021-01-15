import React, { useState } from "react";
import { FormCalculoEstratos } from "../../../components/custom/FormCalculoEstratos";

export const MuestreoEstratificado = () => {
    const [, setMuestra] = useState(0);
    return (
        <>
            <FormCalculoEstratos tipo="finita" setMuestra={setMuestra} />
        </>
    );
};
