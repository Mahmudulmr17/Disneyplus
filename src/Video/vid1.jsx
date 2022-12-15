import React from "react";
import "./style.css";
import "./styles.css";

const Vid1 = () => {
  return (
    <div className="section">
      <h1 className="title_video">
        Disney's Raya and the Last Dragon | Official Trailer
      </h1>
      <div id="instructions">
        <video
          responsive="true"
          id="my_video_1"
          class="video-js vjs-default-skin"
          width="540px"
          height="267px"
          controls
          autoPlay="true"
          poster="http://video-js.zencoder.com/oceans-clip.jpg"
          data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'
        >
          <source
            src="https://res.cloudinary.com/drilwd3mg/video/upload/v1671122915/assets/%E0%A6%B6%E0%A7%81%E0%A6%A7%E0%A7%81%E0%A6%87_%E0%A6%AF%E0%A7%87_%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BE%E0%A6%B2%E0%A7%8D%E0%A6%9F_%E0%A6%AD%E0%A6%BE%E0%A6%B2%E0%A7%8B_%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87_%E0%A6%B9%E0%A6%AC%E0%A7%87_%E0%A6%A4%E0%A6%BE%E0%A6%87_%E0%A6%A8%E0%A7%9F_%E0%A6%8F%E0%A6%B0_%E0%A6%95%E0%A6%BF%E0%A6%9B%E0%A7%81_%E0%A6%97%E0%A7%81%E0%A6%A8%E0%A6%BE_%E0%A6%97%E0%A7%81%E0%A6%A8%E0%A6%93_%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A6%A4%E0%A7%87_%E0%A6%B9%E0%A6%AC%E0%A7%87_%E0%A6%A4%E0%A6%BE%E0%A6%87_%E0%A6%AC%E0%A6%B2%E0%A7%87_%E0%A6%8F%E0%A6%AE%E0%A6%A8_%E0%A6%86%E0%A6%B6%E0%A6%BE_%E0%A6%95%E0%A7%87%E0%A6%89_%E0%A6%95%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A7%87%E0%A6%A8_%E0%A6%A8%E0%A6%BE_Pray_for_ssc_batch_2K22__gggkbx.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Vid1;
