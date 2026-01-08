interface UniverseTagProps {
    tag: string;
    count: string;
}

export default function UniverseTag({ tag, count }: UniverseTagProps) {
    return (
        <div className="tag-row group flex items-center justify-between py-1 px-1 rounded cursor-pointer transition-colors">
            <span className="tagItem bg-primary text-primary-dark rounded-3xl px-2.5 py-1.5 text-xs w-fit leading-3 flex justify-between">{tag}</span>
            <span className="text-xs text-gray-500">{count}</span>
        </div>
    );
}
