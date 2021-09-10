import styled from 'styled-components';
import { Button } from '../styles/Button.js';
import { PageTitle, Warning } from '../styles/MainPageStyles.js';
import CreateHabit from './CreateHabit.js';

export default function Habits () {
    return (
        <>
            <Title />
            <CreateHabit />
            <Warning>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Warning>
        </>
    );
}

function Title () {
    return (
        <PageTitle>
            Meus hábitos
            <Button>+</Button>
        </PageTitle>
    );
}