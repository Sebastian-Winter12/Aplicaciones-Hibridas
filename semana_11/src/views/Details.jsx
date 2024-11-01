// Para recivir los params importamos un hooks
import { useParams } from "react-router-dom";

const Details = () => {

    const { id } = useParams();

    return ( 
        <>
            <h2> Detalle de { id } </h2>
        </>
    )
}

export default Details;