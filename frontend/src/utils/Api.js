import client from "./sanity";

export const getCategoriesWithSubcategoriesAndItems = async () => {
  const query = `*[_type == "category"] {
        _id,
        name,
        "subcategories": *[_type == "subcategory" && references(^._id)] {
            _id,
            name,
            description,
            "items": *[_type == "item" && references(^._id)] {
                _id,
                name,
                description,
                image,
                prices[]{
                    "size": coalesce(size, "L"),
                    price
                },
                quantity
            }
        }
    }`;
  const categories = await client.fetch(query);
  return categories;
};

export const getProducts = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return products;
};

export const getCategories = async () => {
  const query = `*[_type == "category"] {
        _id,
        name,
        image
    }`;
  const categories = await client.fetch(query);
  return categories;
};

export const getSubcategories = async (categoryId) => {
  const query = `*[_type == "subcategory" && references($categoryId)] {
        _id,
        name,
        description
    }`;
  const subcategories = await client.fetch(query, { categoryId });
  return subcategories;
};

export const getItems = async (subcategoryId) => {
  const query = `*[_type == "item" && subcategory._ref == $subcategoryId] {
        _id,
        name,
        description,
        image,
        prices[]{
            "size": coalesce(size, "L"),
            price
        },
        subcategory->{
            name
        }
    }`;
  const items = await client.fetch(query, { subcategoryId });
  return items;
};

// Fetch all items
export const getAllItems = async () => {
  const query = `*[_type == "item"] {
        _id,
        name,
        description,
        image,
        prices[]{
            "size": coalesce(size, "L"),
            price
        },
        subcategory->{
            name,
            category->{
                name
            }
        }
    }`;
  const items = await client.fetch(query);
  return items;
};

export const addItem = async (itemData) => {
  const mutation = [
    {
      create: {
        _type: "item",
        ...itemData, // itemData-д нэр, тайлбар, үнэ гэх мэт мэдээллийг дамжуулна
      },
    },
  ];

  const response = await client.mutate(mutation);
  return response;
};

export const deleteItem = async (itemId) => {
  const mutation = [
    {
      delete: {
        id: itemId,
      },
    },
  ];

  const response = await client.mutate(mutation);
  return response;
};

export const updateItem = async (itemId, updatedData) => {
  const mutation = [
    {
      patch: {
        id: itemId,
        set: updatedData, // Засах мэдээллийг энд дамжуулна
      },
    },
  ];

  const response = await client.mutate(mutation);
  return response;
};

export const updateOrderStatus = async (orderId, status) => {
  const mutation = [
    {
      patch: {
        id: orderId,
        set: { status }, // Төлөвийг шинэчлэх
      },
    },
  ];

  const response = await client.mutate(mutation);
  return response;
};

export const createOrder = async (orderData) => {
  const mutation = [
    {
      create: {
        _type: "order",
        ...orderData, // Захиалгын мэдээллийг энд дамжуулна
      },
    },
  ];

  const response = await client.mutate(mutation);
  return response;
};
