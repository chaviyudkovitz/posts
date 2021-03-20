import axios from 'axios';

const baseUrl = "http://localhost:3010";

export async function addToMyPost(post) {
    debugger;
    return await axios.post(baseUrl + "/createAPost", post,
        {
            headers: {
                'Authorization': `bearer ${localStorage.token}`
            }
        }).then((res) => {
            return res.data;
        }).catch(err => {
            throw err
        })
}

export async function getMyPosts() {
    debugger;
    return await axios.get(baseUrl + "/getPostsByUserId",
        {
            headers: {
                'Authorization': `bearer ${localStorage.token}`
            }
        }).then((res) => {
            return res.data;
        }).catch(err => {
            throw err
        })
}

export async function deletePost(postId) {
    return await axios.delete(`${baseUrl}/deletePost/${postId}`,        {
            headers: {
                'Authorization': `bearer ${localStorage.token}`
            }
        }).then((res) => {
            return res.data;
        }).catch(err => {
            throw err
        })
}

export async function editpost(postId,title,body) {  
    return await axios.patch(`${baseUrl}/updatePost/${postId}`, {
        title:title,
        body:body
    },
        {
            headers: {
                'Authorization': `bearer ${localStorage.token}`
            }
        }).then((res) => {
            return res.data;
        }).catch(err => {
            throw err
        })
}

export async function createPost(title,body) {
    debugger;  
    return await axios.post(`${baseUrl}/createAPost`, {
        title:title,
        body:body
    },
        {
            headers: {
                'Authorization': `bearer ${localStorage.token}`
            }
        }).then((res) => {
            return res.data;
        }).catch(err => {
            throw err
        })
}