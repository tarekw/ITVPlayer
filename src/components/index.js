import SearchInput from './containers/SearchInput'
import Results from './containers/Results'
import '../stylesheets/main.scss'

export const App = () =>
    <div className="app">
        <SearchInput />
        <Results />
    </div>

export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Whoops, route not found</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>