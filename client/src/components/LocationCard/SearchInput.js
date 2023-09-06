const SearchInput = ({ value, onChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Unesite ime lokacije"
        value={value}
        onChange={onChange}
      />
      <button onClick={onSearch}>Pretraži</button>
    </div>
  );
};

export default SearchInput;
