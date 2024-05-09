export default function SearchBox({ inputValue, handleChangeInpyt }) {
  const handleChange = (evt) => {
    handleChangeInpyt(evt.target.value);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </>
  );
}
