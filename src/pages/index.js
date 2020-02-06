import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Placeholder from '../images/glotonapp.png';
import Bands from '../images/crudbands.png';
import Todolistimg from '../images/todolistsockets.png';
import Formimg from '../images/form.png';
import Tvserieimg from '../images/seriemaster.png';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Mateo_perez" className="avatar" />
            <t.H1 primary align="center">
              Mateo Pérez Salazar
            </t.H1>
            <t.LargeP align="center" max45>
              Fullstack developer | entrepreneur | ex CTO of buenaPeople.com
            </t.LargeP>
            {/*<HireMe large onClick={this.openContactPopup} book>
              Contratame
            </HireMe>*/}
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Background
            </t.H2>
            <t.P align="center" max70 className="who-desc">
              Mateo Perez Salazar is an entrepreneur, fullstack developer and tech leader. Mateo was the co-founder and
              CTO of buenaPeople startup in Colombia for 3 years.
              <br />
              My passion is to learn every day (tech, entrepreneurship, improve my skills), and my hobbies are to watch
              series, to code(of course!), and to read.
            </t.P>
            <t.H2 primary align="center" bold className="portfolio">
              Portfolio
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Placeholder} alt="glotonapp" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Gloton App</t.H2>
                <t.P>Restaurant searcher (ex: 'Los angeles','New york','Chicago','Madrid')</t.P>
                <t.P>I use Reactjs|Material-ui| API Zomato</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://vigilant-heyrovsky-35d807.netlify.com/"
                >
                  Link
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>CRUD bands</t.H2>
                <t.P>A very simple API in Expressjs</t.P>
                <t.P>I use Expressjs | Mongo db</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/m121/bandscrudexpress"
                >
                  Github repository
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Bands} alt="Bands crud expressjs" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Todolistimg} alt="To-do-list-sockets" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>To-do list</t.H2>
                <t.P>A to-do list with its status. I use sockets for a bidirectional communication client-server</t.P>
                <t.P>I use Expressjs|Socket.IO</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/m121/todolistsockets"
                >
                  Github repository
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Form validation</t.H2>
                <t.P>A form validation sign up in vanilla Javascript</t.P>
                <t.P>I use Javascript | bootstrap</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/m121/formvalidation"
                >
                  Github repository
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Formimg} alt="form-validation" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Tvserieimg} alt="Series searcher" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Series searcher</t.H2>
                <t.P>Series searcher. Search by name</t.P>
                <t.P>I use Boostrap|Javascript|OMDb api </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://jolly-edison-f11295.netlify.com/"
                >
                  Link
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>

          <WorkWithMe>
            <t.H1 green>Looking for more information? </t.H1>
            <t.LargeP>
              <LinkButton
                primary
                bold
                className="link"
                as="a"
                target="_blank"
                href="https://www.linkedin.com/in/mateop/"
              >
                Linkedin
              </LinkButton>{' '}
              |{' '}
              <LinkButton primary bold className="link" as="a" target="_blank" href="https://github.com/m121">
                Github
              </LinkButton>{' '}
              |{' '}
              <LinkButton
                primary
                bold
                className="link"
                as="a"
                target="_blank"
                href="mailto:mateo.perez.salazar@gmail.com"
              >
                mateo.perez.salazar@gmail.com
              </LinkButton>
            </t.LargeP>

            {/* <HireMe onClick={this.openContactPopup} book>
              Contact with me!
            </HireMe>*/}
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "mateo.webp" }) {
      ...fluidImage
    }
  }
`;
