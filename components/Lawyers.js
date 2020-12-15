import "./Lawyers.scss";
export const Lawyers = () => {
  const LawyerTitle = () => {
    return (
      <div className="wrapWide">
        <div className="lawyerTitle">
          <h2>Onze Advocaten</h2>
        </div>
        <div className="lawyerSubTitle">
          <p>
            Onze Advocaten Ons team bestaat uit de advocaten Marcel van den
            Ende, Jack Leeman en Hein Kernkamp; in hun praktijkvoering worden
            zij ondersteund door officemanager Jacqueline Blok.
          </p>
        </div>
      </div>
    );
  };

  const LawyerBlocks = () => {
    return (
      <div className="advocaat">
        <div className="lawyerTransparent"></div>
        <div className="LawyerInfo">
          <h3>Advocaat</h3>
          <h2>Marcel van den Ende</h2>
        </div>
      </div>
    );
  };

  return (
    <div className="lawyers">
      <LawyerTitle />
      <LawyerBlocks />
    </div>
  );
};
