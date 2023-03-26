import { Header } from './components/typography/Header/Header'
import { testIds } from './components/testIds'

const App = (): JSX.Element => 
    <Header data-testid={testIds.app}>
        Hello! Welcome to the boilerplate!
    </Header>

export default App