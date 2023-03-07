import { useState } from "react";
import CustomNavbar from "../components/navigation components/navbar";
import { BsFillImageFill, BsFillEmojiSmileFill } from "react-icons/bs";
const Home = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = async (event) => {
    setInputText(event.target.value);
  };

  const handleOnClick = async () => {
    setInputText(" ");
  };

  return (
    <div className="full-page">
      <CustomNavbar />

      <div className="home-page">
        <div>empty space</div>
        <div className="feeds-column">
          <div className="post-card">
            <img
              src={
                "https://tse2.mm.bing.net/th?id=OIP.9B2RxsHDB_s7FZT0mljnhQHaHa"
              }
              alt="Avatar"
              className="navBarIcon profileButton"
              size={40}
              onClick={() => ""}
            ></img>
            <div>
              <textarea
                placeholder="What's happening?"
                value={inputText}
                onChange={handleChange}
              ></textarea>
              <div className="post-card-footer">
                <div className="post-card-icons">
                  <BsFillEmojiSmileFill className="emojiButton" size={20} />
                  <BsFillImageFill className="uploadImgIcon" size={20} />
                </div>
                <button className="button" onClick={handleOnClick}>
                  Post
                </button>
                <p>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</p>
              </div>
              <h2> Feed</h2>
            </div>
          </div>
        </div>
        <div>extras</div>
      </div>
    </div>
  );
};

export default Home;
