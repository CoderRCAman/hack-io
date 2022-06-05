import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function PostModal({ open, onClose }) {
  return (
    <div >
      <Modal open={open} onClose={onClose} center  classNames={{
          overlay: "customOverlayEnroll",
          modal: "customModalEnroll",
        }} >
        <h2 className="text-2xl font-semibold">Post</h2>
        <form className=" flex flex-col justify-center w-full">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            for="file_input"
          >
            Upload Image
          </label>
          <input
            className="block
                text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700 mb-2"
            id="file_input"
            type="file"
            
          />
          <div className="flex w-full h-[200px] flex justify-center mb-2">
            <img
              src="https://source.unsplash.com/MP0IUfwrn0A"
              className="  w-[200px] h-[200px] rounded-none lg:rounded-lg shadow-2xl block "
            />
          </div>
          <label
            className="hidden lg:block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            for="file_input"
          >
            Description
          </label>
          <textarea className="resize-none shadow appearance-none border border-stone-400 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

          <div className="flex items-center mb-4 mt-4">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Minor Injured
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Major Injured
            </label>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Post</button>
        </form>
      </Modal>
    </div>
  );
}
