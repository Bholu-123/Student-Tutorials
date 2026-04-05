import React from 'react';
import PhotoGrid from '../components/sections/PhotoGrid';
import { EVENTS_IMAGES } from '../constants/gallery';

const GalleryEventsPage = () => (
  <PhotoGrid
    title="Glimpse of Our Events"
    images={EVENTS_IMAGES}
    breadcrumbLeaf="Events"
  />
);

export default GalleryEventsPage;
