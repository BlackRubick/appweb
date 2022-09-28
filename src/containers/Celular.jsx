import Nav from '../components/Nav'
import Top from '../components/Top'
import Introduccion from '../components/Introduccion';
import '../assets/style/introduccion.css'
function  Celular() {
    return (
    <>
    <Nav/>
    <div class="container">
    <div className='section'>
    <div class="col span_2_of_3">
    <Introduccion/>
    <Top/>
    </div>
    </div >
    </div>

    </>
    
    );
    
}

export default Celular;