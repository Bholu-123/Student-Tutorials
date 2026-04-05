import React from 'react';
import PhotoGrid from '../components/sections/PhotoGrid';
import { CLASSROOM_IMAGES } from '../constants/gallery';

const GalleryClassroomPage = () => (
  <PhotoGrid
    title="Our Classrooms"
    images={CLASSROOM_IMAGES}
    breadcrumbLeaf="Classroom"
  />
);

export default GalleryClassroomPage;
