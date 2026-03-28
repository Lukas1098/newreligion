
const MANIFEST = [
    {
        content: "New Religion is not a brand. It's a belief system built for those who dress with intention. Every piece is a statement against the disposable — crafted to outlast trends, seasons, and noise."
    },
    {
        content: "The Renaissance Edition marks a return to craft. To weight, texture, and the kind of detail that only reveals itself up close. We looked back to move forward — drawing from ateliers, archives, and the quiet confidence of those who never needed to explain their taste."
    },
    {
        content: "We don't do drops. We don't do hype. We release when it's ready, for the few who've been waiting. If you found us, you already know why you're here."
    }
]

export function Manifest() {
    return (
        <section id="about">
            <div className="w-full py-8 mt-10 mx-auto">
                <div className="flex items-center justify-center px-4 py-12">
                    <div className='max-w-220 flex flex-col gap-4'>
                        {MANIFEST.map((item, index) => (
                            <p key={index} className="text-xs font-sans font-semibold uppercase">{item.content}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}