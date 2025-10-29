let nav = document.getElementById('navbar');


nav.innerHTML = `<div class="container-fluid">
      <div class="row">
        <nav class="navbar bgcol_pri navbar-expand-sm nav-hide">
          <div class="container-fluid justify-content-center">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a  target="_blank" class="nav-link top-nav-text text-decoration-none" aria-current="page" href="https://www.dbit.in/">DBIT Home</a>
              </li>
              <li class="nav-item">
                <a  target="_blank" class="nav-link top-nav-text text-decoration-none" href="http://parent.dbit.in/"
                  >Parent Login</a>
              </li>
              <li class="nav-item">
                <a target="_blank" class="nav-link top-nav-text text-decoration-none" href="https://alumni.dbit.in/">Alumni</a>
              </li>
              <li class="nav-item">
                <a target="_blank" class="nav-link top-nav-text text-decoration-none" href="https://elearn.dbit.in/">E-Learn</a>
              </li>
              <li class="nav-item">
                <a target="_blank" class="nav-link top-nav-text text-decoration-none" href="https://workshop.opensourcetutorials.in/?redirect=0">Aspire</a>
              </li>
              <li class="nav-item">
                <a target="_blank" class="nav-link top-nav-text text-decoration-none" href="http://dbitlrc.dbit.in/">Library</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="row">
        <img class="p-0" src="/assets/webp/bsh_banner.webp" alt="BSH Banner" srcset="" />
      </div>
    </div>

    <header class="sticky-top bgcol_pri" style="z-index: 10">
      <nav
        class="navbar navbar-expand-xl bg-light container-fluid justify-content-between"
      >
      <a class="navbar-brand mb-0 h1 ms-3" href="/index.html">BSH DBIT</a>
      
        <button
          class="navbar-toggler me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header justify-content-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 offcanvas-nav">
              <li class="nav-item text-center">
                <a class="nav-link active" aria-current="page" href="/index.html">HOME</a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="/aboutus/aboutus.html">ABOUT US</a>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACADEMICS
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/academics/academic-calendar.html">Academic Calender</a>
                  </li>
                  <li><a class="dropdown-item" href="/academics/timetable.html">Timetable</a></li>
                  <li><a class="dropdown-item" href="/academics/academic_syllabus.html">Syllabus</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FACULTY
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/faculty/faculty_profile.html">Profile</a>
                  </li>
                  <li><a class="dropdown-item" href="/faculty/faculty_recognition.html">Recognition</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  STUDENTS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/students/acheivements.html">Student Acheivements</a>
                  </li>
                  <li><a class="dropdown-item" href="/students/scholarships.html">Scholarships</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EXAMINATION
                </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://www.dbit.in/exam-notice.html">Notice</a></li>
                <li><a class="dropdown-item" href="/examination/exam-calendar.html">Exam Timetable</a>
                <li><a class="dropdown-item" href="/examination/toppers.html">Toppers</a>
                </li>
                
                </ul>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CO-CURRICULAR ACTIVITIES
                </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/cocurricular/newsletters.html">Newsletters</a></li>
                <li><a class="dropdown-item" href="/cocurricular/workshop.html">Workshops</a></li>
                <li><a class="dropdown-item" href="/cocurricular/generalevents.html">General Events</a>
                <li><a class="dropdown-item" href="/cocurricular/technicalevents.html">Technical Events</a></li>
                <li><a class="dropdown-item" href="/cocurricular/clubs.html">Clubs</a></li>
                </ul>
              </li>
              <li class="nav-item text-center">
                <a
                  class="nav-link"
                  href="https://placement.dbit.in/"
                  role="button"
                  aria-expanded="false"
                >
                  PLACEMENTS
                </a>
              </li>
              
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>`