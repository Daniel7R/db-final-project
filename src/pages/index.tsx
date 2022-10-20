import type { NextPage } from 'next'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { Seo, SedesForm, ProfesoresInfo, EspecialidadesProfesorForm, EspecialidadesForm } from "@components/."


const Home: NextPage = () => {
  return (
    <>
      <Seo title={"Home"} />
      <Tabs width={"600px"} m={"0 auto"} flex={1}>
        <TabList justifyContent={"center"}>
          <Tab fontSize={"2rem"}>Clases</Tab>
          <Tab fontSize={"2rem"}>Sedes</Tab>
          <Tab fontSize={"2rem"}>Profesores</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SedesForm />
          </TabPanel>
          <TabPanel>
            <EspecialidadesProfesorForm />
          </TabPanel>
          <TabPanel>
            <ProfesoresInfo />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default Home
