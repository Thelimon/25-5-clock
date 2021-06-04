import React from 'react'
import BreakButton from '../components/BreakButton'
import MainTitle from '../components/MainTitle'
import SessionButton from '../components/SessionButton'
import { MainContainer } from '../styles/ClockStyled'

const Clock = () => {
    return (
        <MainContainer>
            <MainTitle />
            <div>
                <BreakButton />
                <SessionButton />
            </div>
        </MainContainer>
    )
}

export default Clock
