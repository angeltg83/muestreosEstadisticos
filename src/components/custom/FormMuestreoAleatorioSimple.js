import React, { useState, useRef, useEffect } from "react";
// // import { Dialog } from "primereact/dialog";
// import { Button } from "primereact/button";
// import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
// // import { Sidebar } from "primereact/sidebar";
// // import { Toast } from "primereact/toast";
// // import { Column } from "primereact/column";
// // import { DataTable } from "primereact/datatable";
// // import { OverlayPanel } from "primereact/overlaypanel";
// // import { ProductService } from '../service/ProductService';

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { ProductService } from "../../service/ProductService";
import { CustomerService } from "../../service/CustomerService";
import { InputText } from "primereact/inputtext";
import { ProgressBar } from "primereact/progressbar";

{
    /* <FormMuestreoAleatorioSimple muestra={muestra} getNumAleatorio={getNumAleatorio} /> */
}
export const FormMuestreoAleatorioSimple = ({ muestra, getNumAleatorio, rowArr }) => {
    
    const [customer1, setCustomer1] = useState(null);
    const [selectedCustomers1, setSelectedCustomers1] = useState(null);
    const [loading1, setLoading1] = useState(true);
    // const [idPoblacion, setIdPoblacion] = useState(0);

    useEffect(() => {
        // console.log("muestra en grid ", muestra);
        // console.log("entro form!!", rowArr);

        const customerService = new CustomerService();
        customerService.getCustomersMedium().then((data) => {
            // console.log("000 ", data[0]);

            const { arrAleatorios } = getNumAleatorio(muestra, data[0].id, data[data.length - 1].id); //toda la poblacion...
            let tempData = [];
            for (let x of arrAleatorios) {
                for (let y of data) {
                    if (typeof y.id !== "undefined" && y.id === x.num) {
                        tempData.push(y);
                    }
                }
            }
            console.log("fin ", tempData.length);

            let arrIdPoblacion = [];
            if (tempData.length > 0) {
                let indexPoblacion = 1;
                for (let x in tempData) {
                    arrIdPoblacion.push({ indexPoblacion: indexPoblacion++, ...tempData[x] });
                }
            }
            setCustomer1(arrIdPoblacion);

            setLoading1(false);
        });
    }, [muestra]);
    const nameBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title">Name</span>
                {data.name}
            </>
        );
    };
  
    const dateBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title">Date</span>
                {data.date}
            </>
        );
    };

  

    return (
        <>
            <div className="p-grid table-demo">
                <div className="p-col-12">
                    <div className="card">
                        <h5>Listado asesores comerciales</h5>
                        {/* <p>Pagination, sorting, filtering and checkbox selection.</p> */}
                        <DataTable
                            value={customer1}
                            paginator
                            className="p-datatable-customers p-datatable-responsive"
                            rows={3}
                            dataKey="id"
                            rowHover
                            selection={selectedCustomers1}
                            onSelectionChange={(e) => setSelectedCustomers1(e.value)}
                            // globalFilter={globalFilter1}
                            emptyMessage="No hay registros encontrados"
                            loading={loading1}
                            // header={customer1TableHeader}
                            // body={representativeBodyTemplate}
                        >
                            {/* body={countryBodyTemplate} */}
                            <Column field="indexPoblacion" sortable header="Población"></Column>
                            <Column field="id" sortable header="id"></Column>
                            <Column field="name" header="Nombre" body={nameBodyTemplate}></Column>
                            <Column field="country.name" header="Ciudad" sortable></Column>
                            <Column field="date" header="Montos ventas" sortable body={dateBodyTemplate}></Column>
                            {/* <Column field="representative.name" header="Asesor comercial" ></Column> */}
                            {/* <Column selectionMode="multiple" headerStyle={{ width: "3em" }}></Column> */}
                            {/* <Column field="status" header="Status" sortable body={statusBodyTemplate}></Column> */}
                            {/* <Column field="activity" header="Activity" sortable body={activityBody}></Column> */}
                            {/* <Column headerStyle={{ width: "8rem", textAlign: "center" }} bodyStyle={{ textAlign: "center", overflow: "visible" }} body={actionTemplate}></Column> */}
                        </DataTable>
                    </div>
                </div>
            </div>
        </>
    );
};
