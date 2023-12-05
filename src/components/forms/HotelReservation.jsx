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

const HotelReservation = () => {
    const [reservations, setReservations] = useState([]);
    const [reservationData, setReservationData] = useState({
        checkIn: '',
        checkOut: '',
        numberOfPeople: 1,
        roomPreferences: ''
    });

    const handleInputChange = (e) => {
        setReservationData({ ...reservationData, [e.target.name]: e.target.value });
    };

    const handleReserve = () => {
        setReservations([...reservations, reservationData]);
        setReservationData({
            checkIn: '',
            checkOut: '',
            numberOfPeople: 1,
            roomPreferences: ''
        });
    };

    return (
        <Box p={4}>
            <h1>Hotel Reservation</h1>
            <FormControl id="check-in-date" my={4}>
                <FormLabel>Check-in date</FormLabel>
                <Input type="date" name="checkIn" value={reservationData.checkIn} onChange={handleInputChange} />
            </FormControl>

            <FormControl id="check-out-date" my={4}>
                <FormLabel>Check-out date</FormLabel>
                <Input type="date" name="checkOut" value={reservationData.checkOut} onChange={handleInputChange} />
            </FormControl>

            <FormControl id="number-of-people" my={4}>
                <FormLabel>Number of persons</FormLabel>
                <NumberInput min={1} name="numberOfPeople" value={reservationData.numberOfPeople} onChange={(value) => setReservationData({ ...reservationData, numberOfPeople: value })}>
                    <NumberInputField />
                </NumberInput>
            </FormControl>

            <FormControl id="room-preferences" my={4}>
                <FormLabel>Room preferences</FormLabel>
                <Textarea name="roomPreferences" value={reservationData.roomPreferences} placeholder="Enter your room preferences here" onChange={handleInputChange} />
            </FormControl>

            <Button colorScheme="blue" mt={4} onClick={handleReserve}>Reserve</Button>

            {reservations.length > 0 && (
                <Box my={4}>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Check-In</Th>
                                <Th>Check-Out</Th>
                                <Th>Number of persons</Th>
                                <Th>Room preferences</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {reservations.map((res, index) => (
                                <Tr key={index}>
                                    <Td>{res.checkIn}</Td>
                                    <Td>{res.checkOut}</Td>
                                    <Td>{res.numberOfPeople}</Td>
                                    <Td>{res.roomPreferences}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            )}
        </Box>
    )
}

export default HotelReservation
