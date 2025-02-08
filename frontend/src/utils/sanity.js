import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "71bx0qdh", // Sanity dashboard-аас авна
  dataset: "production", // Өөрийн ашиглаж буй dataset
  apiVersion: "2023-01-01", // API хувилбар (Сүүлийн хувилбар сонго)
  useCdn: false, // CDN-ийг унтраах, өгөгдөл шууд шинэчлэгдэнэ
});

export default client;
