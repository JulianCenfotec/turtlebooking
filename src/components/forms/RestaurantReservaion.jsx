import React, { useState } from 'react';
import {
    Input,
    NumberInput,
    NumberInputField,
    Textarea,
    FormControl,
    FormLabel,
    Button,
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react'

const RestaurantReservation = () => {
    const [reservations, setReservations] = useState([]);
    const [reservationData, setReservationData] = useState({
        date: '',
        time: '',
        numberOfDiners: 1,
        specialRequests: ''
    });

    const handleInputChange = (e) => {
        setReservationData({ ...reservationData, [e.target.name]: e.target.value });
    };

    const handleReserve = () => {
        setReservations([...reservations, reservationData]);
        setReservationData({
            date: '',
            time: '',
            numberOfDiners: 1,
            specialRequests: ''
        });
    };

    return (
        <Box p={4}>
            <h1>Restaurant Reservation</h1>
            <FormControl id="date" my={4}>
                <FormLabel>Date of reservation</FormLabel>
                <Input type="date" name="date" value={reservationData.date} onChange={handleInputChange} />
            </FormControl>

            <FormControl id="time" my={4}>
                <FormLabel>Time of reservation</FormLabel>
                <Input type="time" name="time" value={reservationData.time} onChange={handleInputChange} />
            </FormControl>

            <FormControl id="number-of-guests" my={4}>
                <FormLabel>Number of diners</FormLabel>
                <NumberInput min={1} name="numberOfDiners" value={reservationData.numberOfDiners} onChange={(value) => setReservationData({ ...reservationData, numberOfDiners: value })}>
                    <NumberInputField />
                </NumberInput>
            </FormControl>

            <FormControl id="special-requests" my={4}>
                <FormLabel>Dietary preferences or special requests</FormLabel>
                <Textarea name="specialRequests" value={reservationData.specialRequests} placeholder="Enter here any preference or special request" onChange={handleInputChange} />
            </FormControl>

            <Button colorScheme="blue" mt={4} onClick={handleReserve}>Reserve</Button>

            {reservations.length > 0 && (
                <Box my={4}>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Date</Th>
                                <Th>Time</Th>
                                <Th>Number of Diners</Th>
                                <Th>Special Requests</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {reservations.map((res, index) => (
                                <Tr key={index}>
                                    <Td>{res.date}</Td>
                                    <Td>{res.time}</Td>
                                    <Td>{res.numberOfDiners}</Td>
                                    <Td>{res.specialRequests}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            )}
        </Box>
    )
}

export default RestaurantReservation
