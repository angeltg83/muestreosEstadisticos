import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomerService } from "../../service/CustomerService";

export const FormMuestreoAleatorioSimple = ({ muestra, getNumAleatorio }) => {
    
    const [customer1, setCustomer1] = useState(null);
    const [selectedCustomers1, setSelectedCustomers1] = useState(null);
    const [loading1, setLoading1] = useState(true);
    useEffect(() => {
        const customerService = new CustomerService();
        customerService.getCustomersMedium().then((data) => {
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
                            <Column field="name" header="Nombre"></Column>
                            <Column field="country.name" header="Ciudad" sortable></Column>
                            <Column field="date" header="Montos ventas" sortable></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </>
    );
};
