import { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="app">
      <StarRating />

      {isDialogOpen && (
        <Dialog onClose={() => setIsDialogOpen(false)} />
      )}

      <button
        className="open-dialog-btn"
        onClick={() => setIsDialogOpen(true)}
      >
        Open Dialog
      </button>
    </div>
  );
}

export default App;
