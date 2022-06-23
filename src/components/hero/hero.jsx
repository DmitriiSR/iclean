import React, {useState} from 'react';
import './hero.css'
import {Col, Container, Row} from "react-bootstrap";
import Logo from "../Logo";
import MenuBtn from "./MenuBtn";

const Hero = (props) => {

    return (
        <div className={'hero'}>
            <Container>
                <Logo/>
                <Row>
                    <Col xs={7}>
                        <div className={'hero__container'}>
                            <h1 className={'hero__title'}>Trust them to be clean</h1>
                            <div className={'hero__circle'}></div>
                        </div>
                        <h2 className={'hero__subtitle'}>The Very Best Robot Vacuums</h2>
                    </Col>
                </Row>
                <MenuBtn/>
            </Container>
        </div>
    );
};

export default Hero;
