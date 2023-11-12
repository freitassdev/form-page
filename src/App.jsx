import { useState, useRef } from 'react';
import './App.css'
import Card from './components/Card/Card';
import { Toast } from 'primereact/toast';
import Planet from './components/Planet/Planet';
var enviar;
function App() {
  const toast = useRef(null)
  enviar = () => {
    toast.current.show({ severity: 'success', summary: 'Sucesso!', detail: 'Dados Enviados com Exito' });
  }
  //cola aqui
  return (
    <>
      <div className='app'>
        <Toast ref={toast} />
        <div className="card-section">
          <Card title="Faça seu Cadastro" type={1} />
        </div>
        <div className="image-section">
          <Planet />
        </div>

      </div>
    </>
  )
}
export function gambiarra() {
  enviar();
}

export default App