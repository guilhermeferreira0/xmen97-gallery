import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;
        background: url('./imagens/bg-desktop.jpg') no-repeat center center;
        background-size: cover;
        background-attachment: fixed;
        z-index: 0;
    `}`;

export const Main = styled.main`
    ${({theme}) => css`
        display: flex;
        flex-direction: row;
        padding: ${theme.spacings.medium};
        justify-content: space-around;
        gap: ${theme.spacings.large};

        @media ${theme.media.ltemedium} {
            flex-direction: column;
            align-items: center;
        }
    `}
`;
