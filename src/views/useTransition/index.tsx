// what is useTransition?
// useTransition is a React Hook that lets you render a part of the UI in the background.

// without transition
// 1️⃣ Urgent updates (High Priority)
// typing, clicking, input onChange, cursor movement

// with transition
// 2️⃣ Non-urgent updates (Low Priority)
// filtering large lists, rendering big tables, expensive calculations, heavy re-renders

import React, { useState, useTransition } from 'react';

function UseTransition() {
  const [name, setName] = useState<string>('');
  const [lists, setLists] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const LIST_SIZE: number = 800000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // urgent update → input should feel instant
    setName(value);
    // non-urgent update → heavy list rendering
    startTransition(() => {
      const dataList: string[] = [];
      for (let i: number = 0; i < LIST_SIZE; i++) {
        dataList.push(`${value} - item ${i}`);
      }
      setLists(dataList);
    });
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <>
          {lists.map((item: string, index: number) => (
            <div key={index}>{item}</div>
          ))}
        </>
      )}
    </div>
  );
}

export default UseTransition;
