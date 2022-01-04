import React from 'react';
import Icon1 from '../../images/svg-5.svg';
import Icon2 from '../../images/svg-6.svg';
import Icon3 from '../../images/svg-7.svg';
import Icon4 from '../../images/svg-8.svg';
import Icon5 from '../../images/svg-9.svg';
import Icon6 from '../../images/svg-10.svg';
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './TechnicalElements';

const Technical = () => {
    return (
        <ServicesContainer id='discover'>
            <ServicesH1>Technical Advantages</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Two-layer communication <center>protocol</center></ServicesH2>
                    <ServicesP>The basic layer protocol handles message distribution, and the extension layer protocol handles product layering.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2><center>Full-duplex communication</center></ServicesH2>
                    <ServicesP>Strict duplex communication to ensure message reliability.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Unique encryption <center>mechanism</center></ServicesH2>
                    <ServicesP>Guarantee message security based on specific message encryption mechanisms.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2><center>Maximum decentralization</center></ServicesH2>
                    <ServicesP>Applying blockchain technology, all information is not stored on a centralized server.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Anonymity</ServicesH2>
                    <ServicesP>Using blockchain technology to ensure anonymity and anti-tracking.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Multi-format support</ServicesH2>
                    <ServicesP>Text, pictures, files, audio and video can be transferred.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Technical;
