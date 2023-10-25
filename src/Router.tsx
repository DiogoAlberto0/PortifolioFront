import { Routes, Route } from 'react-router-dom'

//layout
import { DefaultLayout } from './layouts/DefaultLayouts'

//pages
import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Portifolio } from './pages/Portifolio'
import { ContactUs } from './pages/ContactUs'
import { Project } from './pages/Projects'
import { Singin } from './pages/Admin/Singin'
import { PostProject } from './pages/Admin/PostProject'

export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />}/>

            <Route path='/' element={<DefaultLayout />}>
                <Route path='/aboutme' element={<AboutMe />}/>
                <Route path='/portifolio' element={<Portifolio />}/>
                <Route path='/contactus' element={<ContactUs />} />

                <Route path='/project/:id' element={<Project />} />


                {/* adminpages */}

                <Route path='/singin' element={<Singin />} />
                <Route path='/postproject' element={<PostProject />} />
            </Route>
        </Routes>
    )
}