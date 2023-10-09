import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";
import SearchNotes from "./components/SearchNotes";
import { getInitialData } from "./utils";
import "./App.css";

function App() {
  const [queryFilter, setQueryFilter] = useState("");
  const [noteList, setNoteList] = useState([]);

  const handleArchived = (id, archived) => {
    const updatedNoteList = noteList.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !archived };
      }
      return note;
    });
    setNoteList(updatedNoteList);
  };

  const handleDelete = (id) => {
    const filteredNoteList = noteList.filter((note) => note.id !== id);
    setNoteList(filteredNoteList);
  };

  const handleAddNote = (newNote) => {
    setNoteList((currentNoteList) => [...currentNoteList, newNote]);
  };

  const handleSearch = (keyword) => {
    setQueryFilter(keyword);
  };

  useEffect(() => {
    setNoteList(getInitialData());
  }, [queryFilter]);
  return (
    <div className="App">
      <Navbar />
      <NotesForm handleAddNote={handleAddNote} />
      <SearchNotes handleSearch={handleSearch} />
      <NotesList
        archived={false}
        noteList={noteList.filter(
          (item) =>
            item.archived === false &&
            item.title.toLowerCase().includes(queryFilter.toLocaleLowerCase())
        )}
        handleArchived={handleArchived}
        handleDelete={handleDelete}
      />
      <NotesList
        archived={true}
        noteList={noteList.filter(
          (item) =>
            item.archived === true &&
            item.title.toLowerCase().includes(queryFilter.toLocaleLowerCase())
        )}
        handleArchived={handleArchived}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
