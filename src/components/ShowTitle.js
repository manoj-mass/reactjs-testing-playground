import { useState } from 'react';
import { getPost } from '../apis/Posts';

function ShowTitle() {
    const [title, setTitle] = useState('')

    const getpost = () => {
        getPost().then(res => setTitle(res.title));
    }
    return (
        <>
            <div className="Title">
                <h1>Title is - <label data-testid={"titleID"}>{title}</label></h1>
                <button onClick={getpost}>Get Title</button>
            </div>
        </>
    );
}

export default ShowTitle;
