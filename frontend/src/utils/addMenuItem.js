import client from "./sanity";

const addMenuItem = async (item) => {
  try {
    const result = await client.create({
      _type: "menuItem" && subcategory._ref == $subcategoryId,
      name: item.name,
      description: item.description,
      image: item.image,
      prices: item.prices,
    });
    console.log("Амжилттай нэмэгдлээ:", result);
    return result;
  } catch (error) {
    console.error("Өгөгдөл нэмэхэд алдаа гарлаа:", error);
  }
};
