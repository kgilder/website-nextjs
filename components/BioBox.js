import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloudinaryImage from './CloudinaryImage';
import Parser from './Parser';
import theme from '../theme';

const md = require('markdown-it')({
  html: true,
});

const BioBox = ({ bio }) => (
  <Bio>
    <div id="image">
      <CloudinaryImage url={bio.headshot} alt={bio.name} maxWidth={theme.fullMediumWidthPixels} />
    </div>
    <div id="text">
      <h3>{bio.name}</h3>
      <Parser>{md.render(bio.biography)}</Parser>
    </div>
  </Bio>
);

export default BioBox;

BioBox.propTypes = {
  bio: PropTypes.object.isRequired,
};

const Bio = styled.div`
  padding-top: 2rem;

  @media (min-width: ${props => props.theme.medium}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  div#image {
    flex: 1;
    min-width: 20%;
    img {
      width: 100%;

      @media (min-width: ${props => props.theme.medium}) {
        float: left;
      }
    }
  }

  div#text {
    @media (min-width: ${props => props.theme.medium}) {
      flex: 3;
      padding-left: 2rem;
    }
  }
`;
