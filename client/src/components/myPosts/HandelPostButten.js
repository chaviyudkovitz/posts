import React, { useState } from 'react'


export default function HandelPostButten(props) {
    const { post, name, handelPost, setCurrentPost } = props;
    const [inputData, setInputData] = useState();
    const [inputTitle, setInputTitle] = useState();

    return (
        <>
            <button type="button"
                class="btn btn-info"
                data-toggle="modal"
                data-target={`#r${name}`}
                onClick={() =>setCurrentPost?setCurrentPost(post):""}>{name}
            </button>

            <div class="modal fade"
                id={`r${name}`}
                aria-labelledby={`${name}`}
                aria-hidden="true">

                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">

                            <h5 class="modal-title"
                                id={`${name}`}>
                                Edit Post
                                 </h5>

                            <button type="button"
                                class="btn-close"
                                data-dismiss="modal"
                                aria-label="Close" >
                            </button>

                        </div>

                        <div class="modal-body">
                            <form>
                                <label for="recipient-name"
                                    class="col-form-label">
                                    Title:
                                         </label>

                                <input type="text"
                                    class="form-control"
                                    id="recipient-name"
                                    onBlur={(e) => { setInputTitle(e.target.value) }}
                                />

                                <label for="message-text"
                                    class="col-form-label">
                                    Content:
                                        </label>

                                <textarea class="form-control"
                                    id="message-text"
                                    onBlur={(e) => { setInputData(e.target.value) }}>
                                </textarea>

                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="button"
                                class="btn btn-secondary "
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => { handelPost(inputTitle, inputData) }}>
                                save
                                 </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
