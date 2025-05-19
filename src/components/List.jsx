// eslint-disable-next-line no-unused-vars
function List({ items = [], CardComponent }) {
  return (
    <div className="container-cards">
      {items.map((item, index) => (
        <CardComponent key={index} {...item} />
      ))}
    </div>
  );
}

export default List;
