import React from 'react';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import '../../../styles/header.scss';

const LeftHeaderBar = () => {
  return (
    <div className="Header__Bar--left">
      <h1>icon</h1>
      <h1>VMO blockchain</h1>
    </div>
  );
};

const RightHeaderBar = () => {
  return (
    <div className="Header__Bar--right">
      <h2 className="Header__Bar--right--button">Connect wallet</h2>
      <MoreHorizIcon />
    </div>
  );
};

export const Header = () => {
  return (
    <div className="Header__Bar">
      <div className="Header__Bar--container">
        <LeftHeaderBar />
        <RightHeaderBar />
      </div>
    </div>
  );
};
