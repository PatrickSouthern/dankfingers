import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import Link from './link';
import styled from "styled-components"

const Footer = styled.footer`
  padding: 3rem 0;
  background: #f8f9fa;
  a, a:hover {
    color: inherit;
  }
  ul {
    color: rgba(0, 0, 0, 0.5);
    -webkit-padding-start: 0;
    padding: 0;
    & > li {
      list-style: none;
      a, a:hover {
        color: inherit;
      }
    }
  }
`

let SocialLink = ({Icon}) => (
  <Link to="/" className="mr-2">
    <Icon size={30}/>
  </Link>
)

let FooterLink = ({to, children}) => (
  <li>
    <Link to={to}>
      {children}
    </Link>
  </li>
)

export default () => (
  <Footer>
    <Container>
      <Row>
        <Col xs ="6" sm="3">
          <h5>Services</h5>
          <ul>
            <FooterLink to="/">Full Set Up</FooterLink>
            <FooterLink to="/">Troubleshoot Consult</FooterLink>
            <FooterLink to="/">Clone Delivery</FooterLink>
          </ul>
        </Col>
        <Col xs ="6" sm="3">
          <h5>Equipment</h5>
          <ul>
            <FooterLink to="/">Lights</FooterLink>
            <FooterLink to="/">Tents</FooterLink>
            <FooterLink to="/">Nutrients</FooterLink>
          </ul>
        </Col>
        <Col xs ="6" sm="3">
          <h5>Dank Fingers Consults</h5>
          <ul>
            <FooterLink to="/">About Wills</FooterLink>
          </ul>
        </Col>
        <Col xs ="6" sm="3">
          <h5>Contact Us</h5>
          <SocialLink Icon={FaFacebookSquare}/>
          <SocialLink Icon={FaInstagram}/>
        </Col>
      </Row>
    </Container>
  </Footer>
)
