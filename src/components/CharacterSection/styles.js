import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        width: 50%;

        @media ${theme.media.ltemedium} {
            width: 100%;
        }
    `}`;

export const Heading = styled.h2`
    ${({ theme }) => css`
        text-align: center;
        width: 100%;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.sizes.medium};
        text-transform: uppercase;
        padding-bottom: 5px;
        border-bottom: 5px solid ${theme.colors.lightBlue};
    `}`;

export const Main = styled.main`
    ${({theme, state}) => css`
        padding: ${theme.spacings.medium};
        display: grid;
        gap: ${theme.spacings.small};
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-template-rows: repeat(auto-fill, 1fr);

        @media ${theme.media.ltemedium} {
            gap: 5px;
            justify-content: center;
            align-items: center;
            grid-template-columns: repeat(auto-fill, 150px);
        }
    `}
`;

export const Image = styled.img`
    ${({theme}) => css`
        filter: saturate(0.1);
        transition: all .4s ease-in-out;
        cursor: pointer;

        &:hover {
            filter: saturate(1);
            box-shadow: 0px 0px 150px ${theme.colors.blue};
        }   

        @media ${theme.media.ltemedium} {
            width: 70%;
        }

    `}
`;
