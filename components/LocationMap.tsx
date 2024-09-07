export default function LocationMap() {
  return (
    <div className={'w-full'}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3039.4120384531943!2d49.83517507548094!3d40.377559658023216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIyJzM5LjIiTiA0OcKwNTAnMTUuOSJF!5e0!3m2!1sen!2sus!4v1725696332250!5m2!1sen!2sus"
        width="100%"
        height="410"
        // loading="lazy"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
