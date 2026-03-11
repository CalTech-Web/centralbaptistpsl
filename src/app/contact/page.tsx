import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Central Baptist Church",
  description:
    "Contact Central Baptist Church of Port St. Lucie - 202 SW Tulip Blvd, Port St. Lucie, FL 34953. Phone: (772) 237-4907.",
};

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We would love to hear from you" />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Address</h3>
                    <p className="text-gray-warm">202 SW Tulip Blvd<br />Port St. Lucie, FL 34953</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Phone</h3>
                    <p className="text-gray-warm">
                      <a href="tel:7722374907" className="hover:text-primary transition-colors">(772) 237-4907</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Email</h3>
                    <p className="text-gray-warm">
                      <a href="mailto:centralbaptist2018@gmail.com" className="hover:text-primary transition-colors">centralbaptist2018@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Pastoral Staff */}
              <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-6">
                Pastoral Staff
              </h2>
              <div className="space-y-4">
                <div className="bg-light rounded-xl p-5">
                  <h3 className="font-bold text-dark">Pastor Nick Manzie</h3>
                  <p className="text-sm text-gray-warm mt-1">
                    <a href="mailto:nickmanzie@centralbaptistpsl.com" className="text-primary hover:text-primary transition-colors">nickmanzie@centralbaptistpsl.com</a>
                    {" "}&middot;{" "}
                    <a href="tel:7722492463" className="text-primary hover:text-primary transition-colors">(772) 249-2463</a>
                  </p>
                </div>
                <div className="bg-light rounded-xl p-5">
                  <h3 className="font-bold text-dark">
                    Pastor Don Reid <span className="text-sm font-normal text-gray-warm">(Emergency)</span>
                  </h3>
                  <p className="text-sm text-gray-warm mt-1">
                    <a href="mailto:donreid@centralbaptistpsl.com" className="text-primary hover:text-primary transition-colors">donreid@centralbaptistpsl.com</a>
                    {" "}&middot;{" "}
                    <a href="tel:7728123947" className="text-primary hover:text-primary transition-colors">(772) 812-3947</a>
                  </p>
                </div>
                <div className="bg-light rounded-xl p-5">
                  <h3 className="font-bold text-dark">Prayer Concerns</h3>
                  <p className="text-sm text-gray-warm mt-1">
                    Irene Conley: <a href="tel:7728739446" className="text-primary hover:text-primary transition-colors">(772) 873-9446</a>
                  </p>
                </div>
                <div className="bg-light rounded-xl p-5">
                  <h3 className="font-bold text-dark">Children/Youth Ministries</h3>
                  <p className="text-sm text-gray-warm mt-1">
                    <a href="mailto:cbcpslstudentministry@gmail.com" className="text-primary hover:text-primary transition-colors">cbcpslstudentministry@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form + Map + Service Times */}
            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-6">
                Send Us a Message
              </h2>
              <div className="bg-light rounded-xl p-8 mb-8">
                <ContactForm />
              </div>

              {/* Map */}
              <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-6">
                Find Us
              </h2>
              <div className="rounded-xl overflow-hidden shadow-md mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.8!2d-80.3585!3d27.2678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d93b6c4a3e7c5d%3A0x1234567890abcdef!2s202+SW+Tulip+Blvd%2C+Port+St.+Lucie%2C+FL+34953!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Central Baptist Church Location"
                />
              </div>

              {/* Online Giving */}
              <div className="bg-primary text-white rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] mb-3">
                  Online Giving
                </h3>
                <p className="text-white/75 text-sm mb-4">
                  Support the ministries of Central Baptist Church through online giving.
                </p>
                <a
                  href="https://tithe.ly/give?c=1379702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary px-8 py-3 rounded font-bold hover:bg-light transition-colors"
                >
                  Give Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
