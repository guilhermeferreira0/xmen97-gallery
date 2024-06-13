import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: ${theme.spacings.medium};
        width: 50%;
        gap: ${theme.spacings.small};
        transition: all .5s ease-in-out;

        & > p {
            padding: 0 5px;
            color: ${theme.colors.white};
            text-align: justify;
            font-size: ${theme.fonts.sizes.small};
            line-height: ${theme.spacings.medium};
        }

        @media ${theme.media.ltemedium} {
            width: 100%;
            & > p {
                font-size: 60%;
            }
        }
        `}
        `;

export const Image = styled.img`
    ${({theme}) => css`
        width: 50%;

        @media ${theme.media.ltemedium} {
            width: 80%;
        }
    `}
    `;

export const Heading = styled.h1`
    ${({theme}) => css`
    width: 100%;
    text-align: center;
    padding-bottom: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.fonts.sizes.large};
    border-bottom: 5px solid ${theme.colors.lightBlue};
        @media ${theme.media.ltemedium} {
            font-size: 70%;
        }
    `}
`;