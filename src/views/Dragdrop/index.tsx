import React, { useState } from "react";
import "./drag-drop.css";

interface Box {
    id: number;
    colorClass: string;
    content: React.ReactNode;
}

const boxes: Box[] = [
    {
        id: 1,
        colorClass: "box-card--red",
        content: "Red Box",
    },
    {
        id: 2,
        colorClass: "box-card--green",
        content: "Green Box",
    },
    {
        id: 3,
        colorClass: "box-card--yellow",
        content: (
            <div className="yellow-inner">
                <div className="yellow-inner-card">Yellow Box</div>
            </div>
        ),
    },
];

const DragDrop: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [layoutItems, setLayoutItems] = useState<Box[]>([]);
    const [isDragOver, setIsDragOver] = useState<boolean>(false);

    const handleDragStart = (
        e: React.DragEvent<HTMLDivElement>,
        id: number
    ): void => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", String(id));
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (): void => {
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);

        const draggedId = Number(e.dataTransfer.getData("text/plain"));
        const droppedItem = boxes.find((box) => box.id === draggedId);

        if (droppedItem) {
            setLayoutItems((prev) => [...prev, droppedItem]);
        }
    };

    return (
        <div className="page">
            <div
                className={`drop-zone${isDragOver ? " drag-over" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <h1>Drop Here</h1>
                <div className="drop-zone-items">
                    {layoutItems.map((item, index) => (
                        <div
                            key={index}
                            className={`box-card ${item.colorClass}`}
                        >
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>

            <div className="btn-open-modal">
                <button onClick={() => setOpen(true)}>Open Modal</button>
            </div>

            {open && (
                <div className="modal-overlay">
                    <div className="modal-panel">
                        <button
                            className="modal-close"
                            onClick={() => setOpen(false)}
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        <div className="modal-boxes">
                            {boxes.map((box) => (
                                <div
                                    key={box.id}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, box.id)}
                                    className={`box-card ${box.colorClass} box-card--draggable`}
                                >
                                    {box.content}
                                </div>
                            ))}
                        </div>

                        <p className="modal-hint">Drag boxes into layout area</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DragDrop;
