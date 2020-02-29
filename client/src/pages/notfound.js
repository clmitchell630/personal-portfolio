import React from "react";
import { Link } from "react-router-dom";

import { ContentBox } from "../components/ContentBox";
import { Container } from "../components/Grid";

import pageNoFind from "../utils/img/404.jpg";

function NotFound() {
    return (
        <div>
            <ContentBox
                size="10"
                color="b"
                align="center"
                fontcolor="w"
            >
                <Container>
                        <div>
                            <img src={pageNoFind} alt="404 Page not Found" />
                        </div>
                        <div>
                            <Link to="/"><h5>Back to home</h5></Link>
                        </div>
                </Container>
            </ContentBox>
        </div>
    )
}

export default NotFound;
