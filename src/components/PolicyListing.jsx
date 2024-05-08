const PolicyListing = ({ list }) => {
  return (
    <ul className="list-disc ml-6">
      {list.map((item, index) => (
        <li key={item+index} className="whitespace-pre-wrap">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default PolicyListing
