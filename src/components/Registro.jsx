import Card from "./Card";
import '../assets/style/registro.css'
function Registro() {
    
    const registro=[
        {
            tipo : "text",
            clase : "controls",
             nombre :"Nombre" ,
             id :"Nombre" ,
             placeholder: "Ingrese su Nombre "      
        },
        {
            tipo :"text" ,
            clase :"controls" ,
             nombre :"Apellido Paterno" ,
             id :"Paterno" ,
             placeholder:"Ingrese su Apellido Paterno"      
        },   {
            tipo : "text" ,
            clase : "controls",
             nombre :"Apellido Materno" ,
             id : "Paterno",
             placeholder: "Ingrese su Apellido Materno "      
        },   {
            tipo : "text" ,
            clase : "controls",
             nombre :"NickName" ,
             id : "NickName",
             placeholder:"Ingrese su NickName (Apodo)"      
        },   {
            tipo : "email",
            clase :"controls" ,
             nombre :"Correo" ,
             id : "Correo",
             placeholder:"Ingrese su Correo "      
        },   {
            tipo : "text",
            clase : "controls",
             nombre :"Telefono" ,
             id : "Telefono",
             placeholder:"Ingrese su Numero de celular"      
        },   {
            tipo :"password" ,
            clase :"controls" ,
             nombre :"Contraseña" ,
             id : "Contraseña",
             placeholder:"Ingrese su Contraseña"      
        },   {
            tipo : "date",
            clase :"controls" ,
             nombre : "Nacimiento",
             id :"Nacimiento" ,
             placeholder: "Ingrese su Fecha de Nacimiento"     
        }
        
    ]

    return ( 
        <>
            <section class="form-register">
            <h4>SingUp</h4>
            {registro.map((registro) => {
                return <Card tipo={registro.tipo} 
                clase={registro.clase} Nombre={registro.Nombre} 
                id={registro.id} placeholder={registro.placeholder}/>;
            })}
            <input class="boton" type="submit" value="Registrar"></input>
            </section>
        </>
     );
}

export default Registro;