
export default function NoteCard() {
    return (
        <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-line-400 outline-none">
            <span className="text-sm font-medium text-slate-200">
                Há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-300">Lorem aipsum dolor, sit amet consectetur adipisicing elit. Praesentium, corrupti optio? Reiciendis reprehenderit accusamus dolorum, rerum voluptate quam corrupti facilis quisquam nostrum asperiores nam magni, nemo impedit similique, necessitatibus quos!</p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/30 to-black/0 pointer-events-none">
            </div>
        </button>

    )
}
