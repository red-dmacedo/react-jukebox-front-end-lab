import './Footer.sass';

const Footer = (props) => {
  if (!props.attributions) {
    return (
      <p className="footer">No attributions</p>
    );
  };

  return (
    <div className="footer">
      <div className="attributions">
        <ul>
          {props.attributions.map((el, idx) => (
            <li key={idx}>
              {el.text} <a href={el.link} target="_blank">{el.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;