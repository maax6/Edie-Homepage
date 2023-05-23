import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutDefault } from '../Layouts/Default';
import { Home } from '../Pages/Home/Home';
import { Services } from '../Pages/Services/Services';
import { OurWorks } from '../Pages/OurWorks/OurWorks';
import { Clients } from '../Pages/Clients/Clients';
import { Contact } from '../Pages/Contact/Contact';

export function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<LayoutDefault />}>
               <Route path="/" element={<Home />} />
               <Route path="/Home" element={<Home />} />
               <Route path="/Services" element={<Services />} />
               <Route path="/OurWorks" element={<OurWorks />} />
               <Route path="/Clients" element={<Clients />} />
               <Route path="/Contact" element={<Contact />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
