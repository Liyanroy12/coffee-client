import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navber from './Navber';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quentity, supplier, taste, category, datils, photo} = coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quentity = form.quentity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const datils = form.datils.value;
        const photo = form.photo.value;

        const updatedcoffee = {name, quentity, supplier, taste, category, datils, photo}
        console.log(updatedcoffee);

        // send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedcoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <Navber/>
            <div className='w-8/12 mx-auto mt-10  bg-[#F4F3F0] px-20 py-10 rounded-lg'>
            <h2 className='text-3xl font-extrabold text-center'>Update Coffee: {name}</h2>

            <form className='mt-6' onSubmit={handleUpdateCoffee}>
                {/* from row name and quentity */}
                <div className='flex justify-between gap-4 mb-4'>
                    <div className='form-control w-1/2'>
                        <label className='label'>
                            <span className='label'>Coffee Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" defaultValue={name} name="name" placeholder='Coffee Name' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control w-1/2'>
                        <label className='label'>
                            <span className='label'>Available Quentity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" defaultValue={quentity} name="quentity" placeholder='Available Quentity' className='input input-bordered w-full' id="" />
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
                            <input type="text" defaultValue={supplier} name="supplier" placeholder='Supplier Name' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control w-1/2'>
                        <label className='label'>
                            <span className='label'>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" defaultValue={taste} name="taste" placeholder='Teast' className='input input-bordered w-full' id="" />
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
                            <input type="text" defaultValue={category} name="category" placeholder='Category' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <div className='form-control w-1/2'>
                        <label className='label'>
                            <span className='label'>Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" defaultValue={datils} name="datils" placeholder='Details' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                </div>
                {/* photo Url row */}
                <div className='form-control w-full mb-4'>
                        <label className='label'>
                            <span className='label'>Photo URL</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="photo" defaultValue={photo} placeholder='Photo URL' className='input input-bordered w-full' id="" />
                        </label>
                    </div>
                    <input type="submit" value="Update Coffee" className='btn btn-block bg-slate-900 text-white' />
            </form>
        </div>
        </div>
    );
};

export default UpdateCoffee;