import css from "./SearchBox.module.css";
export default function SearchBox({ inputValue, handleChangeInpyt }) {
  const handleChange = (evt) => {
    handleChangeInpyt(evt.target.value);
  };
  return (
    <>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.filter}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
}
