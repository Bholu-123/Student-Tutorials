import React from 'react';
import PhotoGrid from '../components/sections/PhotoGrid';
import { CELEBRATIONS_IMAGES } from '../constants/gallery';

const GalleryCelebrationsPage = () => (
  <PhotoGrid
    title="Celebrations"
    images={CELEBRATIONS_IMAGES}
    breadcrumbLeaf="Celebrations"
  />
);

export default GalleryCelebrationsPage;
