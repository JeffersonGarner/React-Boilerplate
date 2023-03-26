import {
    describe, 
    expect, 
    test 
} from 'vitest'
import { render, screen } from '@testing-library/react'
import { testIds } from './components/testIds'
import App from './App'

describe('App component', () => {
    test('Should shallow render', async() => {
        const appComponentId = testIds.app

        render(<App/>)

        const appIsShallowRendered = await screen.findAllByTestId(appComponentId)

        expect(appIsShallowRendered).toBeTruthy()
    })
})