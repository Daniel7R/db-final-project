import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    Box
} from "@chakra-ui/react";

interface Props {
    onClose: React.MouseEventHandler<HTMLButtonElement> | undefined,
    type: string
}

export const SuccessAlert = ({ onClose, type }: Props) => {
    return (
        <>
            <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='150px'
                width={"600px"}
                position={"fixed"}
                zIndex={1000}
                opacity={1}
            >
                <AlertIcon boxSize='40px' mr={0} />
                <Box>
                    <AlertTitle mt={4} mb={1} style={{ fontSize: "2rem", marginBottom: " 10px" }}>
                        Agregada correctamente
                    </AlertTitle>
                    <AlertDescription maxWidth='sm' style={{ fontSize: "1.6rem" }}>
                        {type} correctamente agregada ✔️
                    </AlertDescription>
                </Box>
                <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={0}
                    top={-100}
                    onClick={onClose}
                />
            </Alert>
        </>
    )
}
