import React, { useEffect, useState } from "react";
import { GridMuestreoSistematico } from "../../../components/custom/GridMuestreoSistematico";
import { GridMuestreoSistematicoResult } from "../../../components/custom/GridMuestreoSistematicoResult";
import { FormCalculoSistematico } from "../../../components/custom/FormCalculoSistematico";

export const MuestreoSistematico = ({ botonProcesar = true, muestraUni = 0 }) => {
    const [muestra, setMuestra] = useState(muestraUni);
    const [arrPoblacion, setPoblacion] = useState([]);
    const [nuevaArrPoblacion, setNuevaArrPoblacion] = useState([]);
    const [n, setN] = useState(1);
    const [k, setK] = useState(1);
    const [a, setA] = useState(1);

    useEffect(() => {
        //generar el nuevo array indexando
        // hay  que seleccionar n registros del arrPoblacion, dando [saltos], iniciando en A

        let valA = Math.floor(a); //obtengo la parte entera de [A]
        let nuevoArrPoblacion = [];

        nuevoArrPoblacion.push(arrPoblacion[valA]);
        let acumIndex = 0;
        for (let index = 0; index < n - 1; index++) {
            if (index === 0) {
                acumIndex = valA + k;
            } else {
                acumIndex += k;
            }

            nuevoArrPoblacion.push(arrPoblacion[acumIndex]);
        }

        if (nuevoArrPoblacion.length > 0 && typeof nuevoArrPoblacion[0] !== "undefined") {
            setNuevaArrPoblacion(nuevoArrPoblacion);
        } else {
            setNuevaArrPoblacion([]);
        }
    }, [arrPoblacion, n, k, a]);

    const getNumAleatorio = (muestra, inicio, fin) => {
        var arrAleatorios = [];
        const numPosibilidades = fin - inicio + 1;

        console.log("posi", numPosibilidades);
        for (let index = 0; index < muestra; index++) {
            let i = Math.floor(Math.random() * numPosibilidades);
            arrAleatorios.push({ num: i + inicio });
        }

        console.log(arrAleatorios.length);
        return { arrAleatorios };
    };

    return (
        <>
            <div className="p-grid overlay-demo">
                <div className="p-col-12 p-lg-6">
                    <FormCalculoSistematico tipo="finita" setA={setA} setN={setN} setK={setK} setMuestra={setMuestra} botonProcesar={botonProcesar} />
                </div>
            </div>

            <GridMuestreoSistematico muestra={muestra} n={n} k={k} setPoblacion={setPoblacion} getNumAleatorio={getNumAleatorio} />
            {nuevaArrPoblacion.length > 0 ? <GridMuestreoSistematicoResult nuevaArrPoblacion={nuevaArrPoblacion} /> : ""}
        </>
    );
};
