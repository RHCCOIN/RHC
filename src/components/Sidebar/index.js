import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    
    return (
        <SidebarContainer isOpen ={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu >
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>Technical Advantages</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Features</SidebarLink>
                    <SidebarLink to='roadmap' onClick={toggle}>Roadmap</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Connect</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
