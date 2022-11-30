import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AMLnZu9UlPHTbLrgfwt0ucUKik9Z8DfO6dVgVnfum2o9hA=s900-c-k-c0x00ffffff-no-rj"
        channel="Aman"
        verified
        subs="1M"
        noOfVideos="600"
        description="An enthusiast with an inquisitive mind, creative and flexible computer savvy. Having experience in different programming languages
looking forward to work in an environment that enhances overall learning."
      />
      <hr />
      <VideoRow
        views="1.1M"
        subs="1M"
        description="Awesome video alert!!"
        timestamp="55 secs ago"
        channel="Aman"
        title="First video"
        image="https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2019/09/YouTube-thumbnail-size-guide-best-practices-top-examples.png.webp"
      />

      <VideoRow
        views="61K"
        subs="12.6K"
        description="Hi people with the spirit of learning, pada kali ini kita akan belajar apa itu fiverr dan kenapa kita bisa menggunakan platform ..."
        timestamp="1 years ago"
        channel="Aman"
        title="Belajar Fiverr Langsung Dari Mentor Expert — Eps. 3"
        image="https://i.ytimg.com/vi/GmvdZ4lUHnY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBa6YYEVUIttQ0K1r85uUMRzumIxQ"
      />

      <VideoRow
        views="3.1M"
        subs="1.23M"
        description="Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. 🔥Get my Complete JavaScript Course with a..."
        timestamp="2 years ago"
        channel="Programming with Mosh"
        title="JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2020]"
        image="https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCE3fbsB0deZPlgm79U9HlO8DG-0A"
      />

      <VideoRow
        views="2.4M"
        subs="1.23M"
        description="React Tutorial - Learn to build fast web apps with React (React js) from scratch. 🔥Get the complete React course: ..."
        timestamp="2 years ago"
        channel="Programming with Mosh"
        title="React Tutorial for Beginners [React js]"
        image="https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBIQ5WzXVRH8bb9tiV5khu2jAe4HA"
      />

      <VideoRow
        views="2M"
        subs="2.37M"
        description="Learn the basics of HTML5 and web development in this awesome course for beginners. ⭐️ Contents ⭐️ ⌨️ (0:00:00) ..."
        timestamp="1 years ago"
        channel="freeCodeCamp.org"
        title="HTML Full Course - Build a Website Tutorial"
        image="https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDSHd4tgm81VMHWtFRnQJDAe-K3Bg"
      />
    </div>
  );
}

export default SearchPage;
