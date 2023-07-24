import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-black flex justify-center items-center p-4 text-rose-50"
    >
      <form
        method="POST"
        action="https://getform.io/f/b51c785c-6532-4a60-bac3-1f891ede4c00"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-rose-600">
            Contact
          </p>
          <p className="py-4">
            Submit the form below or send me an email -{" "}
            <span className="font-bold text-red-200">
              elcid.delapaz@gmail.com
            </span>
          </p>
        </div>
        <input
          className="bg-rose-50 p-2 text-black rounded-full placeholder-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-rose-50 text-black rounded-full placeholder-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-rose-50 p-2 text-black rounded-3xl resize-none placeholder-black"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-rose-600 hover:border-rose-600 px-4 py-2 my-8 mx-auto flex items-center rounded-md">
          Send
        </button>
      </form>
    </div>
  );
}
