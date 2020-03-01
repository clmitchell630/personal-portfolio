import React from "react";
import "./footer.scss";
import { Container, Row, Col } from "../Grid";

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col size="4"></Col>
                    <Col size="4">
                        <div>
                            <h4>Chris Mitchell</h4>
                            <a href="mailto:clmitchell630@gmail.com" className="emailLink"><i class="fas fa-envelope"></i>  clmitchell630@gmail.com</a>
                        </div>
                        <div class="row justify-content-md-center bottom-bdr">
                            <div>
                                <ul class="nav">
                                    <li class="nav-item icon-style">
                                        <a class="navLink" role="button"
                                            href="https://www.linkedin.com/in/clmitchell630/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    </li>
                                    <li class="nav-item icon-style">
                                        <a class="navLink" role="button" href="https://github.com/clmitchell630" target="_blank"><i class="fab fa-github-square"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>Copyright © www.cmitchell.me 2020</p>
                    </Col>
                    <Col size="4"></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;