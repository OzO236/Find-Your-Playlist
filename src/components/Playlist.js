import React from 'react';
import styles from '../styles/Playlist.module.css';
import lists from './Playlists.json';
import appleIcon from '../asset/applemusicIcon.png';
import melonIcon from '../asset/melonIcon.png';
import ytIcon from '../asset/ytmusicIcon.png';
import moreIcon from '../asset/moreIcon.png';
import homeIcon from '../asset/homeIcon.png';
import { useNavigate } from 'react-router-dom';


const Playlist = ({ resultData }) => {

  const navigate = useNavigate();

  console.log(resultData);

  const selectedPlaylistData = lists.find(data => data.id == resultData);

  if (!selectedPlaylistData) {
    return <div>No playlist found</div>;
  }
  console.log(selectedPlaylistData.id);
  console.log(selectedPlaylistData);
  console.log(selectedPlaylistData.titlepicture);

  const titlePicture = require(`../asset/${selectedPlaylistData.titlepicture}.png`);
  
  const shuffledPlaylist = selectedPlaylistData.playlist.sort(() => 0.5 - Math.random());
  const selectedSongs = shuffledPlaylist.slice(0, 6);
  console.log(selectedSongs);

  return (
    <div className={styles.container}>
      <div className={styles.objects}>

        <div className={styles.homeIcon} onClick={() => {navigate("/")}}>
          <img src={homeIcon} alt="no homeIcon" />
        </div>

        <div className={styles.mainposition}>
          <div className={styles.mainbox}>
            <div className={styles.titlepicture}>
              <img src={titlePicture} alt="no title img" />
            </div>
            <div className={styles.titletxt}>
              <p>{selectedPlaylistData.name}</p>
            </div>
          </div>
        </div>

        <div className={styles.shareposition}>
          <div className={styles.sharetxt}>
            <p>Go to Playlist</p>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <a href={selectedPlaylistData.appleshare}><img src={appleIcon} alt="no appleIcon" /></a>
            </div>
            <div className={styles.icon}>
              <a href={selectedPlaylistData.melonshare}><img src={melonIcon} alt="no melonIcon" /></a>
            </div>
            <div className={styles.icon}>
              <a href={selectedPlaylistData.ytshare}><img src={ytIcon} alt="no ytIcon" /></a>
            </div>
          </div>
        </div>

        <div className={styles.playlistposition}>
          <div className={styles.bigbox}>
            {selectedSongs.map(song => (
              <div className={styles.box} key={song.id}>
                <div className={styles.musicbox}>
                  <div className={styles.pic}>
                    <img src={song.albumimg} alt="no album img" />
                  </div>
                  <div className={styles.music}>
                    <div className={styles.title}><p>{song.title}</p></div>
                    <div className={styles.artist}><p>{song.artist}</p></div>
                  </div>
                </div>
                <div className={styles.moreIcon}>
                  <img src={moreIcon} alt="no moreIcon" />
                </div>
              </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Playlist