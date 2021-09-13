import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RoomIcon from '@material-ui/icons/Room';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`
const Right = styled.div`
flex: 1;
padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
cursor: pointer;
`
const Payment = styled.img`
width: 50%;
cursor: pointer;
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
            <Center>
                <Title>Useful Links</Title>
                <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Man Fashion</ListItem>
                  <ListItem>Woman Fashion</ListItem>
                  <ListItem>Accessories</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                 <Title>Contact</Title>
                 <ContactItem>
                     <RoomIcon style={{marginRight:'10px'}}/>260 Christiana Rd, Newcastle,De 19720
                 </ContactItem>
                 <ContactItem>
                    <PhoneInTalkIcon style={{marginRight:'10px'}}/> +1 3027613557
                 </ContactItem>
                 <ContactItem>
                    <MailOutlineIcon style={{marginRight:'10px'}}/> slyamciss@gmail.com
                 </ContactItem>
                  <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
            
        </Container>
    )
}

export default Footer
