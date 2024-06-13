import * as Styled from './styles';

export const CharacterView = ({ person }) => {
    const {title, text, url} = {...person[0]}

    return (
        <Styled.Container>
            <Styled.Image src={url} aria-label='Personagem XMEN97'/>
            <Styled.Heading>{title}</Styled.Heading>
            <p>{text}</p>
        </Styled.Container>
    );
};
