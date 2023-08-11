import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import React from 'react';
import { useState } from 'react';
import Note from './components/Note';
// import notes from './notes';

// function createNotes(noteItem) {
//   return (
//     <Note
//       key={noteItem.key}
//       title={noteItem.title}
//       content={noteItem.content}
//     />
//   );
// }

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
        {/* <Note title="this is the note title" content="this is the note content" /> */}
        {/* {notes.map(createNotes)} */}
      </div>
    </>
  );
}
export default App;
