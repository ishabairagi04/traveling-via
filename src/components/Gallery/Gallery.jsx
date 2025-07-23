import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  Box,
  Chip,
  Container,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const allGalleryItems = Array.from({ length: 156 }, (_, index) => {
  const id = index + 1;
  return {
    id,
    type: "image",
    src: `/Gallery/ga (${id}).jpg`,
    category: getRandomCategory(), // Optional: Replace or keep static
  };
});

function getRandomCategory() {
  const categories = ["Adventure", "Nature", "Culture", "Wildlife"];
  return categories[Math.floor(Math.random() * categories.length)];
}



const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState([]);
  const [page, setPage] = useState(1);
  const [lightboxContent, setLightboxContent] = useState(null);
  const observer = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(allGalleryItems.map((item) => item.category))),
  ];

  // Filter by category and search
  const filteredItems = allGalleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.category
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic (infinite scroll)
  useEffect(() => {
    const newItems = filteredItems.slice(0, page * 6);
    setVisibleItems(newItems);
  }, [page, selectedCategory, searchTerm]);

  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleItems.length < filteredItems.length) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [visibleItems, filteredItems]
  );

  const handleOpenLightbox = (item) => {
    setLightboxContent(item);
  };

  const handleCloseLightbox = () => {
    setLightboxContent(null);
  };

  return (
    <>
      {/* ✅ Hero Section */}
      <section className="bg-gradient-to-br from-blue-300 to-indigo-600 text-white py-16 text-center mt-22">
        <Container maxWidth="md">
          <Typography variant="h3" className="font-bold mb-4">
            Explore Our Gallery
          </Typography>
          <Typography variant="subtitle1">
            Discover beautiful moments from our travel journeys.
          </Typography>
        </Container>
      </section>

      {/* ✅ Filter + Search */}
      <Container className="py-10">
        <Box className="flex flex-wrap gap-2 mb-6 justify-center">
          {categories.map((cat) => (
            <Chip key={cat} label={cat} color={selectedCategory === cat ? "primary" : "default"} onClick={() => {
              setSelectedCategory(cat);
              setPage(1);
            }}
            />
          ))}
        </Box>

        {/* <Box className="mb-8 max-w-md mx-auto">
          <TextField label="Search by category" variant="outlined" fullWidth value={searchTerm} onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          />
        </Box> */}

        {/* ✅ Gallery Grid */}
        <Grid container spacing={2}>
          {visibleItems.map((item, index) => {
            const isLast = index === visibleItems.length - 1;

            return (
              <Grid item xs={12} sm={6} md={4} key={item.id} ref={isLast ? lastElementRef : null} data-aos="fade-up">
                <div
                  className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  onClick={() => handleOpenLightbox(item)}
                >
                  {item.type === "image" ? (
                    <img src={item.src} alt={item.category} className="w-full h-64 object-cover" />
                  ) : (
                    <video src={item.src} className="w-full h-64 object-cover" muted autoPlay loop />
                  )}
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* ✅ Lightbox Modal */}
      <Dialog open={!!lightboxContent} onClose={handleCloseLightbox} maxWidth="md" fullWidth>
        <DialogContent className="bg-black p-0">
          {lightboxContent?.type === "video" ? (
            <video src={lightboxContent?.src} controls autoPlay className="w-full h-auto max-h-[80vh] mx-auto" />
          ) : lightboxContent?.type === "image" ? (
            <img src={lightboxContent?.src} alt="Preview" className="w-full h-auto max-h-[80vh] mx-auto" />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;