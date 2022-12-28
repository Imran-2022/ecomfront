import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateProductsMutation, useGetCategoryMutation } from '../../features/product/adminAPI';

const CreateProduct = () => {

    const [getCategory, { data, isLoading, error: responseError, isSuccess }] = useGetCategoryMutation();
    const [createProducts, { data: product, isLoading: gd, error: responseErro, isSuccess: ss }] = useCreateProductsMutation();

    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        quantity: '',
        formData: '',
    });

    const {
        name,
        description,
        price,
        category,
        cagegories,
        quantity,
        formData,
    } = values;

    useEffect(() => {
        getCategory()
        setValues({
            formData: new FormData()
        })
    }, [])
    const handleChange = (e) => {
        const value = e.target.name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(e.target.name, value)
        setValues({
            ...values,
            [e.target.name]: value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createProducts(formData)
    }

    const productForm = () => (
        <form className="mb-3" onSubmit={handleSubmit}>
            <h4>Photo:</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        accept="image/*"
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Name:</label>
                <input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    value={name}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Description:</label>
                <textarea
                    name="description"
                    onChange={handleChange}
                    className="form-control"
                    value={description}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Price:</label>
                <input
                    name="price"
                    onChange={handleChange}
                    className="form-control"
                    type="number"
                    value={price}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Quantity:</label>
                <input
                    name="quantity"
                    onChange={handleChange}
                    className="form-control"
                    type="number"
                    value={quantity}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Category:</label>
                <select name="category" value={category} onChange={handleChange} className="form-control" required>
                    <option value="">----Select Category----</option>
                    {
                        data && data.map(item => (<option value={item._id} key={item._id}>{item.name}</option>))
                    }
                </select>
            </div>
            <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" type="submit" >Create Product</button>
        </form>
    );

    const goBack = () => (<div className="mt-5">
        
        {/* <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" ><Link to="/dashboard" className="text-warning">Go to Dashboard</Link></button> */}
    </div>)


    return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {productForm()}
                    {goBack()}

                    {ss&& <p>successfully uploaded bro</p>}
                </div>
            </div>
    );

}

export default CreateProduct;