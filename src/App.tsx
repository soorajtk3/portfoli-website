

import Header from './components/Header';
import Footer from './components/Footer';
import ContactDetails from './components/ContactDetails';
import Experience from './components/Experience';
import EducationDetails from './components/Education';
import Skills from './components/Skills';
function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <ContactDetails />
      <Skills />
      <Experience />
      <EducationDetails />
      <Footer />

    </div>
  )
}

export default App
