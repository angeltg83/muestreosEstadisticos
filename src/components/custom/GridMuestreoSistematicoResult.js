import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const GridMuestreoSistematicoResult = ({ nuevaArrPoblacion = [] }) => {
    const [customer1, setCustomer1] = useState(nuevaArrPoblacion);
    const [selectedCustomers1, setSelectedCustomers1] = useState(null);
    const [loading1] = useState(false);

    useEffect(() => {
        console.log(nuevaArrPoblacion.length);
        setCustomer1(nuevaArrPoblacion);
    }, [nuevaArrPoblacion]);

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
    const estiloSpan = {
        fontSize: "13px",
        fontWeight: "bolder",
    };
    return (
        <>
            <div className="p-grid table-demo">
                <div className="p-col-12">
                    <div className="card">
                        <span style={estiloSpan}>Registros encontrados: {nuevaArrPoblacion.length}</span>
                        <hr />
                        <DataTable
                            value={customer1}
                            paginator
                            className="p-datatable-customers p-datatable-responsive"
                            rows={10}
                            dataKey="id"
                            rowHover
                            selection={selectedCustomers1}
                            onSelectionChange={(e) => setSelectedCustomers1(e.value)}
                            // globalFilter={globalFilter1}
                            emptyMessage="No hay registros encontrados"
                            loading={loading1}
                        >
                            <Column field="indexPoblacion" sortable header="Población"></Column>
                            <Column field="id" sortable header="id"></Column>
                            <Column field="name" header="Nombre" body={nameBodyTemplate}></Column>
                            <Column field="country.name" header="Ciudad" sortable></Column>
                            <Column field="date" header="Montos ventas" sortable body={dateBodyTemplate}></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </>
    );
};
