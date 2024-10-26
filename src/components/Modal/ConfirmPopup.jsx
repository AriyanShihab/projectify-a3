import React from "react";

export default function ConfirmationPopup({ onPermission, onDecline }) {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-950/20 bg-opacity-50 backdrop-blur-sm absolute top-0 left-0 z-20">
      <div className="p-4 min-w-[300px] max-w-[400px] min-h[300px] rounded-lg bg-slate-900 border border-opacity-60 border-rose-400 relative">
        <h1 className="text-red-400 text-2xl my-3">Are You Sure?</h1>
        <p>
          This will delete the entry from the list and this action can't be
          undone latter~!
        </p>
        <div className="flex mt-5 gap-2">
          <button onClick={onPermission}
          className="bg-red-300 text-slate-800 px-4 py-3 rounded font-semibold">
            Yes I'm aware of It
          </button>

          <button onClick={onDecline}
           className="bg-green-500 text-slate-800 px-4 py-3 rounded font-semibold">
            No, PLease Stop It{" "}
          </button>
        </div>
        <span onClick={onDecline} className="text-rose-400  absolute top-2 right-3  text-xl cursor-pointer">
          X
        </span>
      </div>
    </div>
  );
};
