import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xxl navbar-dark bg-dark" aria-label="Seventh navbar example">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Este es un Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleXxl">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/main1" className="nav-link  active"aria-current="page">Main1</Link>
            </li>
            <li className="nav-item">
              <Link to="/main2" className="nav-link active">Main2</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Despleglar</Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/main1" className="dropdown-item">Main1</Link></li>
                <li><Link to="/main2" className="dropdown-item">Main2</Link></li>
                <li><a className="dropdown-item" href="#">Perros viejos</a></li>
              </ul>
            </li>
          </ul>
          <form role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
