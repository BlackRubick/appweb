import '../assets/style/registro.css'
function Card({tipo,clase,nombre,id,placeholder}) {
    return ( 
        <>  
        <input type={tipo} class={clase} name={nombre} id={id} 
        placeholder={placeholder} />
        <br />
        </>
     );
}

export default Card;
