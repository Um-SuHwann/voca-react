export default function CreateDay() {
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" />
      </div>

      <button>Day 추가</button>
    </form>
  );
}
