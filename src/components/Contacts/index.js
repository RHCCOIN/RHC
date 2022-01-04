import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Twitter from "../../images/twitter-square-brands.svg";
import styled from 'styled-components';


const ContactSection = styled.div`
    width: 100vw;
    padding: calc(2.5rem + 2.5vw) 0;
    background-color: #101522;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    display: inline-block;
    font-size: calc(1rem + 1.5vw);
    margin-top: 1rem;
    margin-bottom: 3rem;
    position: relative;
    color: #fff;

    &::before {
        content: "";
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 2px solid red;
        transform: translate(-50%);
    }
`;
const Icons = styled.div`
    display: inline;
    margin-bottom: 3rem;
    a {
        &:not(:last-child) {
            margin-right: 2rem;
        }

        &:hover {
            img {
                filter: invert(20%)
                sepia(100%) saturate(300%)
                hue-rotate(580deg);
            }
        }
    }
    img {
        width: 3rem;
        height: 3rem;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
        padding: 1rem calc(0.5rem + 0.5vw);
        margin-bottom: 1rem;
        background-color: #3f3d56;
        border: none;
        border-radius: 4px;
        color: #eff7f8;
        &:active,
        &:focus {
            border: none;
            outline: none;
            background-color: #35353f;
        }
        &::placeholder {
            color: #eff7f8;
            opacity: 0.6;
        }
        &[name="name"] {
            margin-right: 2rem;
        }

    }

    textarea {
        padding: 1rem calc(0.5rem + 0.5vw);
        margin-bottom: 1rem;
        background-color: #3f3d56;
        border: none;
        border-radius: 4px;
        color: #eff7f8;
        &:active,
        &:focus {
            background-color: #35353f;
        }
        &::placeholder {
            color: #eff7f8;
            opacity: 0.8;
        }
    }
    button {
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

const Row = styled.div`
    @media only Screen and (max-width:40em) {
        display: flex;
        flex-direction: column;
        input {
            &[name="name"] {
                margin-right: 0;
            }
        }
    }
`;
const Contact = () => {
    const [showResult] = useState(false);
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_sc8t3iz", 
            "template_4swj794", 
            e.target, 
            "user_DWPIFwBxCuf84Be0QYJgO"
            ).then(() => {
                alert("Your message hasbeen successfully send");
            
            }).catch(err=> console.log(err.text));
            e.target.reset();
            showResult(true)
    };
    return (
        <ContactSection id='contact'>
            <Title>Get in touch</Title>
            <Icons>
                
                <a href="https://twitter.com/CoinRedhat">
                    <img src={Twitter} alt="Twitter" />
                </a>
               
            </Icons>
            <Form onSubmit={sendEmail}>
                <Row>
                <input type="text" name="name" placeholder='your name'/>
                <input type="email" name="email" placeholder='your email address' />
                </Row>
                <textarea name="message" cols="30" rows="2" placeholder='Your messages'></textarea>
                <div style={{ margin: "0 auto" }}>
                    <button>Submit</button>
                        
                    </div>
                
            </Form>
        </ContactSection>
    )
};
export default Contact;