import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())

    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-secondary text-center text-xl font-bold my-10'>Available Appointment on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    refetch={refetch}
                    setTreatment={setTreatment}>
                </BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;