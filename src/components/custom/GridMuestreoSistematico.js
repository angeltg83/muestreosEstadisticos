import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomerService } from "../../service/CustomerService";

export const GridMuestreoSistematico = ({ muestra, getNumAleatorio, setPoblacion, nuevaArrPoblacion = [] }) => {
    const [customer1, setCustomer1] = useState();
    const [selectedCustomers1, setSelectedCustomers1] = useState(null);
    const [loading1, setLoading1] = useState(true);

    useEffect(() => {
        console.log("muestra en grid ", muestra);
        console.log("entro form!!", setPoblacion);

        const customerService = new CustomerService();
        // const productService = new ProductService();
        // productService.getProductsWithOrdersSmall().then((data) => setProducts(data));
        customerService.getCustomersMedium().then((data) => {
            console.log("000 ", data[0]);

            const { arrAleatorios } = getNumAleatorio(muestra, data[0].id, data[data.length - 1].id); //toda la poblacion...
            //  arrAleatorios.push({ num: i + inicio });

            let tempData = [];
            // var idPoblacion = 0;
            // var idPob = 0;
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
                    // console.log("indexPoblacion", indexPoblacion);
                    arrIdPoblacion.push({ indexPoblacion: indexPoblacion++, ...tempData[x] });
                }
            }
            console.log("aqui.111");
            if (nuevaArrPoblacion.length > 0) {
                console.log("aqui.222");
                setCustomer1(nuevaArrPoblacion);
                setPoblacion(arrIdPoblacion);
            } else {
                setCustomer1(arrIdPoblacion);
                setPoblacion(arrIdPoblacion);
            }

            setLoading1(false);
        });
    }, [muestra]);// eslint-disable-next-line
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
                        </DataTable>
                    </div>
                </div>
            </div>
        </>
    );
};
