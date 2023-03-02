type props = {
  to: string;
  text: string;

  classname?: string;
};
const Link = ({ to, text, classname }: props) => {
  return (
    <a
      onClick={() => {
        // smooth scroll to the id of the element of to
        const element = document.getElementById(to);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
      class={classname}
    >
      {text}
    </a>
  );
};
export default Link;
