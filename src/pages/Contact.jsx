import { useState } from "react";
import { ArrowRight, ChevronDown, Mail, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I check product availability?",
    answer:
      "Send us the product name, reference, screenshot, or desired size. Our team can help you check the available options.",
  },
  {
    question: "Can you help with sizing?",
    answer:
      "Yes. Share the product you are interested in along with your usual size, and we can help you choose the appropriate size.",
  },
  {
    question: "Can I request a specific product?",
    answer:
      "Yes. If you are looking for a particular model, colourway, size, or product that is not currently listed, contact us with the details.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can contact MUTE 8 through WhatsApp or submit the enquiry form below. We will guide you through the ordering process.",
  },
  {
    question: "Do you offer shipping?",
    answer:
      "Shipping details depend on the product and destination. Contact us with your location and product details for more information.",
  },
];

function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* Top Strip */}
      <div className="border-b border-black/10 bg-[#f1f0ec] px-6 py-3 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-black" />

            <span className="text-[10px] uppercase tracking-[0.18em] text-black/60">
              Contact / Direct Access
            </span>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-black/40 sm:block">
            MUTE 8
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              MUTE 8 / CONCIERGE
            </p>

            <h1 className="mt-5 font-editorial text-5xl leading-none tracking-tight md:text-7xl">
              Contact
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
              Questions, sourcing requests, sizing assistance or something
              specific in mind? Speak directly with MUTE 8.
            </p>
          </div>

          <div className="border-l border-black/10 pl-5">
            <p className="text-xs uppercase tracking-[0.15em] text-black/40">
              Direct Access
            </p>

            <p className="mt-2 text-sm">Available for enquiries</p>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="px-6 pb-8 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2">
          {/* WhatsApp */}
          <div className="bg-white p-8 md:p-10">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-black/40">
                Channel / 01
              </span>

              <MessageCircle size={20} strokeWidth={1.5} />
            </div>

            <h2 className="mt-10 text-2xl font-medium uppercase tracking-tight md:text-3xl">
              WhatsApp
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
              For product enquiries, sizing questions, sourcing requests and
              order assistance, contact us directly on WhatsApp.
            </p>

            <div className="mt-8 border border-black/10 bg-[#f8f7f4] p-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-black/40">
                Direct Contact
              </p>

              <p className="mt-2 text-lg font-medium">
                WhatsApp Concierge
              </p>
            </div>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#171717] px-6 py-4 text-xs uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-80"
            >
              Message on WhatsApp
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Email */}
          <div className="bg-[#eeece7] p-8 md:p-10">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-black/40">
                Channel / 02
              </span>

              <Mail size={20} strokeWidth={1.5} />
            </div>

            <h2 className="mt-10 text-2xl font-medium uppercase tracking-tight md:text-3xl">
              Email
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
              For detailed enquiries, product references, collaborations or
              other questions, you can reach us by email.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex flex-col justify-between gap-2 bg-white p-5 sm:flex-row sm:items-center">
                <span className="text-[10px] uppercase tracking-[0.18em] text-black/40">
                  Email
                </span>

                <a
                  href="mailto:hello@mute8.com"
                  className="text-sm font-medium hover:opacity-60"
                >
                  hello@mute8.com
                </a>
              </div>

              <div className="flex flex-col justify-between gap-2 bg-white p-5 sm:flex-row sm:items-center">
                <span className="text-[10px] uppercase tracking-[0.18em] text-black/40">
                  Response
                </span>

                <span className="text-sm">
                  We will get back to you soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Enquiry
            </p>

            <h2 className="mt-4 font-editorial text-4xl uppercase md:text-5xl">
              Send an Enquiry
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/55">
              Tell us what you are looking for and our team will get back to
              you with the relevant details.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-[10px] uppercase tracking-[0.18em]"
                >
                  Full Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="text-[10px] uppercase tracking-[0.18em]"
                >
                  Email / WhatsApp *
                </label>

                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  placeholder="Your email or number"
                  className="mt-2 w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="product"
                  className="text-[10px] uppercase tracking-[0.18em]"
                >
                  Product / Reference
                </label>

                <input
                  id="product"
                  name="product"
                  type="text"
                  placeholder="Product name or reference"
                  className="mt-2 w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="size"
                  className="text-[10px] uppercase tracking-[0.18em]"
                >
                  Size
                </label>

                <input
                  id="size"
                  name="size"
                  type="text"
                  placeholder="Your preferred size"
                  className="mt-2 w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-[10px] uppercase tracking-[0.18em]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what you are looking for..."
                className="mt-2 w-full resize-none border-b border-black/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[#171717] px-8 py-4 text-xs uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-80"
            >
              Submit Enquiry
              <ArrowRight size={15} />
            </button>

            {submitted && (
              <div className="border border-black/10 bg-[#eeece7] p-4">
                <p className="text-sm">
                  Thank you. Your enquiry has been received.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#eeece7] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            Frequently Asked
          </p>

          <h2 className="mt-4 font-editorial text-4xl uppercase md:text-5xl">
            Need Help?
          </h2>

          <p className="mt-5 text-sm leading-7 text-black/55">
            Find answers to some common questions about MUTE 8.
          </p>

          <div className="mt-10 space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 p-5 text-left md:p-6"
                  >
                    <span className="text-sm font-medium uppercase tracking-tight md:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 md:px-6">
                      <p className="max-w-3xl text-sm leading-7 text-black/55">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#171717] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            MUTE 8 / CONCIERGE
          </p>

          <h2 className="mt-5 font-editorial text-4xl uppercase leading-tight md:text-6xl">
            Let's find the right piece.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">
            Send us a product name, screenshot or reference and we will help
            you with availability, sizing and ordering.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white px-7 py-4 text-xs uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-80"
            >
              <MessageCircle size={16} />
              WhatsApp Enquiry
            </a>

            <a
              href="mailto:hello@mute8.com"
              className="inline-flex items-center gap-3 border-b border-white/30 px-2 py-4 text-xs uppercase tracking-[0.15em] text-white transition-colors hover:border-white"
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

