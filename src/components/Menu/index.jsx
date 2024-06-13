import { useState } from 'react';
import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = () => {
    const [visible, setVisible] = useState(false);

    return (
        <Styled.Nav>
            <Styled.Image src='./imagens/logo.png'
            alt='Logotipo XMEN97'></Styled.Image>
            <Styled.Button 
                visible={visible} 
                onClick={() => setVisible((bol) => !bol)}
                aria-label="Open/Close Menu"
            >
                {visible ? (<CloseIcon aria-label="Close Menu"/>) : (
                    <MenuIcon aria-label="Open Menu" />
                )}
            </Styled.Button>
            <Styled.Container 
                visible={visible} 
                onClick={() => setVisible(false)}
            >
                <ul>
                    <li><Styled.Link href='https://github.com/guilhermeferreira0/guilhermeferreira.github.io' target='_blank'>Portfólio</Styled.Link></li>
                    <li><Styled.Link href=''>Github</Styled.Link></li>
                    <li><Styled.Link>Linkedin</Styled.Link></li>
                    <li><Styled.Link href='https://www.disneyplus.com/pt-br/series/x-men-97/vc1XIz90ZNH5' target='_blank'>Disney+</Styled.Link></li>
                </ul>
            </Styled.Container>
        </Styled.Nav>
    );
};
