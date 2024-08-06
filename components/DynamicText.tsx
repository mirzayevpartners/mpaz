// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import sanitizeHtml from 'sanitize-html';
function DynamicText({ htmlString, className }: { htmlString: string, className?: string }) {
  const sanitizedHTML = sanitizeHtml(htmlString, {
    allowedTags: ['a', 'strong', 'i', 'em', 'br', 'h1', 'h2', 'h3', 'h4', 'u', 's', 'p', 'ul', 'ol', 'li'], // List of allowed tags
    allowedAttributes: { a: ['href'] }, // No additional attributes allowed
  });

  return (
    // <div>
    <div className={className} dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    // </div>
  );
}
export default DynamicText;
