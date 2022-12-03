import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";

/// colors
const labelColors = ["indigo", "gray", "green", "blue", "red", "purple"];

function EventModal() {
  /// context
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);
  /// states
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelColors.find((lbl) => lbl === selectedEvent.label)
      : labelColors[0]
  );

  /// handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const calendarEvent = {
      title,
      description,
      day: daySelected.valueOf(),
      label: selectedLabel,
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  };

  const handleDelete = () => {
    dispatchCalEvent({ type: "delete", payload: selectedEvent });
    setShowEventModal(false);
  };

  return (
    <div className="h-screen fixed bg-gray-900/20 z-10 w-full top-0 left-0 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-2xl min-w-[300px] w-1/4 overflow-hidden"
      >
        <header className="flex items-center justify-between px-4 py-2 bg-gray-100">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <button onClick={() => handleDelete()}>
                <span className="material-icons-outlined text-gray-400 cursor-pointer">
                  delete
                </span>
              </button>
            )}

            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>

        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* /another row */}
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="title"
              placeholder="Add Description"
              value={description}
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelColors.map((cls, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(cls)}
                  className={`bg-${cls}-500  w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {cls === selectedLabel && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        <footer className="flex w-full p-3 border-t mt-5 justify-end">
          <button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded">
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;
