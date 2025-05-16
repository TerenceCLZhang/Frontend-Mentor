const FooterNavLinks = ({ page, sublinks }) => {
  return (
    <div className="text-center text-white">
      <h3 className="mb-7 font-semibold">
        <a href={page.href || "#"} className="hover:underline">
          {page.name}
        </a>
      </h3>
      <ul className="text-gray-300 flex flex-col gap-2">
        {sublinks.map((item, index) => (
          <li key={index}>
            <a href={item.href || "#"} className="hover:underline">
              {item.label || "Overview"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavLinks;
