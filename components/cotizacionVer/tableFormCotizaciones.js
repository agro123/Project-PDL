import { Input, AutoComplete } from 'antd';
import ListTable from './tableCotizaciones';
import Cotizaciones from '../../data/data.json';


const TableFormCotizaciones = () => {

    

         return (
            <div className="TableForm">
            <div className="titleLine">
               
            </div>
            <br />
           
            
            <div className= 'Table'>
            <ListTable />
            <div />
        </div>
        </div>
         )
         
    };

export default TableFormCotizaciones;