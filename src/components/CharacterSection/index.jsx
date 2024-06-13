import { useCounterContext } from '../../contexts';
import * as Styled from './styles';
import perso from './personagens';

export const CharacterSection = () => {
    const [state, setState] = useCounterContext();

    const handleSaturate = (personagem) => {
        if (state === personagem) {
            return 'saturate(1)'
        }
        return;
    }

    return (
        <Styled.Container>
            <Styled.Heading>
                Escolha seu personagem
            </Styled.Heading>
            <Styled.Main>
                <Styled.Image 
                    src='./imagens/card-ciclope.jpg'
                    onClick={() => setState(perso.ciclope)}
                    alt={perso.ciclope}
                    style={{ filter: handleSaturate(perso.ciclope)}}
                    />
                <Styled.Image 
                    src='./imagens/card-gambit.jpg'
                    onClick={() => setState(perso.gambit)}
                    alt={perso.gambit}
                    style={{ filter: handleSaturate(perso.gambit)}}
                    />
                <Styled.Image 
                    src='./imagens/card-jean-grey.jpg'
                    onClick={() => setState(perso.jeanGrey)}
                    alt={perso.jeanGrey}
                    style={{ filter: handleSaturate(perso.jeanGrey)}}
                    />
                <Styled.Image 
                    src='./imagens/card-jubileu.jpg'
                    onClick={() => setState(perso.jubileu)}
                    alt={perso.jubileu}
                    style={{ filter: handleSaturate(perso.jubileu)}}
                    />

                <Styled.Image 
                    src='./imagens/card-magneto.jpg'
                    onClick={() => setState(perso.magneto)}
                    alt={perso.magneto}
                    style={{ filter: handleSaturate(perso.magneto)}}
                    />
                <Styled.Image 
                    src='./imagens/card-tempestade.jpg'
                    onClick={() => setState(perso.tempestade)}
                    alt={perso.tempestade}
                    style={{ filter: handleSaturate(perso.tempestade)}}
                    />
                <Styled.Image 
                    src='./imagens/card-vampira.jpg'
                    onClick={() => setState(perso.vampira)}
                    alt={perso.vampira}
                    style={{ filter: handleSaturate(perso.vampira)}}
                    />
                <Styled.Image 
                    src='./imagens/card-wolverine.jpg'
                    onClick={() => setState(perso.wolverine)}
                    alt={perso.wolverine}
                    style={{ filter: handleSaturate(perso.wolverine)}}
                />
            </Styled.Main>

        </Styled.Container>
    );
};

