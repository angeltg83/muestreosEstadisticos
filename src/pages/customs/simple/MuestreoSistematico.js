import React, { useEffect, useState } from "react";

import { GridMuestreoSistematico } from "../../../components/custom/GridMuestreoSistematico";
import { GridMuestreoSistematicoResult } from "../../../components/custom/GridMuestreoSistematicoResult";

// import { FormCalculoMuestra } from "../../../components/custom/FormCalculoMuestra";
import { FormCalculoSistematico } from "../../../components/custom/FormCalculoSistematico";

export const MuestreoSistematico = ({ botonProcesar = true, muestraUni = 0 }) => {
    const [muestra, setMuestra] = useState(muestraUni);
    const [arrPoblacion, setPoblacion] = useState([]);
    const [nuevaArrPoblacion, setNuevaArrPoblacion] = useState([]);
    const [n, setN] = useState(1);
    const [k, setK] = useState(1);
    const [a, setA] = useState(1);

    useEffect(() => {
        console.log("muestra obtenida", muestra);
        console.log("muestra obtenida SSS ", arrPoblacion);

        console.log("muestra obtenida [n] ", n);
        console.log("muestra obtenida [k] ", k);
        console.log("muestra obtenida [a] ", a);

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

        console.log("\n\n\nnuevoArrPoblacion ", nuevoArrPoblacion);
        if (nuevoArrPoblacion.length > 0 && typeof nuevoArrPoblacion[0] !== "undefined") {
            console.log("LLLLLL");
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
                <div className="p-col-12 p-lg-6">
                    <FormCalculoSistematico tipo="finita" setA={setA} setN={setN} setK={setK} setMuestra={setMuestra} botonProcesar={botonProcesar} />
                </div>
            </div>

            <GridMuestreoSistematico muestra={muestra} n={n} k={k} setPoblacion={setPoblacion} getNumAleatorio={getNumAleatorio} />
            {nuevaArrPoblacion.length > 0 ? <GridMuestreoSistematicoResult nuevaArrPoblacion={nuevaArrPoblacion} /> : ""}
        </>
    );
};
