import React, { useState } from 'react';
import {
    ChakraProvider,
    Input,
    Stack,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    Button,
    Textarea,
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react'

const FlightReservation = () => {
    const [reservations, setReservations] = useState([]);
    const [reservationData, setReservationData] = useState({
        origin: '',
        destination: '',
        dateTime: '',
        numberOfPassengers: 1,
        details: ''
    });

    const handleInputChange = (e) => {
        setReservationData({ ...reservationData, [e.target.name]: e.target.value });
    };

    const handleNumberChange = (value) => {
        setReservationData({ ...reservationData, numberOfPassengers: value });
    };

    const handleReserve = () => {
        setReservations([...reservations, reservationData]);
        setReservationData({
            origin: '',
            destination: '',
            dateTime: '',
            numberOfPassengers: 1,
            details: ''
        });
    };

    return (
        <div>
            <h1>Flight Reservation</h1>
            <ChakraProvider>
                <Stack spacing={3}>
                    <FormControl isRequired>
                        <FormLabel>From?</FormLabel>
                        <Input
                            name="origin"
                            variant='outline'
                            placeholder='Origin'
                            colorScheme='green'
                            value={reservationData.origin}
                            onChange={handleInputChange} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>To?</FormLabel>
                        <Input
                            name="destination"
                            variant='outline'
                            placeholder='Destination'
                            colorScheme='green'
                            value={reservationData.destination}
                            onChange={handleInputChange} />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Date and time</FormLabel>
                        <Input
                            name="dateTime"
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                            colorScheme='green'
                            value={reservationData.dateTime}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Number of passengers</FormLabel>
                        <NumberInput defaultValue={1} min={1} max={5} value={reservationData.numberOfPassengers} onChange={handleNumberChange}>
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Details</FormLabel>
                        <Textarea name="details" placeholder="Seat, luggage, food..." value={reservationData.details} onChange={handleInputChange} />
                    </FormControl>
                    <Button colorScheme='blue' onClick={handleReserve}>Reserve</Button>
                </Stack>

                {reservations.length > 0 && (
                    <Box my={4}>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>From</Th>
                                    <Th>To</Th>
                                    <Th>Date and Time</Th>
                                    <Th>Passengers</Th>
                                    <Th>Details</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {reservations.map((res, index) => (
                                    <Tr key={index}>
                                        <Td>{res.origin}</Td>
                                        <Td>{res.destination}</Td>
                                        <Td>{res.dateTime}</Td>
                                        <Td>{res.numberOfPassengers}</Td>
                                        <Td>{res.details}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                )}
            </ChakraProvider>
        </div>
    )
}

export default FlightReservation
