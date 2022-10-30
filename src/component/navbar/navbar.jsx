import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "react-bootstrap/dist/react-bootstrap.js";
import { Link } from "react-router-dom";
import { MdHome, MdLogin, MdLogout } from "react-icons/md";
import { TiEdit, TiClipboard } from "react-icons/ti";
import { Book } from "react-bootstrap-icons";
import "./navStyle.css";
import { useEffect, useState } from "react";
//============================

const TopNavbar = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }
    setUser(token);
  });

  //---------------------
  const [user, setUser] = useState(null);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/home">
            <Book /> کتاب آنلاین
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {!user ? (
                <>
                  <Link className="nav-link active " to="/home">
                    <MdHome className="icon" /> خانه
                  </Link>
                  <Link className="nav-link " to="/register">
                    <TiEdit className="icon" /> ثبت نام
                  </Link>

                  <Link className="nav-link " to="/login">
                    <MdLogin className="icon" /> ورود
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link active " to="/home">
                    <MdHome className="icon" /> خانه
                  </Link>
                  <Link className="nav-link " to="/storeroom">
                    <TiClipboard className="icon" /> سامانه انبار
                  </Link>
                  <Link className="nav-link " to="/logout">
                    <MdLogout className="icon" />
                    خروج
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
