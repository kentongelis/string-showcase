import './App.css';
import { capitilize,
  allCaps,
  capitilizeWords,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
 } from 'kenton-string-library'

function App() {
  return (
    <div>
        <h1>Capitilze function ('hello')</h1>
        <p>{ capitilize('hello') }</p>
        <h1>allCaps method ('hello')</h1>
        <p>{ allCaps('hello') }</p>
        <h1>capitilzeWords method ('hello world')</h1>
        <p>{ capitilizeWords('hello world')}</p>
        <h1>removeExtraSpaces method ('   Hello    world!   ')</h1>
        <p>{ removeExtraSpaces("   Hello    world!   ") }</p>
        <h1>kebobCase method ('   Hello    world!   ')</h1>
        <p>{ kebobCase("   Hello    world!   ") }</p>
        <h1>snakeCase method("   Hello    world!   ")</h1>
        <p>{ snakeCase("   Hello    world!   ") }</p>
        <h1>camelCase method ("Hello world!")</h1>
        <p>{ camelCase("Hello world!") }</p>
        <h1>shift method ("Hello world!")</h1>
        <p>{ shift("Hello world!") }</p>
        <h1>makeHashTag method ("amazing bongo drums for sale")</h1>
        <p>{ makeHashTag("amazing bongo drums for sale") }</p>
    </div>
  );
}

export default App;
