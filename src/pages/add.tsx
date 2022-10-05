import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { Seo, SedesForm, ProfesoresForm, EspecialidadesProfesorForm, EspecialidadesForm } from "@components/."
export const add = () => {
    return (
        <>
            <Seo title={"Agregar"} />
            <Tabs width={"600px"} m={"0 auto"} flex={1}>
                <TabList justifyContent={"center"}>
                    <Tab fontSize={"2rem"}>Sede</Tab>
                    <Tab fontSize={"2rem"}>Profesor</Tab>
                    <Tab fontSize={"2rem"}>Especialidad Profesor</Tab>
                    <Tab fontSize={"2rem"} >Especialidad</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SedesForm />
                    </TabPanel>
                    <TabPanel>
                        <ProfesoresForm />
                    </TabPanel>
                    <TabPanel>
                        <EspecialidadesProfesorForm />
                    </TabPanel>
                    <TabPanel>
                        <EspecialidadesForm />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}


export default add;
