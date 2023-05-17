import React, { useState, useEffect } from "react";
import "./TableMetaAsesor.css";
import axios from "axios";

const TableMetaAsesor = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.amstigo.com.co/mto/mestasAsesor/index.php`)
      .then(function (res) {
        setDataTable(res.data);
      });
  }, []);

  return (
    <>
      <div className="misTables">
      {dataTable.map((x) => (
        <div key={x.id} className="container-table">
          <div className="titel-table">Metas Asesor</div>

          <div className="data-table">
            <div className="data-table_grid">
              <div className="grid-column light-gray line-button">
                Antiguedad
              </div>
              <div className="grid-column light-gray line-button">KPI</div>
              <div className="grid-column line-button">Acum. Mes</div>
              <div className="grid-column line-button">S1</div>
              <div className="grid-column line-button">S2</div>
              <div className="grid-column line-button">S3</div>
              <div className="grid-column line-button">S4</div>
              <div className="grid-column line-button">S5</div>
              <div className="grid-row light-gray bold-font text-button">
                {x.Antiguedad}{" "}
              </div>
              <div className="grid-row light-gray">Bitacoras</div>
              <div className="grid-row">{x.Meta_Bitacoras}</div>
              <div className="number-data">{x.Meta_Bitacoras_s1}</div>
              <div className="number-data">{x.Meta_Bitacoras_s2}</div>
              <div className="number-data">{x.Meta_Bitacoras_s3}</div>
              <div className="number-data">{x.Meta_Bitacoras_s4}</div>
              <div className="number-data">{x.Meta_Bitacoras_s5}</div>

              <div className="grid-row light-gray line-button"></div>
              <div className="grid-row light-gray line-button">Dias</div>
              <div className="grid-row line-button">{x.Meta_dia}</div>
              <div className="number-data line-button">{x.Meta_dia_s1}</div>
              <div className="number-data line-button">{x.Meta_dia_s2}</div>
              <div className="number-data line-button">{x.Meta_dia_s3}</div>
              <div className="number-data line-button">{x.Meta_dia_s4}</div>
              <div className="number-data line-button">{x.Meta_dia_s5}</div>
            </div>
          </div>
        </div>
      ))}

      </div>
    </>
  );
};

export default TableMetaAsesor;
