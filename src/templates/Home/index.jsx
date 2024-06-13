import React from 'react';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { CharacterSection } from '../../components/CharacterSection';
import { CharacterView } from '../../components/CharacterView';
import { useCounterContext } from '../../contexts';
import { personSelected } from '../../utils/personSelected'

export const Home = () => {
    const [state] = useCounterContext();

    return (
        <Styled.Container>
            <Menu />
            <Styled.Main>
                <CharacterSection />
                <CharacterView person={personSelected(state)}/>
            </Styled.Main>
        </Styled.Container>
    );
};

