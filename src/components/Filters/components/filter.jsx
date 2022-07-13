function Filter() {
  return (
    <div className="mr-20">
      <select className="bg-white p-6 shadow-md rounded-md">
        <option defaultValue disabled>
          Filter by Region
        </option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
