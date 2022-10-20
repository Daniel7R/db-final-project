import React, { useState, useRef } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

import { SuccessAlert } from './SuccessAlert';
import Styles from "@styles/components/Forms.module.scss"

const ProfesoresForm = () => {
    const [fields, setFields] = useState<{ id: string, name: string, lastname: string, age: number | string, }>({
        name: '',
        lastname: '',
        id: '',
        age: ''
    });

    const { isOpen, onClose, onOpen } = useDisclosure(
        {
            defaultIsOpen: false
        }
    );

    const form = useRef(null);

    const isNameError = fields.name === ''
    const isLastnamesError = fields.lastname === ''
    const isCedulaError = fields.id === ''
    const isAgeError = fields.age < 18

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData();

        data.append("id", fields.id);
        data.append("name", fields.name)
        data.append("lastname", fields.lastname)
        data.append("age", String(fields.age))

        await fetch(`${process.env.NEXT_PUBLIC_API}/teachers`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            body: data
        })
            .then(response => response.json())
            .then(() => onOpen())
            .then(() => setFields({ id: "", name: "", lastname: "", age: '' }))
            .then(() => setTimeout(() => onClose(), 2000))
            .catch(err => console.log(err))

    }

    return (
        <>
            {
                isOpen && <SuccessAlert onClose={onClose} type={"Profesor"} />
            }
            <h2 className={Styles.form_title}>Profesor</h2>
            <form ref={form} className={Styles.formTeachers} onSubmit={handleSubmit}>
                <div className={Styles.fields_container}>
                    <FormControl isRequired >
                        <FormLabel>Cédula</FormLabel>
                        <Input name="id" value={fields.id} type={"number"} minLength={6} onChange={e => setFields({ ...fields, id: e.target.value })} />
                        {isCedulaError === true && <FormErrorMessage>La cédula es requerida</FormErrorMessage>}
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel>Nombres</FormLabel>
                        <Input value={fields.name} name="name" type={"text"} onChange={e => setFields({ ...fields, name: e.target.value })} />
                        {isNameError && <FormErrorMessage>El nombre es requerido</FormErrorMessage>}
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel>Apellidos</FormLabel>
                        <Input value={fields.lastname} type={"text"} name="lastname" onChange={e => setFields({ ...fields, lastname: e.target.value })} />
                        {isLastnamesError && <FormErrorMessage>Los apellidos son requeridos</FormErrorMessage>}
                    </FormControl>
                    <FormControl isRequired >
                        <FormLabel>Edad</FormLabel>
                        <Input value={fields.age} type={"number"} name="age" onChange={e => setFields({ ...fields, age: Number(e.target.value) })} />
                        {isAgeError && <FormErrorMessage>La edad es requerida y debe ser mayor a 18 años</FormErrorMessage>}
                    </FormControl>
                </div>
                <div style={{ "width": "100%", textAlign: "center" }}>
                    <Button type="submit" size={"lg"} variant={"outline"}><PlusSquareIcon /> Agregar</Button>
                </div>
            </form>
        </>
    );
}

export { ProfesoresForm }