import {
    Input,
    NumberInput,
    NumberInputField,
    Textarea,
    FormControl,
    FormLabel,
    Button,
    Box
} from '@chakra-ui/react'

const RestaurantReservation = () => {
    return (
        <Box p={4}>
            <h1>Restaurant Reservation</h1>
            <FormControl id="date" my={4}>
                <FormLabel>Date of reservation</FormLabel>
                <Input type="date" />
            </FormControl>

            <FormControl id="time" my={4}>
                <FormLabel>Time of reservation</FormLabel>
                <Input type="time" />
            </FormControl>

            <FormControl id="number-of-guests" my={4}>
                <FormLabel>Number of diners</FormLabel>
                <NumberInput min={1}>
                    <NumberInputField />
                </NumberInput>
            </FormControl>

            <FormControl id="special-requests" my={4}>
                <FormLabel>Dietary preferences or special requests</FormLabel>
                <Textarea placeholder="Ingresa aquí cualquier preferencia o solicitud especial" />
            </FormControl>
            <Button colorScheme="blue" mt={4}>Reserve</Button>
        </Box>
    )
}

export default RestaurantReservation
