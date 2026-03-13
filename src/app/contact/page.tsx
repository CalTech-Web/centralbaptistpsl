import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export const metadata = {
  title: "Contact - Central Baptist Church",
  description:
    "Contact Central Baptist Church of Port St. Lucie - 202 SW Tulip Blvd, Port St. Lucie, FL 34953. Phone: (772) 237-4907.",
};

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We would love to hear from you" image="/images/hero-contact.jpg" />

      {/* Contact Info - GREEN */}
      <ScrollReveal>
      <section className="bg-green-section py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
              Reach Out
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-white/60 mx-auto mb-5" />
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We&apos;d love to connect with you. Reach us by phone, email, or stop by for a visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 max-w-4xl mx-auto">
            <a href="https://maps.google.com/?q=202+SW+Tulip+Blvd,+Port+St.+Lucie,+FL+34953" target="_blank" rel="noopener noreferrer" className="group bg-white/[0.08] backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/[0.16] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] mb-2">Address</h3>
              <p className="text-white/75 text-sm leading-relaxed">202 SW Tulip Blvd<br />Port St. Lucie, FL 34953</p>
            </a>

            <a href="tel:7722374907" className="group bg-white/[0.08] backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/[0.16] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] mb-2">Phone</h3>
              <p className="text-white/75 text-sm">(772) 237-4907</p>
            </a>

            <a href="mailto:centralbaptist2018@gmail.com" className="group bg-white/[0.08] backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/[0.16] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] mb-2">Email</h3>
              <p className="text-white/75 text-sm">centralbaptist2018@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Send Us a Message - WHITE */}
      <ScrollReveal>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Form */}
            <div>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Send a Message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
                We&apos;d Love to Hear From You
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <div className="bg-light rounded-2xl p-8">
                <ContactForm />
              </div>
            </div>

            {/* Map + Service Times */}
            <div>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Find Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
                Our Location
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <div className="rounded-2xl overflow-hidden shadow-md mb-8 border border-gray-100">
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

              {/* Service Times Mini */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/15">
                <div className="bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-white">Service Times</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-gray-warm">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="font-semibold text-dark">Sunday School</span>
                      <span className="text-primary font-bold bg-primary/[0.08] px-3 py-1 rounded-full text-sm">9:30 AM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="font-semibold text-dark">Morning Worship</span>
                      <span className="text-primary font-bold bg-primary/[0.08] px-3 py-1 rounded-full text-sm">11:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="font-semibold text-dark">Evening Worship</span>
                      <span className="text-primary font-bold bg-primary/[0.08] px-3 py-1 rounded-full text-sm">6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-dark">Wed. Prayer Meeting</span>
                      <span className="text-primary font-bold bg-primary/[0.08] px-3 py-1 rounded-full text-sm">6:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Pastoral Staff - CREAM */}
      <ScrollReveal>
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-dark mb-4">
              Pastoral Staff
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-warm text-lg max-w-2xl mx-auto">
              Our pastors and ministry leaders are here to serve you. Don&apos;t hesitate to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/15 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <Image src="/images/Pastor-Nick.jpg" alt="Pastor Nick Manzie" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold font-[family-name:var(--font-playfair)] text-dark text-lg">Pastor Nick Manzie</h3>
                  <p className="text-primary text-sm font-semibold mb-3">Senior Pastor</p>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-warm">
                      <a href="mailto:nickmanzie@centralbaptistpsl.com" className="hover:text-primary transition-colors">nickmanzie@centralbaptistpsl.com</a>
                    </p>
                    <p className="text-sm text-gray-warm">
                      <a href="tel:7722492463" className="hover:text-primary transition-colors">(772) 249-2463</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/15 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <Image src="/images/don-reid.jpg" alt="Pastor Don Reid" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold font-[family-name:var(--font-playfair)] text-dark text-lg">Pastor Don Reid</h3>
                  <p className="text-primary text-sm font-semibold mb-3">Emergency Contact</p>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-warm">
                      <a href="mailto:donreid@centralbaptistpsl.com" className="hover:text-primary transition-colors">donreid@centralbaptistpsl.com</a>
                    </p>
                    <p className="text-sm text-gray-warm">
                      <a href="tel:7728123947" className="hover:text-primary transition-colors">(772) 812-3947</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/15 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold font-[family-name:var(--font-playfair)] text-dark text-lg">Prayer Concerns</h3>
                  <p className="text-primary text-sm font-semibold mb-3">Irene Conley</p>
                  <p className="text-sm text-gray-warm">
                    <a href="tel:7728739446" className="hover:text-primary transition-colors">(772) 873-9446</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/15 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <Image src="/images/jessica-manzie.jpg" alt="Jessica Manzie" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold font-[family-name:var(--font-playfair)] text-dark text-lg">Children/Youth Ministries</h3>
                  <p className="text-primary text-sm font-semibold mb-3">Jessica Manzie</p>
                  <p className="text-sm text-gray-warm">
                    <a href="mailto:cbcpslstudentministry@gmail.com" className="hover:text-primary transition-colors">cbcpslstudentministry@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Online Giving - GREEN */}
      <ScrollReveal>
      <section className="bg-green-section py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
            Support Our Church
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6">
            Online Giving
          </h2>
          <div className="w-20 h-1 bg-white/60 mx-auto mb-6" />
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Support the ministries of Central Baptist Church through online giving. Your generosity makes a difference in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tithe.ly/give?c=1379702"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-light transition-all duration-200 btn-interact"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Give Online
            </a>
            <a
              href="https://forms.gle/QRk1FSUSFnjAVumv7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200 btn-interact"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Submit a Prayer Request
            </a>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </>
  );
}
