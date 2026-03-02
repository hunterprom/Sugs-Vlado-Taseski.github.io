import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Ученици во електро лабораторија", label: "Практична настава" },
  { src: gallery2, alt: "Победа на натпревар", label: "Натпревари" },
  { src: gallery3, alt: "Компјутерска лабораторија", label: "ИТ настава" },
  { src: gallery4, alt: "Матурска прослава", label: "Матура" },
  { src: gallery5, alt: "Екскурзија во фабрика", label: "Екскурзии" },
  { src: gallery6, alt: "Научен саем", label: "Проекти" },
];

const HomeGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="section-padding bg-muted" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-heading font-semibold text-sm mb-4">
              📸 Галерија
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Погледни го <span className="text-gradient-primary">животот</span> во училиштето
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Нашите ученици учат, создаваат и се забавуваат секој ден.
            </p>
          </motion.div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  i === 0 || i === 3 ? "row-span-1 md:row-span-2 md:h-full" : ""
                }`}
                onClick={() => setSelectedImage(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    i === 0 || i === 3 ? "h-64 md:h-full" : "h-48 md:h-56"
                  }`}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-primary-foreground font-heading font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.label}
                  </span>
                </div>
                {/* Always-visible label on mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-3 md:hidden">
                  <span className="text-primary-foreground font-heading font-semibold text-sm">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="absolute bottom-8 text-center">
              <p className="text-primary-foreground font-heading font-bold text-xl">
                {images[selectedImage].label}
              </p>
              <p className="text-primary-foreground/60 text-sm mt-1">
                {images[selectedImage].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeGallery;
