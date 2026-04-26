import React, { useMemo, useState } from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import Breadcrumbs from '../components/common/Breadcrumbs';
import GalleryMasonry from '../components/gallery/GalleryMasonry';
import { EVENT_GALLERY_ALBUMS } from '../constants/galleryData';
import { PATHS } from '../routes/paths';

const GalleryEventsPage = () => {
  const [activeId, setActiveId] = useState(EVENT_GALLERY_ALBUMS[0]?.id ?? '');

  const activeAlbum = useMemo(
    () => EVENT_GALLERY_ALBUMS.find((a) => a.id === activeId) ?? EVENT_GALLERY_ALBUMS[0],
    [activeId],
  );

  const panelId = 'events-album-panel';

  return (
    <SectionWrapper>
      <Breadcrumbs
        items={[
          { to: PATHS.GALLERY, label: 'Gallery' },
          { label: 'Events' },
        ]}
      />
      <h1 className="section-title">Events</h1>
      <div className="title-divider" />

      <div className="mb-8">
        <p className="mb-3 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
          Choose a category
        </p>
        <div
          role="tablist"
          aria-label="Event photo categories"
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center"
        >
          {EVENT_GALLERY_ALBUMS.map((album) => {
            const selected = album.id === activeAlbum?.id;
            return (
              <button
                key={album.id}
                id={`tab-${album.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={0}
                onClick={() => setActiveId(album.id)}
                className={[
                  'shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950',
                  selected
                    ? 'bg-brand text-white shadow-sm dark:bg-brand dark:text-gray-900'
                    : 'border border-gray-200 bg-white text-gray-700 hover:border-brand/50 hover:bg-[#f7fae8] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800',
                ].join(' ')}
              >
                {album.title}
              </button>
            );
          })}
        </div>
      </div>

      {activeAlbum && (
        <section
          role="tabpanel"
          id={panelId}
          aria-labelledby={`tab-${activeAlbum.id}`}
          className="min-h-[40vh]"
        >
          <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{activeAlbum.title}</h2>
              <div className="mt-2 h-1 w-14 rounded-full bg-brand" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{activeAlbum.items.length} photos</p>
          </div>
          <GalleryMasonry key={activeAlbum.id} images={activeAlbum.items} />
        </section>
      )}
    </SectionWrapper>
  );
};

export default GalleryEventsPage;
