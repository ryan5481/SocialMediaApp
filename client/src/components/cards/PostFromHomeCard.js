import { useState } from "react";
import { useSelector } from "react-redux";
import { BsFillEmojiSmileFill, BsFillImageFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PostFromHomeCard = () => {
  const navigate = useNavigate();
  const [inputPostText, setInputPostText] = useState("");
  const [uploadToPostImage, setUploadToPostImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const { dbUserId, userName, fullName, pfpImgName } = useSelector(
    (state) => state.user
  );
  const values = { dbUserId, userName, fullName, inputPostText, pfpImgName };

  const setAndrenderSelectedImage = (e) => {
    setUploadToPostImage(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Make posts from the homepage
  const handleChange = async (event) => {
    setInputPostText(event.target.value);
  };
  const handleOnClick = async () => {
    setInputPostText(" ");
    setSelectedImage(null);

    const bodyFormData = new FormData();
    Object.keys(values).map((item) => {
      bodyFormData.append(item, values[item]);
    });
    bodyFormData.append("uploadToPostImageName", uploadToPostImage);
    axios({
      method: "post",
      url: "http://localhost:9000/feed",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function(response) {
        if (response.status == 200) {
          alert(response.data.msg);
        } else {
          alert(response.data.msg);
        }
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <div className="home-card">
      <img
        src={require("../../uploads/profilePictures/" + pfpImgName)}
        alt="Avatar"
        className="profileButton"
        size={40}
        onClick={() => ""}
      ></img>
      <div className="home-card-body">
        <div className="post-contents">
          <textarea
            placeholder="What's happening?"
            value={inputPostText}
            onChange={handleChange}
            style={{ height: "500" }}
          ></textarea>
          <img src={selectedImage} className="upload-post-img-preview"></img>
        </div>
        <div className="home-card-footer">
          <div className="home-card-icons">
            <BsFillEmojiSmileFill className="emojiButton" size={25} />
            <input
              name=""
              type="file"
              id="upload-post"
              onChange={(e) => setAndrenderSelectedImage(e)}
              hidden
            />
            <label htmlFor="upload-post" className="uploaad-img-post-btn">
              <BsFillImageFill size={25} />
            </label>
          </div>
          <button className="button" onClick={handleOnClick}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostFromHomeCard;
