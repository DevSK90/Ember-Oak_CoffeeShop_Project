import React from "react";
import { Clock, Mail, MapPin, Phone, PhoneCall } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="mt-10 px-5 sm:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 lg:gap-10">
        <div className="flex-1 flex flex-col justify-between gap-3">
          <div className="bg-card-surface w-full p-5 sm:p-8 rounded-card flex items-start gap-5">
            <MapPin className="text-terracotta-accent bg-tan-surface rounded-full w-12 h-12 p-3.5 shrink-0" />
            <div className="">
              <h1 className="font-heading text-deep-chocolate text-xl">
                Address
              </h1>
              <p className="mt-2 text-textdark-03/90">
                Dambulla Road, Kurunegala
                <br />
                Sri Lanka, 97205
              </p>
            </div>
          </div>
          <div className="bg-card-surface w-full p-5 sm:p-8 rounded-card flex items-start gap-5">
            <Clock className="text-terracotta-accent bg-tan-surface rounded-full w-12 h-12 p-3.5 shrink-0" />
            <div className="">
              <h1 className="font-heading text-deep-chocolate text-xl">
                Hours
              </h1>
              <p className="mt-2 text-textdark-03/90">
                Mon-Fri: 7am - 6-pm
                <br />
                Sat-Sun: 8am - 5-pm
              </p>
            </div>
          </div>
          <div className="bg-card-surface w-full p-5 sm:p-8 rounded-card flex items-start gap-5">
            <PhoneCall className="text-terracotta-accent bg-tan-surface rounded-full w-12 h-12 p-3.5 shrink-0" />
            <div className="">
              <h1 className="font-heading text-deep-chocolate text-xl">
                Phone
              </h1>
              <p className="mt-2 text-textdark-03/90">077 555 0148</p>
            </div>
          </div>
          <div className="bg-card-surface w-full p-5 sm:p-8 rounded-card flex items-start gap-5">
            <Mail className="text-terracotta-accent bg-tan-surface rounded-full w-12 h-12 p-3.5 shrink-0" />
            <div className="">
              <h1 className="font-heading text-deep-chocolate text-xl">
                Email
              </h1>
              <p className="mt-2 text-textdark-03/90">hello@emberandoak.co</p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-card-surface rounded-card p-6 sm:p-10 w-full">
          <h1 className="font-heading text-2xl sm:text-3xl text-dark-chocolate">
            Send a message
          </h1>
          <form action="" className="mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-deep-chocolate">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border rounded-xl p-3 border-tan-surface w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-deep-chocolate">Email</span>
                <input
                  type="text"
                  placeholder="You@email.com"
                  className="border rounded-xl p-3 border-tan-surface w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <span className="font-bold text-deep-chocolate">Subject</span>
              <input
                type="text"
                placeholder="What's this about?"
                className="border rounded-xl p-3 border-tan-surface w-full"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <span className="font-bold text-deep-chocolate">Message</span>
              <textarea
                type="text"
                placeholder="Tell us more..."
                className="border rounded-xl p-3 border-tan-surface w-full"
              />
            </div>
            <button className="btn hover:btn mt-10"> Send Message</button>
          </form>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506058.38130984333!2d80.23925955!3d7.728011099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e0cc17e8b131%3A0x27f3fa2e25445f66!2sKurunegala!5e0!3m2!1sen!2slk!4v1785432310916!5m2!1sen!2slk"
          width="100%"
          height="340"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-card mt-12 sm:mt-16 lg:mt-20"
          title="Ember & Oak location"
        />
      </div>
    </div>
  );
};

export default ContactForm;
