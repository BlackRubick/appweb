import Registro from "../components/Registro";
import Layaout from "./Layaout";
//  <etiquetas vacias> Fragment manera elegante de como poder nosotros darle un elemento padre pero sin que se vea afectado en la salida de mi aplicacion
function App () {
    return ( 
        <> 
<Layaout>
        
    <Registro>
    </Registro>
   
</Layaout>
        </>
     );
}

export default App;