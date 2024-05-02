import React from 'react'

const ShowProduct = ({ data }) => {

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">image</th>
                        <th scope="col">price</th>
                        <th scope="col">description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data?.map((product, index) => (
                        <>
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{product?.name}</td>
                                <td>{product?.name}</td>
                                <td>{product?.price}</td>
                                <td>{product?.description}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ShowProduct
