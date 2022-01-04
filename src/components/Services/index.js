import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg'
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>RedhatCoin core features</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2><center>Decentralized Infrastructure</center></ServicesH2>
                    <ServicesP>RedhatCoin is a fully decentralized peer-to-peer electronic system that does not rely on any central authority like a government or financial institution.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Ultra-low processing fee</ServicesH2>
                    <ServicesP>RedhatCoin brings sound money to the world, Merchants and users are empowered with low fee. The future shines brightly with unrestricted growth, global adoption, and decentralized development.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Minimal & Non-Mintable <center>Supply</center></ServicesH2>
                    <ServicesP>1 billion coins will ever be created. This makes RedhatCoin a hard asset, like land or gold, providing an opportunity for people to store value in digital realm over long periods of time.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services;
