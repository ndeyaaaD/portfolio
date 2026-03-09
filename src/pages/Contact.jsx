
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 pt-28 pb-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Me{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Contacter</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12">Une question ou un projet ? Écrivez-moi !</p>

        {sent ? (
          <div className="bg-green-500/20 border border-green-500/40 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">Message envoyé !</h2>
            <p className="text-gray-400">Je vous répondrai très bientôt.</p>
            <button onClick={() => setSent(false)} className="mt-6 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all">
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-8">
            <div className="flex flex-col gap-5">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Nom</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-all" />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-all" />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Votre message..." rows={5}
                  className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-all resize-none" />
              </div>
              <button onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl text-white font-bold hover:opacity-90 transition-all">
                Envoyer le message →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
