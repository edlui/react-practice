import React from 'react';
import PropTypes from 'prop-types';

import styles from './launch-item.module.scss';

/**
 * Launch Item renders all the details of a 
 * given launch
 */
const LaunchItem = ({ objs }) => {
  let missionStatus = objs.missionFailed.length;

  return(
    <article className={styles.launchItem}>
      <div className={styles.patchContainer}>
        <img
          className={styles.patch}
          alt="Mission patch"
          src= {objs.missionPatchLink}
        />
      </div>
      <div className={styles.detailsContainer}>
        <p className={styles.title}>
          { missionStatus > 0 ?
              (<> 
                {objs.rocketName} - {objs.payloadId} -{' '}
                <span className={styles.failed}>{objs.missionFailed}</span>
              </>)
          :
            (<>
              {objs.rocketName} - {objs.payloadId}
            </>)
          }
        </p>
        <p className={styles.subtitle}>
          Launched <strong>{objs.launchDate}</strong> at <strong>{objs.launchTime}</strong>{' '}
          from <strong>{objs.launchSiteName}</strong>
        </p>
        <div className={styles.links}>
          <a href={objs.redditCampaignLink} className={styles.link}>
            Reddit Campaign
          </a>
          <a href={objs.redditLaunchLink} className={styles.link}>
            Reddit Launch
          </a>
          <a href={objs.redditMediaLink} className={styles.link}>
            Reddit Media
          </a>
          <a href={objs.pressKitLink} className={styles.link}>
            Press Kit
          </a>
          <a href={objs.articleLink} className={styles.link}>
            Article
          </a>
          <a href={objs.videoLink} className={styles.link}>
            Watch Video
          </a>
        </div>
      </div>
      <dl className={styles.flightNumber}>
        <dt>Flight Number</dt>
        <dd>{objs.flightNumber}</dd>
      </dl>
    </article>
  );
}

LaunchItem.propTypes = {
  // name of the rocket used
  rocketName: PropTypes.string,

  // payload id of rocket
  payloadId: PropTypes.string,

  // the date of launch
  launchDate: PropTypes.string,

  // the launch pad the mission launched from
  launchSiteName: PropTypes.string,

  // flight number of the rocket
  flightNumber: PropTypes.string,

  // whether the mission failed or not defined,
  // as when the launch or landing was not successful
  missionFailed: PropTypes.string,

  // link to the mission patch image
  missionPatchLink: PropTypes.string,

  // link to the reddit campaign
  redditCampaignLink: PropTypes.string,

  // link to the reddit launch thread
  redditLaunchLink: PropTypes.string,

  // link to the reddit media thread
  redditMediaLink: PropTypes.string,

  // link to the press kit page
  pressKitLink: PropTypes.string,

  // link to the launch article page
  articleLink: PropTypes.string,

  // link to video of the mission
  videoLink: PropTypes.string,
}

export default LaunchItem;
