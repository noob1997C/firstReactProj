
const Post = (props) => {
    return (
      <div className="mt-1 flex flex-col items-center">
        <div className="flex items-center justify-center flex-row-reverse">
          <div>Post user name</div>
          <div className="rounded-full w-12 h-12">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrV5FwfY_rhAJ68NuJdR3Fy_smBGmMYup8Mw&usqp=CAU" 
              alt="Avatar"/>
          </div>
        </div>
        <div>{props.message}</div>
        <div><span>like </span>{props.likeCount}</div>
      </div>
    );
}

export default Post;