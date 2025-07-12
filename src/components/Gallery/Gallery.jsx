import React, { useState } from "react";
import Modal from "react-modal";
import { Container, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";

// Sample gallery content
const galleryItems = [
{ type: "image", src: "/gallery1.jpg", title: "Beach Paradise", category: "destination" },
{ type: "image", src: "/gallery2.jpg", title: "Snowy Peaks", category: "destination" },
{ type: "video", src: "/video1.mp4", title: "Surfing", category: "activity" },
{ type: "image", src: "/gallery3.jpg", title: "Cultural Dance", category: "experience" },
{ type: "video", src: "/video2.mp4", title: "Scuba Diving", category: "activity" },
{ type: "image", src: "/gallery4.jpg", title: "Desert Safari", category: "destination" },
];

const categories = ["all", "photos", "videos", "destination"];

Modal.setAppElement("#root");

export default function Gallery() {
const [filter, setFilter] = useState("all");
const [modalContent, setModalContent] = useState(null);

const filteredItems = galleryItems.filter((item) => {
if (filter === "all") return true;
if (filter === "photos") return item.type === "image";
if (filter === "videos") return item.type === "video";
if (filter === "destination") return item.category === "destination";
return true;
});

const openModal = (item) => {
setModalContent(item);
};

const closeModal = () => {
setModalContent(null);
};

return (
<main className="min-h-screen bg-white text-gray-800 py-12 px-4 md:px-8 mt-12 sm:mt-20">

  <Typography variant="h4" align="center" className="text-yellow-500 font-bold mb-6">
    Explore Our Gallery
  </Typography>

  {/* Filter Buttons */}
  <div className="flex justify-center gap-4 mb-10 flex-wrap">
    {categories.map((cat) => (
    <Button key={cat} variant={filter===cat ? "contained" : "outlined" } className={`!rounded-full ${ filter===cat
      ? "!bg-yellow-500 text-white" : "!text-yellow-500 border-yellow-500" }`} onClick={()=> setFilter(cat)}
      >
      {cat.charAt(0).toUpperCase() + cat.slice(1)}
    </Button>
    ))}
  </div>

  {/* Gallery Grid */}
  <Container maxWidth="xl">
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {filteredItems.map((item, idx) => (
      <Card key={idx} onClick={()=> openModal(item)}
        className="rounded-lg shadow-md cursor-pointer"
        >
        {item.type === "image" ? (
        <CardMedia component="img" height="200" image={item.src} alt={item.title} className="object-cover" />
        ) : (
        <CardMedia component="video" height="200" src={item.src} className="object-cover" muted autoPlay loop />
        )}
        <CardContent>
          <Typography variant="subtitle1" className="text-gray-800 font-semibold">
            {item.title}
          </Typography>
        </CardContent>
      </Card>
      ))}
    </div>
  </Container>

  {/* Modal */}
  <Modal isOpen={!!modalContent} onRequestClose={closeModal} contentLabel="Media Preview"
    className="bg-white rounded-xl max-w-3xl mx-auto mt-20 p-4 outline-none"
    overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start z-50">
    {modalContent && (
    <>
      <Typography variant="h6" className="mb-2 text-center text-yellow-500">
        {modalContent.title}
      </Typography>
      {modalContent.type === "image" ? (
      <img src={modalContent.src} alt={modalContent.title} className="w-full max-h-[70vh] object-contain rounded" />
      ) : (
      <video controls src={modalContent.src} className="w-full max-h-[70vh] rounded" />
      )}
      <Button onClick={closeModal} className="mt-4 !bg-yellow-500 text-white hover:!bg-yellow-600">
        Close
      </Button>
    </>
    )}
  </Modal>
</main>
);
}