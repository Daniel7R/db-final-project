import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";


import Styles from "@styles/components/Forms.module.scss"


const EspecialidadesForm = () => {
    const [fields, setFields] = useState<{ nombre_especialidad: string }>({
        nombre_especialidad: ''
    });


    const isNombreError = fields.nombre_especialidad === ''

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting");
    }

    return (
        <>
            <form className={Styles.formTeachers} onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
                <h2 className={Styles.form_title}>Especialidad</h2>
                <FormControl isRequired >
                    <FormLabel>Nombre especialidad</FormLabel>
                    <Input type={"text"} onChange={e => setFields({ ...fields, nombre_especialidad: e.target.value })} />
                    {isNombreError && <FormErrorMessage>El profesor es requerido</FormErrorMessage>}
                </FormControl>
                <Button type="submit" variant={"outline"}><PlusSquareIcon />Agregar</Button>
            </form>
        </>
    );
}

export { EspecialidadesForm }