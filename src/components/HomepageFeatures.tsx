import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Plug and play user management',
    // image: `/img/undraw_docusaurus_mountain.svg`,
    description: (
      <>
        Install our API with full backend and frontend support in 5 minutes. Choose between our ready to use functionality or customise as you wish.
      </>
    ),
  },
  {
    title: 'Speed up your development',
    // image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        With Nblocks user management API you’ll get ready to use functionality with complete frontend and backend support. Choose between using it as is, tweaking it to your need or cherrypick from all included features.
      </>
    ),
  },
  {
    title: 'For developer by developers',
    // image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Be productive and get the best of two worlds! Use the installable plugins with plug and play views and best practices for your software stack.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {image && <img className={styles.featureSvg} alt={title} src={image} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
