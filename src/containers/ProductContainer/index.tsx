import { useParams } from "react-router-dom"

const ProductContainer = () => {

    const { id, wulan } = useParams();

    return (
        <div>
            Product ini mempunya id: {id} { wulan}
        </div>
    )
}

export default ProductContainer