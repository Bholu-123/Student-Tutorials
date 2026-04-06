import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../common/SectionWrapper';
import Breadcrumbs from '../common/Breadcrumbs';
import { GALLERY_CATEGORIES } from '../../constants/gallery';

const GalleryCard = ({ image, title, slug }) => (
  <div
    className="group relative isolate rounded-2xl overflow-hidden shadow-md hover:shadow-xl
               transition-all duration-300 aspect-[4/3]"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div
      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                 flex flex-col justify-end p-5"
    >
      <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
      <Link
        to={`/${slug}`}
        className="inline-flex w-max items-center justify-center rounded-lg border-2 border-white
                   bg-transparent px-4 py-1.5 text-sm font-semibold text-white
                   transition-colors duration-200 cursor-pointer
                   hover:bg-white hover:text-gray-900
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
                   focus-visible:ring-offset-black/50"
      >
        View All
      </Link>
    </div>
  </div>
);

const GallerySection = () => (
  <SectionWrapper id="gallery">
    <Breadcrumbs items={[{ label: 'Gallery' }]} />
    <h2 className="section-title">Gallery</h2>
    <div className="title-divider" />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {GALLERY_CATEGORIES.map((cat) => (
        <GalleryCard key={cat.slug} {...cat} />
      ))}
    </div>
  </SectionWrapper>
);

export default GallerySection;
