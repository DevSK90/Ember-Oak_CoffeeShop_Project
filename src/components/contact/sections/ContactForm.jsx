import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-10 px-20">
      <div className="flex justify-between items-center gap-10">
        <div className="flex-1 flex flex-col justify-between gap-3">
          <div className="bg-card-surface w-full">1</div>
          <div className="bg-card-surface w-full">1</div>
          <div className="bg-card-surface w-full">1</div>
          <div className="bg-card-surface w-full">1</div>
        </div>
        <div className="flex-1 bg-card-surface rounded-card p-10 w-full">
          <h1 className="font-heading text-3xl text-dark-chocolate">
            Send a message
          </h1>
          <form action="" className="mt-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-deep-chocolate">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border rounded-xl p-3 border-tan-surface"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-deep-chocolate">Email</span>
                <input
                  type="text"
                  placeholder="You@email.com"
                  className="border rounded-xl p-3 border-tan-surface"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <span className="font-bold text-deep-chocolate">Subject</span>
              <input
                type="text"
                placeholder="What's this about?"
                className="border rounded-xl p-3 border-tan-surface"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <span className="font-bold text-deep-chocolate">Message</span>
              <textarea
                type="text"
                placeholder="Tell us more..."
                className="border rounded-xl p-3 border-tan-surface"
              />
            </div>
            <button className="btn hover:btn mt-10"> Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
