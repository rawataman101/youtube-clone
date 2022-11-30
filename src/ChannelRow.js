import React from "react";
import "./ChannelRow.css";
import Avatar from "@mui/material/Avatar";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar
        className="channelRow__logo"
        alt={channel}
        src={image}
        sx={{ width: 120, height: 120 }}
      />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineRoundedIcon />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
