import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";


import Styles from "@styles/components/Forms.module.scss"
import { SuccessAlert } from './SuccessAlert';


const EspecialidadesForm = () => {
    const [fields, setFields] = useState<{ nombre_especialidad: string }>({
        nombre_especialidad: ''
    });

    const { onOpen, onClose, isOpen } = useDisclosure({
        defaultIsOpen: false
    });

    const isNombreError = fields.nombre_especialidad === ''

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData();

        data.append("name", fields.nombre_especialidad)


        await fetch(`${process.env.NEXT_PUBLIC_API}/specialities`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            body: data
        })
            .then(response => response.json())
            .then(() => onOpen())
            .then(() => setFields({ nombre_especialidad: "" }))
            .then(() => setTimeout(() => onClose(), 2000))
            .catch(err => console.log(err))
    }

    return (
        <>{
            isOpen && <SuccessAlert onClose={onClose} type='Especialidad' />
        }
            <form className={Styles.formTeachers} onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
                <h2 className={Styles.form_title}>Especialidad</h2>
                <FormControl isRequired >
                    <FormLabel>Nombre especialidad</FormLabel>
                    <Input type={"text"} onChange={e => setFields({ ...fields, nombre_especialidad: e.target.value })} />
                    {isNombreError && <FormErrorMessage>El profesor es requerido</FormErrorMessage>}
                </FormControl>
                <div style={{ "width": "100%", textAlign: "center" }}>
                    <Button type="submit" size={"lg"} variant={"outline"}><PlusSquareIcon />Agregar</Button>
                </div>
            </form>
        </>
    );
}

export { EspecialidadesForm }