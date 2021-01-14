import React from "react";
// import { Dialog } from "primereact/dialog";
// import { Button } from "primereact/button";
// import { Sidebar } from "primereact/sidebar";
// import { Toast } from "primereact/toast";
// import { Column } from "primereact/column";
// import { DataTable } from "primereact/datatable";
// import { OverlayPanel } from "primereact/overlaypanel";
// import { InputText } from "primereact/inputtext";
// import { ProductService } from '../service/ProductService';

// import { Dropdown } from "primereact/dropdown";

import { FormCalculoMuestra } from "../../../components/custom/FormCalculoMuestra";

export const SimplePage = () => {
    // const [dropdownValue, setDropdownValue] = useState(null);
    // const [dropdownValueFinita, setDropdownValueFinita] = useState(null);

    // const [valueUniverso, setValueUniverso] = useState("");
    // const [valueP, setValueP] = useState("");
    // const [valueErr, setValueErr] = useState("");
    // const [hasValueErr, setHasValueErr] = useState("");

    // const [valueQ, setValueQ] = useState("");
    // const [n, setN] = useState(null);
    // const [nFinito, setNFinito] = useState(null);

    // const toast = useRef(null);
    // const dropdownValues = [
    //     { name: "99.7%", code: 3 },
    //     { name: "99%", code: 2.58 },
    //     { name: "98%", code: 2.33 },
    //     { name: "96%", code: 2.05 },
    //     { name: "95%", code: 1.96 },
    //     { name: "90%", code: 1.645 },
    //     { name: "80%", code: 1.28 },
    //     { name: "50%", code: 0.674 },
    // ];

    // const handleChange = (e) => {
    //     console.log("name ", e.target.id);
    //     console.log("input", e.target.value);

    //     if (e.target.id === "valueErr") {
    //         setValueErr(e.target.value);
    //     }

    //     if (e.target.id === "valueP") {
    //         setValueP(e.target.value);
    //     }

    //     if (e.target.id === "valueQ") {
    //         setValueQ(e.target.value);
    //     }
    // };

    // const handleChangeFinita = (e) => {
    //     if (e.target.id === "valueTamanoUniverso") {
    //         setValueUniverso(e.target.value);
    //     }

    //     if (e.target.id === "valueErr") {
    //         setValueErr(e.target.value);
    //     }

    //     if (e.target.id === "valueP") {
    //         setValueP(e.target.value);
    //     }

    //     if (e.target.id === "valueQ") {
    //         setValueQ(e.target.value);
    //     }
    // };
    // const handleDropChange = (e) => {
    //     console.log("handleDropChange", e.target.value);
    //     setDropdownValue(e.target.value);
    // };

    // const handleDropChangeFinita = (e) => {
    //     // console.log("handleDropChange XX ", e.target.value);
    //     setDropdownValueFinita(e.target.value);
    // };

    // const handleSubmit = () => {
    //     // setDisplayBasic(false);
    //     console.log("select ", dropdownValue);
    //     console.log(valueP, valueErr, valueQ);
    //     if (dropdownValue) {
    //         const n = (dropdownValue.code * dropdownValue.code * valueP * valueQ) / (valueErr * valueErr);
    //         console.log("n", n);
    //         setN(n);
    //     } else {
    //         setN(0);
    //     }
    // };

    // const handleSubmitFinita = () => {
    //     // setDisplayBasic(false);
    //     console.log("select ", dropdownValueFinita);
    //     console.log(valueP, valueErr, valueQ);
    //     if (dropdownValueFinita) {
    //         const varianza = dropdownValueFinita.code * dropdownValueFinita.code * valueP * valueQ;
    //         const n = (valueUniverso * varianza) / (valueErr * valueErr * (valueUniverso - 1) + varianza);
    //         console.log("n", n);
    //         setNFinito(n);
    //     } else {
    //         setNFinito(0);
    //     }
    // };

    // const styleCustom = {
    //     fontSize: "23px",
    // };
    // const styleCustomErr = {
    //     color: "red",
    //     fontSize: "11px",
    // };
    // const handleBlur = (e) => {
    //     console.log("err", e);
    //     console.log("ss", valueErr);
    //     if (isNaN(valueErr)) {
    //         console.log("No es un num");
    //         setHasValueErr("El campo es númerico");
    //     } else {
    //         setHasValueErr("");
    //     }
    // };
    return (
        <>
            {/* <Toast ref={toast} /> */}
            <div className="p-grid overlay-demo">
                <div className="p-col-12 p-lg-6">
                    <FormCalculoMuestra />

                    {/* <div className="card">
                        <h3>Cálculo tamaño de muestra infinita</h3>
                        <hr></hr>
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="name1">Nivel de confianza [Z]</label>
                                <Dropdown value={dropdownValue} onChange={handleDropChange} options={dropdownValues} optionLabel="name" placeholder="Seleccione nivel de confianza" />
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="errorMaximo">Error máximo [e]</label>
                                <InputText id="valueErr" type="text" onBlur={handleBlur} onChange={handleChange} />
                                <span style={styleCustomErr}>{hasValueErr}</span>
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="prob[Q]">Probabilidad de que ocurra el evento [P]</label>
                                <InputText id="valueP" type="text" onChange={handleChange} />
                            </div>

                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="prob[Q]">Probabilidad de que no ocurra el evento [Q]</label>
                                <InputText id="valueQ" type="text" onChange={handleChange} />
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <strong>
                                    <p style={styleCustom}> n: {Math.round(n * 100) / 100}</p>
                                </strong>
                            </div>
                            <Button type="button" label="Procesar" onClick={handleSubmit} icon="pi pi-check" className="p-button-success" />
                        </div>
                    </div> */}
                </div>
                <div className="p-col-12 p-lg-6">
                    <FormCalculoMuestra tipo="finita" />

                    {/* <div className="card">
                        <h3>Cálculo tamaño de muestra finita</h3>
                        <hr></hr>
                        <div className="p-fluid p-formgrid p-grid">
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="tamanoUniverso">Tamaño de la población o universo [N]</label>
                                <InputText id="valueTamanoUniverso" type="text" onChange={handleChangeFinita} />
                            </div>

                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="name1">Nivel de confianza [Z]</label>
                                <Dropdown value={dropdownValueFinita} onChange={handleDropChangeFinita} options={dropdownValues} optionLabel="name" placeholder="Seleccione nivel de confianza" />
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="errorMaximo">Error máximo [e]</label>
                                <InputText id="valueErr" type="text" onBlur={handleBlur} onChange={handleChangeFinita} />
                                <span style={styleCustomErr}>{hasValueErr}</span>
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="prob[Q]">Probabilidad de que ocurra el evento [P]</label>
                                <InputText id="valueP" type="text" onChange={handleChangeFinita} />
                            </div>

                            <div className="p-field p-col-12 p-md-6">
                                <label htmlFor="prob[Q]">Probabilidad de que no ocurra el evento [Q]</label>
                                <InputText id="valueQ" type="text" onChange={handleChangeFinita} />
                            </div>
                            <div className="p-field p-col-12 p-md-6">
                                <strong>
                                    <p style={styleCustom}> n: {Math.round(nFinito * 100) / 100}</p>
                                </strong>
                            </div>

                            <Button type="button" label="Procesar" onClick={handleSubmitFinita} icon="pi pi-check" className="p-button-success" />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};
