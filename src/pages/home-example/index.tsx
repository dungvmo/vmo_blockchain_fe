import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { NavLink } from 'react-router-dom';
import '../../styles/home.scss';

import { Button } from 'src/components';
import { useAppConfig } from 'src/contexts/app-provider-example';
import { useSetUser, useUser } from 'src/contexts/user-provider-example';
import { localStorageHelper } from 'src/helpers';

import { ButtonLanguageList } from './components/button-language-list';
import style from './home.module.scss';
import { useHandleLanguage } from './hooks/use-custom-translation';

export const Home = () => {
  const { t } = useHandleLanguage();
  const user = useUser();
  const setUser = useSetUser();
  const appConfig = useAppConfig();

  function logout() {
    localStorageHelper.removeItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!);
    setUser(null);
  }

  return (
    <div className="Container">
      <div className="Item__Detail">
        <div className="Item__Detail--top">
          <img src="top_image.png" alt="" className="Item__Detail--top--image" />
          <div className="Item__Detail--top--icon">
            <img className="small_image" src="image_icon.webp" alt="" />
            <img className="tick_icon" src="tick_icon.svg" alt="" />
          </div>
        </div>
        <div className="Item__Detail--title">
          <h2>Cometh Spaceships Polygon</h2>
          <div className="Item__Detail--address">
            <p className="Item__Detail--address--tag">@comethpolygon</p>
            <div className="Item__Detail--address--link">
              <img src="address_link.svg" alt="" />
              <p>0x85bc...d918</p>
            </div>
          </div>
          <div className="Item__Detail--stats">
            <div className="Item__Detail--stats--item">
              <p>Highest Sale</p>
              <h2>$12.7K</h2>
            </div>
            <div className="Item__Detail--stats--item">
              <p>Floor Price</p>
              <h2>$5.4K</h2>
            </div>
            <div className="Item__Detail--stats--item">
              <p>Market Cap</p>
              <h2>$53.9K</h2>
            </div>
            <div className="Item__Detail--stats--item">
              <p>Items</p>
              <h2>$10K</h2>
            </div>
            <div className="Item__Detail--stats--item">
              <p>Owners</p>
              <h2>$6.2K</h2>
            </div>
            <div className="Item__Detail--stats--item">
              <p>Total Volume</p>
              <h2>$8.8M</h2>
            </div>
          </div>
          <p>Spaceships NFT Collection from Cometh blockchain game studio.</p>
          <p>https://twitter.com/MUSTCometh </p>
          <div className="Item__Detail--placebid">
            <div className="Item__Detail--placebid--text">
              <p>Place a bid for any NFT from this collection</p>
              <button>Place a bid</button>
            </div>
            <div className="Item__Detail--placebid--icon">
              <div className="icon">
                <IosShareIcon />
              </div>
              <div className="icon">
                <MoreHorizIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
