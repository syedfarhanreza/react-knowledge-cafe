import React from 'react';

const Bookmark = ({bookmark,readingTime}) => {

    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

export default Bookmark;