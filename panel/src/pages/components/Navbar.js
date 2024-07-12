import {Nav} from 'react-bootstrap';


const Navbar = ({children}) => {
  return (
    <>
      <div>
        <div className="wrapper ">
          <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
              <a href="" className="simple-text logo-mini">
               <div className="logo-image-small">
                  
                </div> 
                 <p>CT</p> 
              </a>
              <a href="" className="simple-text logo-normal">
                Dashboard
                <div className="logo-image-big">
              
                </div>
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li className="active ">
                  <a href="javascript:;">
                    
                    <Nav.Item>
                      <Nav.Link href="/Dashboard" eventKey="link-1" > Home</Nav.Link>
                    </Nav.Item>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    
                    <Nav.Item>
                      
                      <Nav.Link href="/tables" eventKey="link-1" > Tables</Nav.Link>
                    </Nav.Item>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
               
                    <Nav.Item>
                      <Nav.Link href="/Users" eventKey="link-1" > Users</Nav.Link>
                    </Nav.Item>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
               
                    <Nav.Item>
                      <Nav.Link href="/Justifications" eventKey="link-1" > justificaciones</Nav.Link>
                    </Nav.Item>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-panel" style={{height: '100vh;'}}>


            
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
              <div className="container-fluid">
                <div className="navbar-wrapper">
                  <div className="navbar-toggle">
                    <button type="button" className="navbar-toggler">
                      <span className="navbar-toggler-bar bar1"></span>
                      <span className="navbar-toggler-bar bar2"></span>
                      <span className="navbar-toggler-bar bar3"></span>
                    </button>
                  </div>
                  <a className="navbar-brand" href="javascript:;">CRM Adiministrativo</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-bar navbar-kebab"></span>
                  <span className="navbar-toggler-bar navbar-kebab"></span>
                  <span className="navbar-toggler-bar navbar-kebab"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                  <form>
                    <div className="input-group no-border">
                      <input type="text" value="" className="form-control" placeholder="Search..."/>
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <i className="nc-icon nc-zoom-split"></i>
                          </div>
                        </div>
                    </div>
                  </form>
                  <ul className="navbar-nav">
                    <li className="nav-item btn-rotate dropdown">
                      <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="nc-icon nc-bell-55"></i>
                        <p>
                          <span className="d-lg-none d-md-block">Some Actions</span>
                        </p>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar --> */}
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  {children}
                </div>
              </div>
            </div>









            <footer className="footer" style={{position: 'absolute', bottom: 0, width: '-webkit-fill-available'}}>
              <div className="container-fluid">
                <div className="row">
                  <nav className="footer-nav">
        
                  </nav>
                  <div className="credits ml-auto">
                    <span className="copyright">
                
                    </span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {/* <!--   Core JS Files   --> */}
        <script src="./assets/js/core/jquery.min.js"></script>
        <script src="./assets/js/core/popper.min.js"></script>
        <script src="./assets/js/core/bootstrap.min.js"></script>
        <script src="./assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
        {/* <!--  Google Maps Plugin    --> */}
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
        {/* <!-- Chart JS --> */}
        <script src="./assets/js/plugins/chartjs.min.js"></script>
        {/* <!--  Notifications Plugin    --> */}
        <script src="./assets/js/plugins/bootstrap-notify.js"></script>
        {/* <!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc --> */}
        <script src="./assets/js/paper-dashboard.min.js?v=2.0.1" type="text/javascript"></script>
      </div>
    </>
  )
};

export default Navbar;