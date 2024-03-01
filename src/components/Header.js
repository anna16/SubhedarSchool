import React from "react";
const Header = () => {
	return (
		<>
			<div className="py-2 bg-yellow1">
				<div className="container">
					<div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
						<div className="col-lg-12 d-block">
							<div className="row d-flex">
								<div className="col-3 d-flex topper align-items-center">
									<div className="icon bg-Pink mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
									<span className="text-black1">subhedarwada.eng@gmail.com</span>
								</div>
								<div className="col-3 d-flex topper align-items-center">
									<div className="icon bg-Pink mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
									<span className="text-black1">9987484404 / 9152824981</span>
								</div>
								<div className="col-5 d-flex topper align-items-center">
									<span className="text-black1">Admissions Start For the Year 2024-2025 i.e From Nursery To 7th Std</span>
								</div>
								<div className="col-1 d-flex topper align-items-center">
									<div className="icon bg-fifth mr-2 d-flex justify-content-center align-items-center"><a href="https://www.facebook.com/people/GEIS-English-Medium-School-Subhedar-Wada-Kalyan-West/100071624971248/" target="blank"><span className="icon-facebook"></span></a></div>
									<div className="icon bg-danger d-flex justify-content-center align-items-center"><a href="https://www.youtube.com/channel/UCF8uMrT7V7vlPE3UoStUrMA" target="blank"><span className="icon-youtube-play"></span></a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
							<img width="50%" src="images/SchoolName.png" className="img-fluid rounded text-center" alt="akshikar" />
							</div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
				<div className="container d-flex align-items-center">
					<a className="navbar-brand" href="index.html"><img src="images/G-E-Logo.png" width="120" alt="G.E Logo" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="oi oi-menu"></span> Menu
					</button>

					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav ml-auto">
							<li className={`nav-item ${window.location.pathname === "/" ? "active" : ""}`}><a href="/" className="nav-link pl-0">Home</a></li>
							<li className={`nav-item dropdown ${window.location.pathname === "/about" || window.location.pathname === "/aboutGEIDadar" || window.location.pathname === "/aboutSWSchool" || window.location.pathname === "/committeeMembers" ? "active" : ""}`}>
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									About Us
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="/about">About Founder and Management</a>
									<a className="dropdown-item" href="/aboutGEIDadar">About GEI, Dadar</a>
									<a className="dropdown-item" href="/aboutSWSchool">About Subhedar Wada English School</a>
									<a className="dropdown-item" href="/committeeMembers">Administrative Committee Members</a>
								</div>
							</li>
							<li className={`nav-item dropdown ${window.location.pathname === "/acadmic" || window.location.pathname === "/sports" ? "active" : ""}`}>
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Achievements
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a className="dropdown-item" href="/acadmic">Acadmic Achivments</a>
									<a className="dropdown-item" href="/sports">Sports Achivments</a>
								</div>
							</li>
							<li className={`nav-item ${window.location.pathname === "/enquiryForm" ? "active" : ""}`}><a href="/enquiryForm" className="nav-link">Admission</a></li>
							<li className={`nav-item ${window.location.pathname === "/teacher" ? "active" : ""}`}><a href="/teacher" className="nav-link">Staff</a></li>
							<li className={`nav-item ${window.location.pathname === "/photoGallery" ? "active" : ""}`}><a href="/photoGallery" className="nav-link">Photo Gallery</a></li>
							<li className={`nav-item ${window.location.pathname === "/schoolTour" ? "active" : ""}`}><a href="/schoolTour" className="nav-link">School Tour</a></li>
							<li className={`nav-item ${window.location.pathname === "/contact" ? "active" : ""}`}><a href="/contact" className="nav-link">Contact Us</a></li>
						</ul>
					</div>
				</div>
			</nav>
			
		</>
	)
}
export default Header