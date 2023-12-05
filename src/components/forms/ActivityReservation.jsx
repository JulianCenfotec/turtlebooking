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

const ActivityReservation = () => {
    const [reservations, setReservations] = useState([]);
    const [reservationData, setReservationData] = useState({
        dateTime: '',
        numberOfParticipants: 1,
        preferences: ''
    });

    const handleInputChange = (e) => {
        setReservationData({ ...reservationData, [e.target.name]: e.target.value });
    };

    const handleNumberChange = (value) => {
        setReservationData({ ...reservationData, numberOfParticipants: value });
    };

    const handleReserve = () => {
        setReservations([...reservations, reservationData]);
        setReservationData({
            dateTime: '',
            numberOfParticipants: 1,
            preferences: ''
        });
    };

    return (
        <div>
            <ChakraProvider>
                <Stack spacing={3}>
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
                    <FormControl >
                        <FormLabel>Number of participants</FormLabel>
                        <NumberInput defaultValue={1} min={1} max={200000} value={reservationData.numberOfParticipants} onChange={handleNumberChange}>
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Preferences</FormLabel>
                        <Textarea name="preferences" placeholder="Dress code, minimum age..." value={reservationData.preferences} onChange={handleInputChange} />
                    </FormControl>
                    <Button colorScheme='blue' onClick={handleReserve}>Reserve</Button>
                </Stack>

                {reservations.length > 0 && (
                    <Box my={4}>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Date and Time</Th>
                                    <Th>Number of Participants</Th>
                                    <Th>Preferences</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {reservations.map((res, index) => (
                                    <Tr key={index}>
                                        <Td>{res.dateTime}</Td>
                                        <Td>{res.numberOfParticipants}</Td>
                                        <Td>{res.preferences}</Td>
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

export default ActivityReservation
