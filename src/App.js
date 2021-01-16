import './App.css';
import useInput from './hooks/use-input';

// Composable and reusable logic(hooks)
// DRY - do not repeat yourself
function App() {
  const [name, setName, handleNameChange] = useInput('name', '');
  const [surname, setSurname, handleSurnameChange] = useInput('surname', '');
  const [patronimic, setPatronimic, handlePatronimicChange] = useInput(
    'patronimic',
    ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setSurname('');
    setPatronimic('');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Nume
          <input id="name" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Prenume
          <input id="surname" value={surname} onChange={handleSurnameChange} />
        </label>
        <label>
          Patronimic
          <input
            id="patronimic"
            value={patronimic}
            onChange={handlePatronimicChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
