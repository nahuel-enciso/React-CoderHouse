function Card({titulo, descripcion = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}) {
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    )
}

function App() {
    return (
        <>
        <Card titulo="HOLA MUNDO 1" description="Lorem Ipsum"/>
        <Card titulo="HOLA MUNDO 2" description="dolor sit amet"/>
        <Card titulo="HOLA MUNDO 3" description="consectetur adipisicing elit."/>
        <Card titulo="HOLA MUNDO 4"/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);