import React, { useState } from 'react'

const TemperatureConverter = () => {
  let [temperatura, setTemperatura] = useState('')

  function inserirTempertura(valor) {
    if (valor === '.' && temperatura.includes('.')) {
      return false
    }
    if (valor === '-' && temperatura === '') {
      setTemperatura(valor)
    } else if (valor === '-' && temperatura !== '') {
      return false
    }

    if (valor === '.' && (temperatura === '' || temperatura === '-')) {
      setTemperatura(temperatura + '0.')
      return true
    }
    setTemperatura(temperatura + valor)
  }

  function limpaTecla() {
    temperatura = temperatura.slice(0, -1)
    setTemperatura(temperatura)
  }

  function converter() {
    alert('ok')
  }
  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue={temperatura} />
        <select id="user-choice">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <div className="result" id="celsius-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>C
        </span>
        <div className="result" id="fahrenheit-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>F
        </span>
        <div className="result" id="kelvin-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>K
        </span>
        <button className="tecla" id="converter" onClick={() => converter()}>
          Converter
        </button>
      </aside>
      <aside className="areaTeclas">
        <button className="n1 tecla" onClick={() => inserirTempertura('1')}>
          1
        </button>
        <button className="n2 tecla" onClick={() => inserirTempertura('2')}>
          2
        </button>
        <button className="n3 tecla" onClick={() => inserirTempertura('3')}>
          3
        </button>
        <button className="n4 tecla" onClick={() => inserirTempertura('4')}>
          4
        </button>
        <button className="n5 tecla" onClick={() => inserirTempertura('5')}>
          5
        </button>
        <button className="n6 tecla" onClick={() => inserirTempertura('6')}>
          6
        </button>
        <button className="n7 tecla" onClick={() => inserirTempertura('7')}>
          7
        </button>
        <button className="n8 tecla" onClick={() => inserirTempertura('8')}>
          8
        </button>
        <button className="n9 tecla" onClick={() => inserirTempertura('9')}>
          9
        </button>
        <button className="n0 tecla" onClick={() => inserirTempertura('0')}>
          0
        </button>
        <button
          className="virgula tecla"
          onClick={() => inserirTempertura('.')}
        >
          ,
        </button>
        <button className="limpa tecla" onClick={() => limpaTecla()}></button>
        <button
          className="negativo tecla "
          onClick={() => inserirTempertura('-')}
        >
          -
        </button>
        <div className="reset tecla">Nova conversão</div>
      </aside>
    </>
  )
}

export default TemperatureConverter
