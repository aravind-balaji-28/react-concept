// import React, { useEffect, useState } from "react";
// import { FixedSizeList } from "react-window";

// const ReactWindowVirtualization = () => {
//     const [posts, setPosts] = useState<any[]>([]);
//     const [page, setPage] = useState(1);

//     const fetchPosts = async () => {
//         const response = await fetch(
//             `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`
//         );

//         const data = await response.json();

//         setPosts((prev) => [...prev, ...data]);
//     };

//     useEffect(() => {
//         fetchPosts();
//     }, [page]);

//     const Row = ({ index, style }: any) => {
//         const post = posts[index];

//         if (index === posts.length - 1 && posts.length < 100) {
//             setTimeout(() => {
//                 setPage((prev) => prev + 1);
//             }, 500);
//         }

//         return (
//             <div
//                 style={{
//                     ...style,
//                     borderBottom: "1px solid #ccc",
//                     padding: "10px",
//                 }}
//             >
//                 <h4>{post?.title}</h4>
//                 <p>{post?.body}</p>
//             </div>
//         );
//     };

//     return (
//         <FixedSizeList
//             height={500}    
//             width={500}
//             itemSize={150}
//             itemCount={posts.length}
//         >
//             {Row}
//         </FixedSizeList>
//     );
// };


import React from 'react';
import Select from 'react-select';
import { FixedSizeList as List } from 'react-window';

const options = Array.from({ length: 5000 }, (_, item) => {
    return {
        label: `Option ${item + 1}`,
        value: item + 1,
    };
});

const MenuList = (props: any) => {
    console.log(props, 'props');
    return (
        <List
            height={200}
            itemCount={props.options.length}
            itemSize={35}
            width={'100%'}
        >
            {({ index, style }) => (
                <div style={style}>{props.options[index].label}</div>
            )}
        </List>
    );
};

const ReactWindowVirtualization = () => {
    return (
        <>
            <Select options={options} components={{ MenuList }} />
        </>
    );
};


export default ReactWindowVirtualization;