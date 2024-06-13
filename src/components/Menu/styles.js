import styled, { css } from 'styled-components';

export const Nav = styled.nav`
    ${({ theme }) => css`
        width: 100%;
        height: 10%;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${theme.spacings.medium};
    `}`;

export const Button = styled.button`
    ${({theme, visible}) => css`
        width: ${theme.spacings.large};
        color: black;
        background-color: ${theme.colors.blue};
        z-index: 3;
        position: fixed;
        top: 2rem;
        right: 2rem;
        border: none;
        display: none;
        cursor: pointer;
        pointer-events: all;
        border-radius: 4px;

        @media ${theme.media.ltemedium} {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `}
`;

export const Container = styled.div`
    ${({theme, visible}) => css`
        z-index: 3;

        & > ul {
            display: flex;
            gap: ${theme.spacings.small};
        }

        & li {
            list-style-type: none;
            list-style-position: inside;
        }

        @media ${theme.media.ltemedium} {
            background-color: white;
            & > ul {
                position: fixed;
                top: 10%;
                right: ${visible ? '5%' : '-30%' };
                flex-direction: column;
                transition: all .5s ease-in-out;
            }
        }
    `}
`;

export const Link = styled.a`
    ${({theme}) => css`
        font-size: ${theme.fonts.sizes.small};
        text-decoration: none;
        text-transform: uppercase;
        color: ${theme.colors.white};
        display: flex;
        cursor: pointer;
        padding-bottom: ${theme.spacings.xsmall};
        border-bottom: 2px solid transparent;
        transition: border .5s ease-in-out;

        &:hover {
            border-bottom: 2px solid ${theme.colors.mediumGray};
        }
    `}
`;

export const Image = styled.img`
    width: 17.2%;
`;