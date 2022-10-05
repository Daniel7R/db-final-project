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

const ProfesoresForm = () => {
    const [fields, setFields] = useState<{ cedula: string, nombres: string, apellidos: string, edad: number, }>({
        nombres: '',
        apellidos: '',
        cedula: '',
        edad: 0
    });

    const isNameError = fields.nombres === ''
    const isLastnamesError = fields.apellidos === ''
    const isCedulaError = fields.cedula === ''
    const isAgeError = fields.edad < 18

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting");
    }

    return (
        <>
            <h2 className={Styles.form_title}>Profesor</h2>
            <form className={Styles.formTeachers} onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
                <div className={Styles.fields_container}>
                    <FormControl isRequired >
                        <FormLabel>Cédula</FormLabel>
                        <Input type={"number"} onChange={e => setFields({ ...fields, cedula: e.target.value })} />
                        {isCedulaError === true && <FormErrorMessage>La cédula es requerida</FormErrorMessage>}
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel>Nombres</FormLabel>
                        <Input type={"text"} onChange={e => setFields({ ...fields, nombres: e.target.value })} />
                        {isNameError && <FormErrorMessage>El nombre es requerido</FormErrorMessage>}
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel>Apellidos</FormLabel>
                        <Input type={"text"} onChange={e => setFields({ ...fields, nombres: e.target.value })} />
                        {isLastnamesError && <FormErrorMessage>Los apellidos son requeridos</FormErrorMessage>}
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel>Edad</FormLabel>
                        <Input type={"number"} onChange={e => setFields({ ...fields, nombres: e.target.value })} />
                        {isAgeError && <FormErrorMessage>La edad es requerida y debe ser mayor a 18 años</FormErrorMessage>}
                    </FormControl>
                </div>
                <Button type="submit" variant={"outline"}><PlusSquareIcon /> Agregar</Button>
            </form>
        </>
    );
}

export { ProfesoresForm }