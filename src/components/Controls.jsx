import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElem = useRef();
  const isPrivacyOn = useSelector((store) => store.privacy);

  const handleIncrement = () => {
    if (!isPrivacyOn) {
      dispatch({ type: "INCREMENT" });
    }
  };

  const handleDecrement = () => {
    if (!isPrivacyOn) {
      dispatch({ type: "DECREMENT" });
    }
  };

  const handlePrivacyToggle = () => {
    dispatch({
      type: "TOGGLE_PRIVACY",
    });
  };

  const handleAdd = () => {
    if (!isPrivacyOn) {
      dispatch({
        type: "ADD",
        payload: {
          number: inputElem.current.value,
        },
      });
    }
    inputElem.current.value = "";
  };

  const handleSubtract = () => {
    if (!isPrivacyOn) {
      dispatch({
        type: "SUBTRACT",
        payload: {
          number: inputElem.current.value,
        },
      });
    }
    inputElem.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacyToggle}
        >
          {isPrivacyOn ? "Enable Counter" : "Disable Counter"}
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          ref={inputElem}
          type="text"
          placeholder="Enter a number"
          className="number-input"
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
