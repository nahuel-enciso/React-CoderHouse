function App() {
  const Titulo = 'Hola Mundo'
  return (
    <>
      <h1>{Titulo}</h1>
      <Saludo/>
    </>
  )
}

export function Saludo() {
  return 'Hola desde la funcion saludo'
}
export default App
