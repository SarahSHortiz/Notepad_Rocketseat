import logo from "./assets/Logo.svg";
import NoteCard from "./components/note-card";
import NewNoteCard from './components/new-note-card';

export function App() {
    return (
        <div className="mx-auto max-w-6xl my-12 space-y-6">
            <img src={logo} alt="NLW Expert" />

            <form className="w-full">
                <input
                    type="text"
                    placeholder="Busque em suas notas..."
                    className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-state-500"
                />
            </form>

            <div className="h-px bg-slate-700" />

            <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
                <NewNoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
            </div>
        </div>
    );
}