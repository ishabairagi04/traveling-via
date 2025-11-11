import { useState } from 'react';
import {
  Box,
  Modal,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MediaGallery({ mediaItems = [] }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [zoomedSlides, setZoomedSlides] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleZoomToggle = (index) => {
    setZoomedSlides((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setDragOffset((prev) => ({
      ...prev,
      [index]: { x: 0, y: 0 }
    }));
  };

  return (
    <>
      {/* Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(4, 1fr)' },
          gap: 2,
          mb: 4
        }}
      >
        <Box
          sx={{
            position: 'relative',
            gridColumn: { sm: 'span 2' },
            gridRow: { sm: 'span 2' },
            borderRadius: 2,
            overflow: 'hidden',
            minHeight: 300,
            bgcolor: '#ddd'
          }}
        >
          <img
            src={mediaItems[0].src}
            alt="main"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box
            onClick={handleOpen}
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              bgcolor: 'rgba(0,0,0,0.6)',
              color: '#fff',
              px: 2,
              py: 1,
              borderRadius: 1,
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 500
            }}
          >
            Show all images and videos
          </Box>
        </Box>

        {mediaItems.slice(1, 5).map((item, idx) => (
          <Box
            key={idx}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              height: 140,
              bgcolor: '#ccc'
            }}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`thumb-${idx}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <video
                src={item.src}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                muted
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1500,
            backgroundColor: 'transparent',
            flexDirection: 'column'
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white',
              zIndex: 1600
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Main Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.custom-swiper-next',
              prevEl: '.custom-swiper-prev'
            }}
            onSlideChange={({ activeIndex }) => {
              setActiveIndex(activeIndex);
              setIsDragging(false);
            }}
            spaceBetween={30}
            slidesPerView={1}
            style={{ width: '100%', height: '90%' }}
          >
            {mediaItems.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                  }}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={`media-${index}`}
                      onDoubleClick={() => handleZoomToggle(index)}
                      onMouseDown={(e) => {
                        if (!zoomedSlides[index]) return;
                        e.preventDefault();
                        setIsDragging(true);
                        setStartDrag({ x: e.clientX, y: e.clientY });
                      }}
                      onMouseMove={(e) => {
                        if (!zoomedSlides[index] || !isDragging) return;
                        const deltaX = e.clientX - startDrag.x;
                        const deltaY = e.clientY - startDrag.y;
                        setStartDrag({ x: e.clientX, y: e.clientY });
                        setDragOffset((prev) => ({
                          ...prev,
                          [index]: {
                            x: (prev[index]?.x || 0) + deltaX,
                            y: (prev[index]?.y || 0) + deltaY
                          }
                        }));
                      }}
                      onMouseUp={() => setIsDragging(false)}
                      onMouseLeave={() => setIsDragging(false)}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        cursor: zoomedSlides[index]
                          ? (isDragging ? 'grabbing' : 'grab')
                          : 'zoom-in',
                        transform: zoomedSlides[index]
                          ? `scale(1.5) translate(${dragOffset[index]?.x || 0}px, ${dragOffset[index]?.y || 0}px)`
                          : 'scale(1)',
                        transition: isDragging ? 'none' : 'transform 0.3s ease'
                      }}
                    />
                  ) : (
                    <video
                      src={item.src}
                      controls
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  )}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails */}
          <Box
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: 1,
              mt: 1,
              px: 2,
              pb: 2
            }}
          >
            {mediaItems.map((item, index) => (
              <Box
                key={`thumb-${index}`}
                onClick={() => setActiveIndex(index)}
                sx={{
                  width: 80,
                  height: 60,
                  border: index === activeIndex ? '2px solid #fff' : '2px solid transparent',
                  borderRadius: 1,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`thumb-${index}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          {/* Arrows */}
          <IconButton
            className="custom-swiper-prev"
            sx={{
              position: 'absolute',
              top: '50%',
              left: 16,
              transform: 'translateY(-50%)',
              color: 'white',
              zIndex: 1600,
              backgroundColor: 'rgba(0,0,0,0.4)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
              width: 24,
              height: 24,
              fontSize: 14
            }}
          >
            ‹
          </IconButton>
          <IconButton
            className="custom-swiper-next"
            sx={{
              position: 'absolute',
              top: '50%',
              right: 16,
              transform: 'translateY(-50%)',
              color: 'white',
              zIndex: 1600,
              backgroundColor: 'rgba(0,0,0,0.4)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
              width: 24,
              height: 24,
              fontSize: 14
            }}
          >
            ›
          </IconButton>
        </Box>
      </Modal>
    </>
  );
}
