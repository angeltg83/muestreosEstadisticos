import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";


export const FormCalculoSistematico = ({setMuestra, setN, setK, setA }) => {
    // const [dropdownValue, setDropdownValue] = useState(null);
    // const [dropdownValueErrorMaximo, setDropdownValueErrorMaximo] = useState(null);

    const [valueUniverso, setValueUniverso] = useState(0);
    const [valueP, setValueP] = useState(0);

    // const [valueErr, setValueErr] = useState("");
    // const [hasValueErr, setHasValueErr] = useState("");
    const [hasValueErrP, setHasValueErrP] = useState("");
    // const [hasValueErrQ, setHasValueErrQ] = useState("");
    const [hasValueTamanoUniverso, setHasValueTamanoUniverso] = useState("");

    // const [valueQ, setValueQ] = useState(1);
    const [valorK, setValorK] = useState(0);
    const [valorA, setValorA] = useState(0);

    const handleChange = (e) => {
        if (e.target.id === "valueUniverso") {
            setValueUniverso(e.target.value);
        }

        if (e.target.id === "valueP") {
            setValueP(e.target.value);
        }
    };

    const handleSubmit = () => {
        if (!isNaN(valueP) && !isNaN(valueUniverso) && valueP && valueUniverso) {
            let valorK = valueUniverso / valueP;
            setValorK(valorK);
            const valA =  Math.random() * valorK
            setValorA(valA);

            setN(valueP);
            setK(valorK);
            setA(valA);
        }

    };


    const styleCustomErr = {
        color: "red",
        fontSize: "11px",
    };

    const handleBlur = (e) => {
        if (isNaN(valueP)) {
            setHasValueErrP("El campo debe ser númerico");
        }

        if (isNaN(valueUniverso)) {
            setHasValueTamanoUniverso("El campo debe ser númerico");
        } else {
            if (valueUniverso > 0) {
                setHasValueTamanoUniverso("");
                setMuestra(valueUniverso);
            } else {
                setHasValueTamanoUniverso("Tamaño de la población debe ser mayor a 0");
            }
        }

    };
    return (
        <>
            <div className="card">
                <h3>Cálculo muestreo sistemático</h3>
                <hr></hr>
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="tamanoUniverso">Tamaño de la población o universo [N]</label>
                        <InputText id="valueUniverso" autoComplete='off' onBlur={handleBlur} onChange={handleChange} type="text" />
                        <span style={styleCustomErr}>{hasValueTamanoUniverso}</span>
                    </div>

                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="prob[Q]">Tamaño de la muestra [n]</label>
                        <InputText id="valueP" type="text" onBlur={handleBlur} onChange={handleChange} autoComplete="off" />
                        <span style={styleCustomErr}>{hasValueErrP}</span>
                    </div>

                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="prob[Q]">Intervalo [K]</label>
                        <InputText id="valueK" type="text" value={valorK} readOnly autoComplete="off" />
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="prob[Q]">Punto partida [A]</label>
                        <InputText id="valueA" value={valorA} type="text" readOnly autoComplete="off" />
                    </div>
                    <Button type="button" label="Procesar" onClick={handleSubmit} icon="pi pi-check" className="p-button-success" />
                </div>
            </div>
        </>
    );
};
