import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import CardContainer from './containers/card-container'
import Provider from './store/provider'
import ErrorBounday from './components/error/error'
const namespace = 'main'

const App = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorBounday}>
            <Provider>
                <div className={namespace} data-testid={namespace}>
                    <Router>
                        <Routes>
                            <Route
                                path="cards/:slug"
                                element={<CardContainer />}
                            />
                        </Routes>
                    </Router>
                </div>
            </Provider>
        </ErrorBoundary>
    )
}

export default App
