import {notification} from 'antd';

export function notificacion(type, mensaje) {
  notification[type]({
    message: mensaje
  });
};

export function camposVacios(){
     notification['error']({
          message: 'No pueden quedar campos sin llenar'
     });
};

export function comprobarNumeros(valor){
    //Evalua si el nombre contiene numeros
    if(valor !== undefined && valor !== ''){
      let isNumber = false;
      const numeros="0123456789";
      for(let i=0; i<valor.length; i++){
          if (numeros.indexOf(valor.charAt(i),0)!=-1){
                isNumber = true;
          }
        }

      if(isNumber){
          notificacion('error','No puede tener numeros')
          return;
      }
    }
}

export function comprobarLetras(e){
  const valor = Number(e);
    if(isNaN(valor)){      
      notificacion('error','Solo campos numericos');
      return;
    }
}

export function comprobarEmail(e){
  if(!e.includes('@') || !e.includes('.com')){
    notificacion('error','El correo debe contener un @ y un .com');
    return false;
  }else{
      return true;
  }


}