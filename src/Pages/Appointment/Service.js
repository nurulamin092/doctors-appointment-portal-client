import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (

        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Tray another</span>
                    }
                </p>
                <p>{slots.length} Available</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="booking-modal" className='btn btn-secondary text-white uppercase'>Book Appointment</label>
                </div>
            </div>
        </div >

    );
};

export default Service;