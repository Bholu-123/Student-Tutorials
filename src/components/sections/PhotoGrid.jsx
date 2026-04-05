import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Breadcrumbs from '../common/Breadcrumbs';
import { PATHS } from '../../routes/paths';

const PhotoGrid = ({ images, title, breadcrumbLeaf }) => (
  <SectionWrapper>
    <Breadcrumbs
      items={[
        { to: PATHS.GALLERY, label: 'Gallery' },
        { label: breadcrumbLeaf },
      ]}
    />
    <h1 className="section-title">{title}</h1>
    <div className="title-divider" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm
                     hover:shadow-md transition-all duration-300"
        >
          <img
            src={img.src}
            alt={img.caption}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-black/0 group-hover:bg-black/30
                       flex items-end transition-all duration-300"
          >
            <span
              className="text-white text-sm font-medium px-3 py-2
                         translate-y-full group-hover:translate-y-0
                         transition-transform duration-300"
            >
              {img.caption}
            </span>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default PhotoGrid;
