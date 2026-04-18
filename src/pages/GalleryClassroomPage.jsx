import React from 'react';
import PhotoGrid from '../components/sections/PhotoGrid';
import { CLASSROOM_IMAGES } from '../constants/gallery';

const GalleryClassroomPage = () => (
  <PhotoGrid
    title="Our Campus"
    images={CLASSROOM_IMAGES}
    breadcrumbLeaf="Campus"
  />
);

export default GalleryClassroomPage;
