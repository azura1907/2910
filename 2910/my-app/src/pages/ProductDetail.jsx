import { useParams } from "react-router-dom"

export default function ProjectDetail () {
    const products = [
        {
          name: 'product 1',
          id: 1,
          price: 100
        },
        {
          name: 'product 2',
          id: 2,
          price: 200
        },
        {
          name: 'product 3',
          id: 3,
          price: 300
        }
    ]

    //useParam để lấy value đc setup bên path (Ex: /product/:id) -> sẽ lấy id ra
    const param = useParams();

    const productDetail = products.find((product) => {
        return product.id === param.id
    })

    return (
        <div>
            <h1>Product detail</h1>
            <p>Product id: {param.id} </p>
            <p>Product name: {productDetail.name}</p>
            <p>Product price: {productDetail.price} </p>
        </div>
    )
}