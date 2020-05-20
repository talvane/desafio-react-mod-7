import React from 'react';

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container"></div>
      </section>

      <Story />
    </>
  );
};

export default Stories;
