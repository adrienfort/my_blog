import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './CreateArticlePopup.css'

function CreateArticlePopup({articles, setArticles}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [open, setOpen] = useState(false);

    const setOpenTrue = () => setOpen(true);

    const titleChange = (event) => setTitle(event.target.value);
    const contentChange = (event) => setContent(event.target.value);

    const articleSubmit = (event) => {
        event.preventDefault()
        const article = {
            title: title,
            content: content,
            created_at: new Date()
        }
        articles.push(article)
        setArticles([...articles])
        setOpen(false)
    };

    return (
        <Popup trigger={<button className="post-btn"> Add an article </button>} open={open} onOpen={setOpenTrue} modal nested>
            {close => (
                <div className="modal">
                    <button className="modal-close" onClick={close}>&times;</button>
                    <div className="modal-header">
                        <h4>You are creating an article ...</h4>
                    </div>
                    <div className="modal-content">
                        <form className="article-form" onSubmit={articleSubmit}>
                            <div className="article-form-field">
                                <input placeholder="Your title ..." id="article-title"
                                       type="text" name="article_title"
                                       onChange={titleChange}></input>
                            </div>
                            <div className="article-form-field">
                                <textarea placeholder="Your content ..." id="article-content"
                                          type="text" name="article_content"
                                          onChange={contentChange}></textarea>
                            </div>
                            <button id="article-submit-btn" type="submit">Create</button>
                        </form>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default CreateArticlePopup;
