import React from 'react';
import styles from '../styles/Playlist.module.css';
import pic from '../asset/벅참img.png';
import appleIcon from '../asset/applemusicIcon.png';
import melonIcon from '../asset/melonIcon.png';
import ytIcon from '../asset/ytmusicIcon.png';
import moreIcon from '../asset/moreIcon.png';
import getaguitar from '../asset/getaguitar.png';
import stealtheshoe from '../asset/stealtheshow.png';
import brokenmelodies from '../asset/brokenmelodies.png';
import antifreeze from '../asset/antifreeze.png';
import supershy from '../asset/supershy.png';
import firstsnow from '../asset/첫눈.png';

const songs = [
  {
    id: 1,
    title: 'Get a guitar',
    artist: 'RIIZE',
    albumimg: getaguitar
  },
  {
    id: 2,
    title: 'Steal The Show',
    artist: 'Lauv',
    albumimg: stealtheshoe
  },
  {
    id: 3,
    title: 'Broken Melodies',
    artist: 'NCT DREAM',
    albumimg: brokenmelodies
  },
  {
    id: 4,
    title: 'Antifreeze',
    artist: '검정치마',
    albumimg: antifreeze
  },
  {
    id: 5,
    title: 'Super Shy',
    artist: 'NewJeans',
    albumimg: supershy
  },
  {
    id: 6,
    title: '첫 눈',
    artist: 'EXO',
    albumimg: firstsnow
  }
]

const Playlist = () => {
  return (
    <div className={styles.container}>
      <div className={styles.objects}>

        <div className={styles.mainposition}>
          <div className={styles.mainbox}>
            <div className={styles.titlepicture}>
              <img src={pic} alt="no title img" />
            </div>
            <div className={styles.titletxt}>
              <p>눈물이 차올라서 고갤 들어🥹</p>
            </div>
          </div>
        </div>

        <div className={styles.shareposition}>
          <div className={styles.sharetxt}>
            <p>Go to Playlist</p>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <img src={appleIcon} alt="no appleIcon" />
            </div>
            <div className={styles.icon}>
              <img src={melonIcon} alt="no melonIcon" />
            </div>
            <div className={styles.icon}>
              <img src={ytIcon} alt="no ytIcon" />
            </div>
          </div>
        </div>

        <div className={styles.playlistposition}>
          <div className={styles.bigbox}>
            {songs.map(song => (
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