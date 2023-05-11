import React from 'react';
import './TableMetaAsesor.css'

const TableMetaAsesor= ()=>{

    return(
    
        
        <div className="container-table">
        <div className="titel-table">
            Metas Asesor
        </div>

        <div className="data-table">
            <div className="data-table_grid">
                <div className="grid-column light-gray line-button">Antiguedad</div>
                <div className="grid-column light-gray line-button">KPI</div>
                <div className="grid-column line-button">Acum. Mes</div>
                <div className="grid-column line-button">S1</div>
                <div className="grid-column line-button">S2</div>
                <div className="grid-column line-button">S3</div>
                <div className="grid-column line-button">S4</div>
                <div className="grid-column line-button">S5</div>
            
                <div className="grid-row light-gray bold-font text-button">Mayor 60 </div>
                <div className="grid-row light-gray">Bitacoras</div>
                <div className="grid-row">58</div>
                <div className="number-data">0</div>
                <div className="number-data">0</div>
                <div className="number-data">11</div>
                <div className="number-data">12</div>
                <div className="number-data">12</div>

                <div className="grid-row light-gray line-button"></div>
                <div className="grid-row light-gray line-button">Dias</div>
                <div className="grid-row line-button">9</div>
                <div className="number-data line-button">0</div>
                <div className="number-data line-button">0</div>
                <div className="number-data line-button">2</div>
                <div className="number-data line-button">3</div>
                <div className="number-data line-button">2</div>
                
                <div className="grid-row light-gray bold-font text-button">Menor 60</div>
                <div className="grid-row light-gray">Bitacoras</div>
                <div className="grid-row">45</div>
                <div className="number-data">0</div>
                <div className="number-data">0</div>
                <div className="number-data">11</div>
                <div className="number-data">12</div>
                <div className="number-data">12</div>

                <div className="grid-row light-gray"></div>
                <div className="grid-row light-gray">Dias</div>
                <div className="grid-row ">9</div>
                <div className="number-data">0</div>
                <div className="number-data">0</div>
                <div className="number-data">4</div>
                <div className="number-data">3</div>
                <div className="number-data">2</div>           
            </div>        
        </div>
    </div> 
        
        
       
    )
}

export default TableMetaAsesor;