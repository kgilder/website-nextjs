/* eslint-disable react/no-danger */

import React from 'react';
import Head from 'next/head';
import MarkdownIt from 'markdown-it';
import Layout from '../components/Layout';
import Primary from '../components/Primary';
import Sidebar from '../components/Sidebar';
import BlockQuote from '../components/BlockQuote';
import BioBox from '../components/BioBox';
import Volunteers from '../components/Volunteers';
import DonorThumbnails from '../components/DonorThumbnails';
import Parser from '../components/Parser';
import VideoPlayer from '../components/VideoPlayer';
import content from '../content/about-us.md';

const {
  html,
  attributes: {
    title,
    mission,
    who: { title: whoTitle, people, governance, donors },
  },
} = content;

const md = new MarkdownIt();

const About = () => (
  <React.Fragment>
    <Head>
      <title>Texas Justice Initiative | {title}</title>
    </Head>
    <Layout>
      <Primary>
        <h1>{title}</h1>
        <BlockQuote>{mission}</BlockQuote>

        <VideoPlayer
          url="https://res.cloudinary.com/texas-justice-initiative/video/upload/v1586367151/tji-intro-video-long-updated_i6rybk.mp4"
          title="introVideo"
        />

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <h2 className="align--center spacing--large">{whoTitle}</h2>

        {people.map((person, key) => (
          <BioBox bio={person} key={key} />
        ))}

        <Volunteers />

        <h2 className="align--center spacing--large">{governance.title}</h2>
        <Parser>{md.render(governance.body)}</Parser>

        {governance.boardMembers.map((boardMember, key) => (
          <BioBox bio={boardMember} key={key} />
        ))}

        <h2 className="align--center spacing--large">{donors.title}</h2>
        <Parser>{md.render(donors.body)}</Parser>
        <DonorThumbnails />
      </Primary>
      <Sidebar />
    </Layout>
  </React.Fragment>
);
export default About;
