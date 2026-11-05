export default function Card({ as: Tag = "div", className = "", hover = false, children, ...props }) {
  const hoverClasses = hover ? "card-hover hover:border-fog" : "";

  return (
    <Tag
      className={`rounded-card border border-mist bg-cloud p-6 md:p-10 ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
