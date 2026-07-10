import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalPage } from "@/content";

/** Vista compartida para páginas legales (términos, privacidad). */
export function LegalView({ page }: { page: LegalPage }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="mb-10">
            <h1 className="font-manrope font-extrabold text-4xl text-[#1F2937] mb-2">{page.title}</h1>
            <p className="text-gray-500 font-inter">{page.updated}</p>
          </div>
          <div className="bg-white border border-[#E6E9ED] rounded-2xl p-8 space-y-7">
            {page.sections.map(({ title, content }) => (
              <div key={title}>
                <h2 className="font-manrope font-bold text-lg text-[#1F2937] mb-2">{title}</h2>
                <p className="text-gray-500 font-inter text-sm leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LegalView;
