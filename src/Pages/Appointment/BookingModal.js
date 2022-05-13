import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleBookingSlot = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for : {name}</h3>
                    <form onSubmit={handleBookingSlot} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className=" btn btn-secondary input input-bordered w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;