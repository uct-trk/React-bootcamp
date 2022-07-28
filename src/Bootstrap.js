import React from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bootstrap() {
    return (
        <>
            <div>
                <h3>Bootstrap</h3>
                <Button>Buton</Button>
                <Button variant='success'>Buton</Button>
            </div>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    HOME
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    PROFILE
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    CONTACT
                </Tab>
            </Tabs>
        </>
    )
}

export default Bootstrap