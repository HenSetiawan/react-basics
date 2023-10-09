import React from "react";

function SearchNotes({ handleSearch }) {
  return (
    <div>
      <form action="">
        <div className="input-form">
          <input
            type="text"
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
            placeholder="cari catatan..."
          />
        </div>
      </form>
    </div>
  );
}

export default SearchNotes;
