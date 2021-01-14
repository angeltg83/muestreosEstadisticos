import React from 'react';

export const AppFooter = () => {

    return (
        <div className="layout-footer">
            <span className="footer-text" style={{ 'marginRight': '5px' }}>Simulación de Sistemas <i>{(new Date()).getFullYear()}</i></span>
            {/* <img src="assets/layout/images/logo.svg" alt="Logo" width="80" /> */}
            <span className="footer-text" style={{ 'marginLeft': '5px' }}>Universidad de Guayaquil</span>
            <span className="footer-text" style={{ 'marginLeft': '5px' }}>Ciencias Matemáticas y Físicas</span>
        </div>
    );
}
