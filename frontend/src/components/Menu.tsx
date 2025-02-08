import React from "react";

interface MenuProps {
  url: string;
}

const Menu: React.FC<MenuProps> = ({ url }) => {
  // URL эсвэл замыг ашиглан менюг харуулах логик
  return (
    <div>
      <h1>Кафе Меню</h1>
      <iframe src={url} width="100%" height="600px" title="Cafe Menu"></iframe>
    </div>
  );
};

export default Menu;
