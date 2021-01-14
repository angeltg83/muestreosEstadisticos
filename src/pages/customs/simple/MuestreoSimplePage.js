import React, { useEffect, useState } from "react";

import { FormMuestreoAleatorioSimple } from "../../../components/custom/FormMuestreoAleatorioSimple";
import { FormCalculoMuestra } from "../../../components/custom/FormCalculoMuestra";

export const MuestreoSimplePage = ({ botonProcesar = true, muestraUni = 0 }) => {
    const [muestra, setMuestra] = useState(muestraUni);
    // const [jsonAleatorio, setJsonAleatorio] = useState([]);

    useEffect(() => {
        console.log("muestra obtenida", muestra);
        // const { arrAleatorios } = getNumAleatorio(muestra, 1000, 1049);
        // setJsonAleatorio(arrAleatorios);
        // console.log("fin ", arrAleatorios);
    }, [muestra]);

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
            <div className="p-grid overlay-demo">
                {/* <div className="p-col-12 p-lg-6"></div> */}
                <div className="p-col-12 p-lg-6">
                    <FormCalculoMuestra tipo="finita" setMuestra={setMuestra} botonProcesar={botonProcesar} />
                </div>
            </div>
            <FormMuestreoAleatorioSimple muestra={muestra} getNumAleatorio={getNumAleatorio} />
        </>
    );
};
