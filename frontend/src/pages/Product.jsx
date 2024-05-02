import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import ShowProduct from '../components/ShowProduct'
import AddProduct from '../components/AddProduct'

const AdminProduct = ({ token, user }) => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        const getProductData = async () => {
            try {
                const res = await api.get("/product/list", {
                    headers: {
                        Authorization: token
                    }
                })
                setProductData(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getProductData()
    }, [])

    const handleAddProduct = () => {

    }


    return (
        <div className='container'>
            <h3>Products</h3>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={handleAddProduct}>
                Add Product
            </button>
            <ShowProduct data={productData} />
        </div>
    )
}

export default AdminProduct
