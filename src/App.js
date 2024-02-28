import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
 import AboutFounder from "./pages/AboutFounderPage";
 import AboutGEIDadar from "./pages/AboutGEIDadarPage";
 import AboutSWSchool from "./pages/AboutSWSchoolPage";
 import CommitteeMembers from "./pages/CommitteeMembersPage";
 import Acadmic from "./pages/AcadmicPage";
 import Sports from "./pages/SportsPage";
import EnquiryForm from "./pages/EnquiryFormPage"
import Teacher from "./pages/TeacherPage"
import PhotoGallery from "./pages/PhotoGalleryPages";
import SchoolTour from "./pages/SchoolTourPage";
import Contact from "./pages/ContactPage";

// import Gallery from "./pages/Gallery";
// import Donate from "./pages/Donate";
import { useEffect } from "react";


function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

function App() {
  useEffect(() => {
    loadScript('https://anna16.github.io/SubhedarSchool/js/jquery.min.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/jquery-migrate-3.0.1.min.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/popper.min.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/bootstrap.min.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/jquery.easing.1.3.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/jquery.waypoints.min.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/jquery.stellar.min.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/owl.carousel.min.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/jquery.magnific-popup.min.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/aos.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/jquery.animateNumber.min.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/scrollax.min.js')
    //loadScript('https://anna16.github.io/SubhedarSchool/js/google-map.js')
    loadScript('https://anna16.github.io/SubhedarSchool/js/main.js')
  }, [])
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutFounder />} />
        <Route path="aboutGEIDadar" element={<AboutGEIDadar />} />
        <Route path="aboutSWSchool" element={<AboutSWSchool />} />
        <Route path="committeeMembers" element={<CommitteeMembers />} />
        <Route path="acadmic" element={<Acadmic />} />
        <Route path="sports" element={<Sports />} />
        <Route path="enquiryForm" element={<EnquiryForm />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="photoGallery" element={<PhotoGallery />} />
        <Route path="schoolTour" element={<SchoolTour />} />
        <Route path="contact" element={<Contact />} />
        {/*
        
        <Route path="donate" element={<Donate />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;