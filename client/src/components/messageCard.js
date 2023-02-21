import { useState } from "react";
import CustomizedMenus from "./customStyledMenu";

const MessageCard = (props) => {
  const friendsList = [
    {
      name: "Ryan ",
      image:
        "https://i.seadn.io/gae/J1rI6-wQDwOGkBZFH5bZEeK2wGDtDjEmr1F6ETqtqrVOSPaJcyWUholf7qfPnIt5iYRwzSPK3llAYb-qKevfs_RAxJlUlUy2v9AaHA?auto=format&w=512",
    },
    {
      name: "Ryan ",
      image:
        "https://i.seadn.io/gae/_EvnMVqD7jzTUD_tDxclJPVSrI700bIstQwH0TLIFXAcWOR8mW4NEqQAzoZmJXBtCH4HgBw_2gBj3E35gEQSP8jjgugvUtYlV1KnZJo?auto=format&w=1000",
    },
    {
      name: "Ryan ",
      image:
        "https://i.seadn.io/gae/3-YG2Riwq84u6M3C3vJDFEmsq86V-_jSgb8SotETq2V2RTIhKck8P7jsln1wqtLwSLvxDKvU945ALUBhPg5Oqkg619F5k7xu6osdUA?auto=format&w=512",
    },
    {
      name: "Ryan ",
      image:
        "https://i.seadn.io/gae/erhbSeEHyt0_SEbieIggdEEGZT-MtA4hM_RW84rJ4QsbX012eqk_xdbBQSARFyyG_axCYozv1HVXbMaSOVkBx0Cf7_UhUWa06eOgZeM?auto=format&w=1000",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
    {
      name: "Ryan ",
      image:
        "https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image",
    },
  ];

  const [recentChatBgColor, setRecentChatBgColor] = useState("");

  return (
    <>
      {friendsList.map((item, id) => {
        return (
          <>
            <div
              className="recentChat"
              style={{ backgroundColor: recentChatBgColor }}
            >
              <div>
                <img src={item.image}></img>
              </div>
              <div className="recentChatRHS">
                <div className="recentChatRhsTop">
                  <div>
                    <div>{item.name}</div>
                  </div>
                  <div className="chatTimeStamp" placeholder="10:00 pm">
                    10:00 pm
                  </div>
                </div>
                <div className="recentChatRhsBottom">
                  <div className="recentMessagePreview">Wassap man.</div>
                  <div>
                    <CustomizedMenus />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MessageCard;
