import React, { useState } from "react";
// import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import { FormMuestreoAleatorioSimple } from "../../components/custom/FormMuestreoAleatorioSimple";

export const FormCalculoEstratos = ({ tipo = "infinita", setMuestra }) => {
    const [valueUniverso, setValueUniverso] = useState(0);
    const [arrayEstratos, setArrayEstratos] = useState([]);
    const [acumTotal, setAcumTotal] = useState(0);

    const [valueNumEstratos, setValueNumEstratos] = useState(1);
    const [hasErrorNumEstratos, setHasErrorNumEstratos] = useState("");
    const [hasValueTamanoUniverso, setHasValueTamanoUniverso] = useState("");
    const [callMuestreoSimple, setCallMuestreoSimple] = useState(false);
    const handleChange = (e) => {
        // console.log("name ", e.target.id);
        // console.log("input", e.target.value);
        // console.log("aaaaaaaaa");

        if (e.target.id === "valueNumEstratos") {
            console.log("e.target.value ",e.target.value)
            if (parseInt(e.target.value) > 0) {
                setValueNumEstratos(e.target.value);
            }
        }

        // if (e.target.id === "valueQ") {
        //     setValueQ(e.target.value);
        // }

        if (e.target.id === "valueUniverso") {
            console.log("e.target.id **** ", e.target.id);
            setValueUniverso(e.target.value);
        }
    };

    const handleSubmit = () => {
        console.log("submit");
        setCallMuestreoSimple(true);
    };

    const styleCustomErr = {
        color: "red",
        fontSize: "11px",
    };

    const handleBlur = (e) => {
        if (tipo === "finita") {
            // console.log("valueUniverso ----->", valueUniverso);
            if (isNaN(valueUniverso)) {
                console.log("No es un num");
                setHasValueTamanoUniverso("El campo debe ser númerico");
            } else {
                if (valueUniverso > 0) {
                    setHasValueTamanoUniverso("");
                    setMuestra(valueUniverso);
                } else {
                    setHasValueTamanoUniverso("Tamaño de la población debe ser mayor a 0");
                }
            }
            console.log("entro!!! blur",isNaN(valueNumEstratos))
            console.log("entro!!! blur valueNumEstratos ",valueNumEstratos )
            if (isNaN(valueNumEstratos)) {
                console.log("No es un num");
                setHasErrorNumEstratos("El campo debe ser númerico");
            } else {
                if (parseInt(valueNumEstratos) > 0) {
                    let arrEstrat = [];
                    for (let index = 0; index < valueNumEstratos; index++) {
                        arrEstrat.push({ id: index, value: 0 });
                    }
                    setArrayEstratos(arrEstrat);

                    setHasErrorNumEstratos("");
                } else {
                    setHasErrorNumEstratos("Tamaño de la población debe ser mayor a 0");
                }
            }
        }
    };

    const handleChangeArray = (e) => {
        // console.log("event oooo ", e.target.value);
        // console.log("event oooo valueNumEstratos ", valueNumEstratos);
        // console.log("valueUniverso ", valueUniverso);

        // console.log("e.target.id ", e.target.id);
        let acTotal = 0;

        for (let r of arrayEstratos) {
            console.log("r ", r);
            console.log("e.target.id ", e.target.id);
            if (e.target.value && r.id == parseInt(e.target.id)) {
                // console.log("\n\n\nentro!!", r);
                r.value = parseInt(e.target.value);
                // console.log("rrrrr", r);
            }
            acTotal += r.value;
        }
        setArrayEstratos(arrayEstratos);
        console.log("acum ", arrayEstratos);
        setAcumTotal(acTotal);
    };
    // const getValuesArr = (e) => {
    //     console.log("ssss", arrayEstratos);
    // };

    const getInputs = () => {
        let rows = [];
        arrayEstratos.map((i, key) => {
            rows.push(
                <div className="p-field p-col-12 p-md-2">
                    {key === arrayEstratos.length - 1 ? (
                        <div key={i.id}>
                            {/* autoFocus={true} */}
                            <InputText key={key} id={i.id} type="text" autoComplete="off" readOnly value={valueUniverso - acumTotal} />
                        </div>
                    ) : (
                        <InputText key={key} id={i.id} autoComplete='off' type="text" autoComplete="off" onChange={handleChangeArray} />
                    )}
                </div>
            );
        });
        return rows;
    };

    const getNumAleatorio = (muestra, inicio, fin) => {
        var arrAleatorios = [];
        const numPosibilidades = fin - inicio + 1;

        console.log("posi", numPosibilidades);
        for (let index = 0; index < muestra; index++) {
            // console.log("index ", index);
            // let i = ;
            let i = Math.floor(Math.random() * numPosibilidades);
            // console.log(" i ", i);
            arrAleatorios.push({ num: i + inicio });
        }

        console.log(arrAleatorios.length);
        return { arrAleatorios };
    };

    const generarGrids = () => {
        let rows = [];
        arrayEstratos.map((i, key) => {
            var fin = i.value;
            // 300 ,
            // console.log("arrAleatorios DDDc", arrAleatorios);
            if (i.value === 0) {
                fin = valueUniverso - acumTotal;
            }
            rows.push(
                <FormMuestreoAleatorioSimple rowArr={i} muestra={fin} getNumAleatorio={getNumAleatorio} />
            );
        });
        return rows;
    };

    return (
        <>
            <div className="card p-field p-col-12 p-md-6">
                <h3>Cálculo tamaño de muestra por estratos</h3>
                <hr></hr>
                <div className="p-fluid p-formgrid p-grid">
                    {tipo === "finita" ? (
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="tamanoUniverso">Tamaño de la población o universo [N]</label>
                            <InputText id="valueUniverso" autoComplete='off' type="text" onBlur={handleBlur} onChange={handleChange} />
                            <span style={styleCustomErr}>{hasValueTamanoUniverso}</span>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="name1">Número de estratos</label>
                        <InputText id="valueNumEstratos" type="text" autoComplete='off' onBlur={handleBlur} onChange={handleChange} />
                        <span style={styleCustomErr}>{hasErrorNumEstratos}</span>
                    </div>
                    {valueNumEstratos > 0 ? getInputs() : ""}
                    <Button type="button" label="Procesar" onClick={handleSubmit} icon="pi pi-check" className="p-button-success" />
                </div>
            </div>
            {callMuestreoSimple === true ? generarGrids() : ""}
        </>
    );
};
