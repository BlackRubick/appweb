import Card from '../components/Card'
import '../assets/style/top.css'
function Top() {
   
   const top=[
    {
        
        nombre: "Iphone 14 Pro Max",
        imagen: '/imgS/14.jpg',
        descripcion: "Aquellos que buscan uno de los mejores teléfonos del mundo técnico, sin duda, deberían poner su mirada en el iPhone 14 Pro Max, la última obra maestra tecnológica de Apple. Si bien el diseño apenas ha cambiado desde que se presentó la serie iPhone 11 en 2019, Apple continúa incluyendo sus últimas innovaciones de hardware y software en la versión Pro Max. El modelo de este año parece particularmente prometedor para los videógrafos, gracias a las capacidades de la cámara significativamente mejoradas. Aquí están las especificaciones y el precio del Apple iPhone 13 Pro Max y todo lo que sabemos sobre el mejor teléfono de Apple en 2022.   Precio desde los $28,999 pesos mexicanos"
    },
    {
        
        nombre: "Samsung Galaxy S22 Ultra",
        imagen: '/imgS/S22.jpg',
        descripcion: "La generación de 2022 es la primera que incorpora los primeros procesadores de Samsung con GPU propia y desarrollada por AMD: el Samsung Galaxy S22 Ultra hace gala del Exynos 2200, un SoC que apunta alto, al menos sobre el papel. El mayor rendimiento gráfico debería de arrojar una notable mejora en la ejecución de juegos, también en aplicaciones que requieran la potencia que AMD parece otorgar al procesador     Precio desde los $25,000 pesos mexicanos"
    },
    {
        nombre: "Xiaomi 12 Pro Ultra",
        imagen: '/imgS/12pro.jpg',
        descripcion:"Gracias a nuestra constante búsqueda de la excelencia en la creación de lo que deseas, el Xiaomi 12 Pro está preparado para dominar cada escena con un conjunto de cámaras triples Pro de 50 MP, una pantalla WQHD+ dynamic de 120 Hz, el chipset Snapdragon® 8 Gen 1 más avanzado hasta la fecha y la carga inteligente Xiaomi HyperCharge de 120 W.    Precio desde los $18,000 pesos mexicanos"

    }

   ]
   
   
   
    return ( 
        <div className='top'>
        {top.map((top) => {
            return(<Card title={top.nombre} img={top.imagen} desc={top.descripcion}/>)
        })}
    </div>
        
     );
}


export default Top;
