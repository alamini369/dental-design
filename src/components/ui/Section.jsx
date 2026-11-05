export default function Section({ as: Tag = "section", className = "", children, ...props }) {
  return (
    <Tag className={`section ${className}`} {...props}>
      {children}
    </Tag>
  );
}
