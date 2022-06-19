const posts = [
  { userId: "1", postTitle: "hello", postBody: "oley" },
  { userId: "2", postTitle: "hesadsallo", postBody: "olesafasfasy" },

  {
    userId: "3",
    postTitle: "hasdsadasdsadsadsaello",
    postBody: "oasdsadasdley",
  },

  {
    userId: "4",
    postTitle: "hasfsafsafellasfsafsafsafasfaso",
    postBody: "oleasfsafsafasfsasafasy",
  },
];
const addPost= (newPost)=>{
    const promise1=new Promise((resolve,reject)=>{
        posts.push(newPost);
        resolve(posts);
        reject('There is A Error');
    }
    
    );
    return promise1;
}
const listPost= ()=>{
    posts.map((post)=>{
        console.log(post.userId + " " + post.postTitle);
    });
}

async function showPosts(posts){
    try {
        if(posts){
            listPost();
        
            await addPost({userId: "5", postTitle: "new", postBody: "newoley"});
            listPost();
        }else{
            console.log("posts is empty");
        }
        
    } catch (error) {
        console.log(error);
    }
  
}

async function processData(){
    try {
        const receivedData=await showPosts(posts);
        console.log(receivedData);
    
    } catch (error) {
        console.log(error);
    }
  
}

processData();