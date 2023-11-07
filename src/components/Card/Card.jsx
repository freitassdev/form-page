import { useState, useRef } from 'react';
import './Card.css'
import VanillaTilt from 'vanilla-tilt';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { gambiarra } from '../../App';
function Card({ title, type }) {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 20,
        speed: 400,
        glare: false,
        "max-glare": 0.1
    })
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'São Paulo - SP', code: 'SP' },
        { name: 'Acre - AC', code: 'AC' },
        { name: 'Rio de Janeiro - RJ', code: 'RJ' },
        { name: 'Ceará - CE', code: 'CE' },
        { name: 'Mato Grosso - MG', code: 'MG' },
        { name: 'Goiás - GO', code: 'GO' },
        { name: 'Espirito Santo - ES', code: 'ES' },
        { name: 'Bahia - BA', code: 'BA' },
        { name: 'Maranhão - MA', code: 'MA' },
        { name: 'Amazonas - AM', code: 'AM' }
    ];
    const [text, setText] = useState();
    const [textName, setTextName] = useState();
    const [textArea, setTextArea] = useState();
    const [sex, setSex] = useState('');
    const [checked, setChecked] = useState(false)


    function limpar() {
        setText('')
        setSex('')
        setChecked(false)
        setSelectedCity(null)
        setTextName('')
        setTextArea('')
    }

    return (
        <div className='card'>

            {type === 1 ? (

                <div className="card-container">
                    <div className="card-title">
                        <h1 style={{ textAlign: 'center' }}>{title}</h1>
                        <hr style={{marginTop: "-22px"}} />
                        <br />
                    </div>
                    <div className="card-inputs">
                        <div className='flex flex-row gap-2'>
                            <InputText placeholder="Nome" value={text} onChange={(e) => setText(e.target.value)} />
                            <InputText placeholder="Sobrenome" value={textName} onChange={(e) => setTextName(e.target.value)} />
                        </div>
                        <div className="flex flex-wrap">
                            <div className="flex flex-column">
                                <label style={{ textAlign: "start", color: "#dcd6e3", fontFamily: 'Poppins, sans-serif' }}>Sexo</label>

                                <div className="flex flex-row gap-2 pad">
                                    <RadioButton inputId="masculino" name="masculino" value="masculino" onChange={(e) => setSex(e.value)} checked={sex === 'masculino'} />
                                    <label htmlFor="masculino" className="" >Masculino</label>

                                    <br />

                                    <RadioButton inputId="feminino" name="feminino" value="feminino" onChange={(e) => setSex(e.value)} checked={sex === 'feminino'} />
                                    <label htmlFor="feminino" className="">Feminino</label>

                                </div>
                            </div>
                        </div>
                        
                        <div className='flex flex-column'>
                            <label style={{ textAlign: "start", color: "#dcd6e3", fontFamily: 'Poppins, sans-serif' }}>Estado</label>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="Selecione um Estado" className="w-full " />
                        </div>
                        <div className='flex flex-row pad-2'>
                            <Checkbox name="checkbox" onChange={e => setChecked(e.checked)} checked={checked} optionLabel></Checkbox>
                            <label htmlFor="checkbox" className="ml-2">Li e aceito os termos</label>
                        </div>
                        <div className='flex'>
                            <InputTextarea autoResize value={textArea} onChange={(e) => setTextArea(e.target.value)} rows={3} cols={30} />
                        </div>
                        <div className='flex flex-row justify-content-center align-items-end pad-2 gap-2'>
                            <Button label="Enviar" onClick={() => gambiarra()}></Button>
                            <Button label="Limpar" onClick={() => limpar()}></Button>
                        </div>

                    </div>
                </div>
            ) : (
                <div>
                </div>
            )}
        </div>

    )
}

export default Card;
