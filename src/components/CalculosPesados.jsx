import { useMemo, useState } from "react"

const CalculosPesados = () => {

  const [listaNumeros, setListaNumeros] = useState([
    1,2,3,4,5,1,2,3,4,5,6,7,8,8,7,6,5,4,3,2,2,2,2,2,2,2,2,2
  ])

  const [show, setShow] = useState(true)

  const agregarNumero = () => {
    setListaNumeros([
      ...listaNumeros,
      listaNumeros[listaNumeros.length - 1] + 1
    ])
  }

  const calculo = useMemo(() => {
    console.log('calculado')

    return listaNumeros.reduce((a, b) => a * b)
  }, [listaNumeros])

  return (
    <>
      <h2>Calculo :</h2>

      <p>{calculo}</p>

      <button onClick={() => setShow(!show)}>
        {show ? 'Show' : 'Hide'}
      </button>

      <button onClick={agregarNumero}>
        Agregar números
      </button>
    </>
  )
}

export default CalculosPesados