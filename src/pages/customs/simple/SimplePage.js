import React, {useState} from "react";
import { FormCalculoMuestra } from "../../../components/custom/FormCalculoMuestra";

export const SimplePage = () => {
    const [muestra, setMuestra] = useState();
    return (
        <>
            <div className="p-grid overlay-demo">
                <div className="p-col-12 p-lg-6">
                    <FormCalculoMuestra />
                </div>
                <div className="p-col-12 p-lg-6">
                    <FormCalculoMuestra tipo="finita" setMuestra={setMuestra} />
                </div>
            </div>
        </>
    );
};
