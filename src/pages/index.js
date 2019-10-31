import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Placeholder from '../images/glotonapp.png';
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
              Desarrollador web | emprendedor | CTO de buenaPeople.com
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Contratame
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Experiencia
            </t.H2>
            <t.P align="center" max70 className="who-desc">
              Mateo perez salazar es emprendedor,desarrollador web ,amante de la tecnología y con mucha ambición por
              innovar. Con 10 años de experiencia desarrollando para móvil y web. Mateo es actualmente co-fundador de
              buenapeople.com y CTO . Desarrollador web con 10 años de experiencia en diferentes lenguajes como PHP,
              Javascript o python.
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
                <t.P>Buscador de restaurantes (ejemplo: 'Los angeles','New york','Chicago','Madrid')</t.P>
                <t.P>He usado Reactjs|Material-ui| API Zomato</t.P>
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
          {/*  <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Placeholder website</t.H2>
                <t.P>Lorem ipsum</t.P>
                <t.P>Dolor sit amet</t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="#">
                  Lorem ipsum
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Placeholder} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Placeholder} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Placeholder website</t.H2>
                <t.P>Lorem ipsum</t.P>
                <t.P>Dolor sit amet</t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="#">
                  Lorem ipsum
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Placeholder website</t.H2>
                <t.P>Lorem ipsum</t.P>
                <t.P>Dolor sit amet</t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="#">
                  Lorem ipsum
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Placeholder} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
        </Block>*/}
          <WorkWithMe>
            <t.H1 green>Contacta conmigo</t.H1>
            <t.LargeP>Tienes un proyecto en concreto y necesitas asesoría? Hablemos ! </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contacta conmigo
            </HireMe>
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
