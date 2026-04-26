import React from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import Breadcrumbs from '../components/common/Breadcrumbs';
import GalleryMasonry from '../components/gallery/GalleryMasonry';
import { CLASSROOM_IMAGES } from '../constants/gallery';
import { PATHS } from '../routes/paths';

const GalleryClassroomPage = () => (
  <SectionWrapper>
    <Breadcrumbs
      items={[
        { to: PATHS.GALLERY, label: 'Gallery' },
        { label: 'Campus' },
      ]}
    />
    <h1 className="section-title">Campus</h1>
    <div className="title-divider" />
    <GalleryMasonry images={CLASSROOM_IMAGES} />
  </SectionWrapper>
);

export default GalleryClassroomPage;
