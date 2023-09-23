import React from "react";
import { showFormattedDate } from "../utils";
function NotesList({ archived, noteList, handleArchived, handleDelete }) {
  return (
    <div className="notes-container">
      <h3>{archived ? "Arsip" : "Catatan Aktif"}</h3>
      <div className="notes-list">
        {noteList && noteList.length !== 0
          ? noteList.map((note) => {
              return (
                <div className="note-item" key={note.id}>
                  <h4>{note.title}</h4>
                  <p>{showFormattedDate(note.createdAt)}</p>
                  <p>{note.body}</p>
                  <button onClick={() => handleDelete(note.id)}>Hapus</button>
                  <button
                    onClick={() => handleArchived(note.id, note.archived)}
                  >
                    {note.archived ? "Aktifkan" : "Arsipkan"}
                  </button>
                </div>
              );
            })
          : <p>Tidak ada catatan</p>}
      </div>
    </div>
  );
}

export default NotesList;
