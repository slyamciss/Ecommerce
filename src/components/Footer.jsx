import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
`
const Center = styled.div`
flex: 1;
`
const Right = styled.div`
flex: 1;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>TARIQ.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Itaque recusandae at asperiores vitae odio saepe iusto, 
                    repellat ipsa nisi possimus?
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                     <FacebookIcon/>
                    </SocialIcon>
                     <SocialIcon color='E4405F'>
                     <InstagramIcon />
                    </SocialIcon>
                      <SocialIcon color='55ACEE'>
                     <TwitterIcon />
                    </SocialIcon>
                      <SocialIcon color='E60023'>
                     <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
            
        </Container>
    )
}

export default Footer
