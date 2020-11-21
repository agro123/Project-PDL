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

/*
<div className="TableForm">
                <div className="titleLine">
                   
                </div>
                
                <Input.Group style={{display: 'flex'}}>
                    
                    <AutoComplete
                        style={{ width: '8%', margin: '0 2% 2% 0'}}
                        placeholder="No."
                        options={ref}
                        
                    />
                    <AutoComplete

                        style={{ width: '31%', margin: '0 2% 2% 0' }}
                        placeholder="Cliente"
                        options={client}
                    />                   
                </Input.Group>
                
                <div className= 'Table'>
                <ListTable />
                <div />
            </div>
            </div>*/