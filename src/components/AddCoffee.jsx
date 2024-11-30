import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quentity = form.quentity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const datils = form.datils.value;
        const photo = form.photo.value;

        const newCoffee = { name, quentity, supplier, taste, category, datils, photo }
        console.log(newCoffee);

        // send data to server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <div className='w-8/12 mx-auto mt-10  bg-[#F4F3F0] px-20 py-10 rounded-lg'>
                <h2 className='text-3xl font-extrabold text-center'>Add New Coffee</h2>
                <p className='mt-5 text-center text-gray-400'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form className='mt-6' onSubmit={handleAddCoffee}>
                    {/* from row name and quentity */}
                    <div className='flex justify-between gap-4 mb-4'>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label'>Coffee Name</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="name" placeholder='Coffee Name' className='input input-bordered w-full' id="" />
                            </label>
                        </div>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label'>Available Quentity</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="quentity" placeholder='Available Quentity' className='input input-bordered w-full' id="" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row*/}
                    <div className='flex justify-between gap-4 mb-4'>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label'>Supplier</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="supplier" placeholder='Supplier Name' className='input input-bordered w-full' id="" />
                            </label>
                        </div>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label'>Taste</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="taste" placeholder='Teast' className='input input-bordered w-full' id="" />
                            </label>
                        </div>
                    </div>
                    {/* form category details*/}
                    <div className='flex justify-between gap-4 mb-4'>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label'>Category</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="category" placeholder='Category' className='input input-bordered w-full' id="" />
                            </label>
                        </div>
                        <div className='form-control w-1/2'>
                            <label className='label'>
                                <span className='label'>Details</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name="datils" placeholder='Details' className='input input-bordered w-full' id="" />
                            </label>
                        </div>
                    </div>
                    {/* photo Url row */}
                    <div className='form-control w-full mb-4'>
                        <label className='label'>
                            <span className='label'>Photo URL</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="photo" placeholder='Photo URL' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <input type="submit" value="Add Coffee" className='btn btn-block bg-slate-900 text-white' />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;