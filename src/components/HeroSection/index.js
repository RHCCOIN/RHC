import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);
  
    const onCopyText = () => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    };
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>RedhatCoin Made Life Easier</HeroH1>
                <HeroP>
                RedhatCoin is a cryptocurrency which combines proven solutions with innovative technology.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Get started {hover ? <ArrowForward/>:<ArrowRight/>}</Button>
                </HeroBtnWrapper>

                   
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection;
