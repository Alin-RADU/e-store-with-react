import './ErrorComponent.scss';

const ErrorComponent = ({ hasError }) =>
  hasError && (
    <div className="errorImageOverlay ">
      <div
        className="errorImageContainer"
        style={{ backgroundImage: "url('https://i.imgur.com/yW2W9SC.png')" }}
      />
      <h2 className="errorImageText">Sorry, something went wrong !!!</h2>
    </div>
  );

export default ErrorComponent;
