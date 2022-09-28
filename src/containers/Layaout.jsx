import Header from "../components/Header";
import Footer from "../components/Footer";

function Layaout({children}) {
    return (  


        <> 
        <Header></Header>
        {children}
        <Footer></Footer>

        </>

    );
}

export default Layaout;