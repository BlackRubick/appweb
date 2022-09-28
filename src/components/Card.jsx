import '../assets/style/top.css'

function Card({ title ,img, desc}) {
    return ( 
        <>
            <h1>{title}</h1>
            <img src={img} alt="" />
            <p className="title2">{desc}</p><br />
        </>
     );
}

export default Card;