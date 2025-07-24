"use client";
export default function CVPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          Özgeçmişim (CV)
        </h1>

        <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-xl border border-gray-700">
          <iframe
            src="/Hakan-Bulduk.pdf"
            width="100%"
            height="100%"
            className="w-full h-full"
          >
            Bu tarayıcı PDF görüntülemeyi desteklemiyor.{" "}
            <a href="/Hakan-Bulduk.pdf" className="underline text-blue-400">
              PDF’yi indir
            </a>
          </iframe>
        </div>
      </div>
    </main>
  );
}
