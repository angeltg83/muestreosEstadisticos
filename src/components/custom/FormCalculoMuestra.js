import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";


export const FormCalculoMuestra = ({ tipo = "infinita", setMuestra, botonProcesar }) => {
    const [dropdownValue, setDropdownValue] = useState(null);
    const [dropdownValueErrorMaximo, setDropdownValueErrorMaximo] = useState(null);

    const [valueUniverso, setValueUniverso] = useState(0);
    const [valueP, setValueP] = useState(0);
    const [valueErr, setValueErr] = useState("");
    const [, setHasValueErr] = useState("");
    const [hasValueErrP, setHasValueErrP] = useState("");
    // const [hasValueErrQ, setHasValueErrQ] = useState("");
    const [hasValueTamanoUniverso, setHasValueTamanoUniverso] = useState("");

    const [valueQ, setValueQ] = useState("");
    const [n, setN] = useState(0);
    // const [nFinito, setNFinito] = useState(null);

    // const toast = useRef(null);
    const dropdownValues = [
        // { name: "99.7%", code: 3 },
        { name: "99%", code: 2.58 },
        { name: "98%", code: 2.33 },
        { name: "97%", code: 2.08 },
        { name: "96%", code: 2.06 },
        { name: "95%", code: 1.96 },
        { name: "94%", code: 1.71 },
        { name: "93%", code: 1.699 },
        { name: "92%", code: 1.681 },
        { name: "91%", code: 1.663 },
        { name: "90%", code: 1.645 },
        { name: "80%", code: 1.282 },
        { name: "70%", code: 1.034 },
        { name: "60%", code: 0.845 },
        { name: "50%", code: 0.6745 },
    ];

    const dropValuesErr = [
        { name: "1", code: 1 },
        { name: "2", code: 2 },
        { name: "3", code: 3 },
        { name: "4", code: 4 },
        { name: "5", code: 5 },
        { name: "6", code: 6 },
        { name: "7", code: 7 },
        { name: "8", code: 8 },
        { name: "9", code: 9 },
        { name: "10", code: 10 },
    ];

    const handleChange = (e) => {
        console.log("name ", e.target.id);
        console.log("input", e.target.value);
        console.log("aaaaaaaaa");

        if (e.target.id === "valueErr") {
            setValueErr(e.target.value);
        }

        if (e.target.id === "valueP") {
            if (e.target.value) {
                setValueP(e.target.value);
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

   
    const handleDropChange = (e) => {
        console.log("handleDropChange", e.target);
        if (e.target.id !== "dropdownValueErrorMaximo") {
            setDropdownValue(e.target.value);
        } else {
            setDropdownValueErrorMaximo(e.target.value);
            // (e.target.value);
        }
    };

 
    const handleSubmit = () => {
        if (tipo !== "infinita") {
            calculoMuestrafinita();
        } else {
            calculoMuestrainfinita();
        }
    };

    const calculoMuestrainfinita = () => {
        console.log("select ", dropdownValue);
        console.log(valueP, valueErr, valueQ);

        console.log("potencia ", dropdownValue.code * dropdownValue.code);
        if (dropdownValue) {
            let n1 = (Math.pow(dropdownValue.code, 2) * (valueP / 100) * (valueQ / 100)) / Math.pow(valueErr / 100, 2);
            console.log("n1", n1);
            const n = Math.round(n * 100) / 100;
            setN(n);
        } else {
            setN(0);
        }
    };

    const calculoMuestrafinita = () => {
        // setDisplayBasic(false);
        console.log("select 0000 ", dropdownValue);
        console.log(valueP, valueQ, valueUniverso);
        console.log("err max", dropdownValueErrorMaximo);
        if (dropdownValue && dropdownValueErrorMaximo) {
            const varianza = Math.pow(dropdownValue.code, 2) * (valueP / 100) * (valueQ / 100);
            let n1 = (valueUniverso * varianza) / (Math.pow(dropdownValueErrorMaximo.code / 100, 2) * (valueUniverso - 1) + varianza);
            console.log("n", n1);
            const n = Math.round(n1 * 100) / 100;
            setN(n);
            setMuestra(n);
        } else {
            setN(0);
        }
    };

    const styleCustom = {
        fontSize: "23px",
    };
    const styleProbQ = {
        fontSize: "20px",
    };
    const styleCustomErr = {
        color: "red",
        fontSize: "11px",
    };

    const handleBlur = (e) => {
        // console.log("err", e);
        // console.log("valueUniverso ", valueUniverso);
        if (isNaN(valueErr)) {
            console.log("No es un num");
            setHasValueErr("El campo debe ser númerico");
        } else {
            setHasValueErr("");
        }

        if (isNaN(valueP)) {
            console.log("No es un num");
            setHasValueErrP("El campo debe ser númerico");
        } else {
            // console.log("valueP +++++ ", valueP);
            if (valueP) {
                let valQ = 100 - parseInt(valueP);
                console.log("valueQ  **** ", valQ);
                setHasValueErrP("");
                setValueQ(valQ);
            }
        }

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
        }
    };
    return (
        <>
            <div className="card">
                <h3>Cálculo tamaño de muestra {tipo}</h3>
                <hr></hr>
                <div className="p-fluid p-formgrid p-grid">
                    {tipo === "finita" ? (
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="tamanoUniverso">Tamaño de la población o universo [N]</label>
                            <InputText id="valueUniverso" type="text" autoComplete="off" onBlur={handleBlur} onChange={handleChange} />
                            <span style={styleCustomErr}>{hasValueTamanoUniverso}</span>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="name1">Nivel de confianza [Z]</label>
                        <Dropdown id="dropdownValue" value={dropdownValue}  autoComplete="off" onChange={handleDropChange} options={dropdownValues} optionLabel="name" placeholder="Seleccione nivel de confianza" />
                    </div>

                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="prob[Q]">Probabilidad de que ocurra el evento [P]</label>
                        <InputText id="valueP" type="text" autoComplete="off" onBlur={handleBlur} onChange={handleChange} />
                        <span style={styleCustomErr}>{hasValueErrP}</span>
                    </div>

                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="prob[Q]">Probabilidad de que no ocurra el evento [Q]</label>
                        {/* <p style={styleProbQ}>{valueQ}</p> */}
                        <InputText id="valueUniverso" type="text" autoComplete="off" value={valueQ} readOnly  />

                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="name1">Error máximo</label>
                        <Dropdown id="dropdownValueErrorMaximo" value={dropdownValueErrorMaximo} onChange={handleDropChange} options={dropValuesErr} optionLabel="name" placeholder="Seleccione error" />
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <strong>
                            <p style={styleCustom}> n: {n}</p>
                        </strong>
                    </div>
                    {botonProcesar ? <Button type="button" label="Procesar" onClick={handleSubmit} icon="pi pi-check" className="p-button-success" /> : ""}
                </div>
            </div>
        </>
    );
};
