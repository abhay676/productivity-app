import React from "react";
import styled from "styled-components";

import { Chip } from "@material-ui/core";
import { Card, CardDeck } from "react-bootstrap";

const Section = styled.section`
  border: 2px solid black;
  padding: 5px;
  margin: 5px;
`;

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 10px;
  padding: 10px;
  -webkit-box-shadow: -55px 35px 13px -19px rgba(168, 170, 189, 1);
  -moz-box-shadow: -55px 35px 13px -19px rgba(168, 170, 189, 1);
  box-shadow: -55px 35px 13px -19px rgba(168, 170, 189, 1);
`;

const Footer = styled.footer`
  text-align: center
  padding: 5px;
  margin: 5px;
`;

function index() {
  return (
    <div className="container">
      <Section>
        <p>
          <p className="display-">
            <u>
              <b>Non-sense productivity</b>
            </u>
          </p>{" "}
          is a managment tool used for taking down your projects roadmap and
          helps teams and individual to keep a track.
          <Chip label="In-Development" color="secondary" variant="outlined" />
        </p>
      </Section>
      <CardContainer>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/undraw_co-workers_ujs6.svg"}
            />
            <Card.Body>
              <Card.Title>Teams</Card.Title>
              <Card.Text>
                NSP helps <b>teams</b> to achieve and track their project on
                time.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/undraw_maker_launch_crhe.svg"}
            />
            <Card.Body>
              <Card.Title>Individuals</Card.Title>
              <Card.Text>
                Track your progress as an <b>experienced</b> developer and
                achieve yours <em>10x</em>.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/undraw_Checklist_7dx2.svg"}
            />
            <Card.Body>
              <Card.Title>Todo</Card.Title>
              <Card.Text>
                Can act as your <b>Todo-app</b> with lots of features similar as
                development teams.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </CardContainer>
      <Footer className="blockquote-footer">
        Created by <a href="https://abgoswami.me">Abhay Goswami</a>
        <p>
          <a
            href="https://github.com/abhay676/prod-app"
            className="text-monospace"
          >
            Fork me
          </a>{" "}
          on Github
        </p>
      </Footer>
    </div>
  );
}

export default index;
