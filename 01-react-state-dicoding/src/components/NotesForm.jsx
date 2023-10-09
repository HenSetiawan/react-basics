import React from "react";
import { useState } from "react";

function NotesForm({ handleAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <form action="" className="notes-form">
        <div className="input-form">
          <h3>Buat Catatan Anda</h3>
        </div>
        <div className="input-form">
          <p>sisa karakter judul: {50 - parseInt(title.length,10)}</p>
        </div>
        <div className="input-form">
          <input
            type="text"
            onChange={(e) => {
              if (e.target.value.length <= 50) {
                setTitle(e.target.value);
              } else {
                e.target.value = title;
              }
            }}
            placeholder="masukan judul"
          />
          {title.length < 2 ? (
            <p className="input-error">input judul harus diisi</p>
          ) : (
            ""
          )}
        </div>
        <div className="input-form">
          <textarea
            placeholder="tuliskan catatan anda"
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {description.length < 2 ? (
            <p className="input-error">input deskripsi harus diisi</p>
          ) : (
            ""
          )}
        </div>
        <div className="input-form">
          <button
            onClick={(event) => {
              event.preventDefault();
              let date = new Date().toJSON();
              const newNote = {
                id: Date.now().toString(),
                title: title,
                body: description,
                archived: false,
                createdAt: date,
              };
              if (title !== "" || description !== "") {
                handleAddNote(newNote);
              }
            }}
          >
            masukan catatan
          </button>
        </div>
      </form>
    </div>
  );
}

export default NotesForm;
