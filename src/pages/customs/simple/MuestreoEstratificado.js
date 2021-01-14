import React, { useState } from "react";

// import { FormMuestreoAleatorioSimple } from "../../../components/custom/FormMuestreoAleatorioSimple";
import { FormCalculoEstratos } from "../../../components/custom/FormCalculoEstratos";

export const MuestreoEstratificado = () => {
    const [muestra, setMuestra] = useState(0);
    const [arrayEstratos, setArrayEstratos] = useState([]);
    // const [jsonAleatorio, setJsonAleatorio] = uconst [arrayEstratos, setArrayEstratos] = useState([]);seState([]);

    const getNumAleatorio = (muestra, inicio, fin) => {
        var arrAleatorios = [];
        const numPosibilidades = fin - inicio + 1;

        console.log("posi", numPosibilidades);
        for (let index = 0; index < muestra; index++) {
            // console.log("index ", index);
            // let i = ;
            let i = Math.floor(Math.random() * numPosibilidades);
            // console.log(" i ", i);
            // console.log("result ", inicio + i);
            arrAleatorios.push({ num: i + inicio });
        }

        console.log(arrAleatorios.length);
        return { arrAleatorios };
    };

    return (
        <>
            <FormCalculoEstratos tipo="finita" setMuestra={setMuestra} />
        </>
    );
};
