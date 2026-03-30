import { useState } from "react";

// ⚠️ IMPORTANT: Replace with DJ ZIKI's actual WhatsApp number (country code + number, no +, no spaces)
const WHATSAPP_NUMBER = "25494526856";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Club Night / Residency",
  "Music Festival",
  "Private Party",
  "Concert / Live Show",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: string;
  message: string;
}

const initialForm: FormData = {
  name: "", email: "", phone: "",
  eventType: "", eventDate: "", location: "",
  guestCount: "", message: "",
};

const BookingForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    if (field === "message") setCharCount(e.target.value.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.eventType || !form.eventDate || !form.location) return;

    const msg =
      `🎧 *New Booking Request for DJ ZIKI*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📧 *Email:* ${form.email}\n` +
      `📞 *Phone:* ${form.phone || "N/A"}\n` +
      `🎉 *Event Type:* ${form.eventType}\n` +
      `📅 *Event Date:* ${form.eventDate}\n` +
      `📍 *Location:* ${form.location}\n` +
      `👥 *Guest Count:* ${form.guestCount || "N/A"}\n` +
      `💬 *Message:* ${form.message || "N/A"}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white border border-black/[0.08] rounded-xl px-4 py-3.5 text-sm font-body text-gray-800 placeholder-gray-300 outline-none focus:border-ziki-gold/50 transition-all duration-300";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-ziki-gold to-ziki-purple mb-6">
          <i className="ri-whatsapp-line text-3xl text-white" />
        </div>
        <h3 className="font-heading font-900 text-2xl md:text-3xl text-white mb-3">
          WhatsApp Opened!
        </h3>
        <p className="font-body text-white/50 text-sm max-w-md leading-relaxed mb-8">
          Your booking details have been prepared. Complete the send in WhatsApp and DJ ZIKI will respond within 24 hours.
        </p>
      <button onClick={() => { setForm(initialForm); setSubmitted(false); setCharCount(0); }}
          className="whitespace-nowrap font-heading font-700 text-xs uppercase tracking-widest px-7 py-3 rounded-full border border-black/[0.1] text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-all cursor-pointer">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-heading font-700 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Full Name *</label>
          <input type="text" name="name" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className="block font-heading font-700 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Email *</label>
          <input type="email" name="email" required value={form.email} onChange={set("email")} placeholder="your@email.com" className={inputClass} />
        </div>
      </div>

      {/* Row 2: Phone + Event Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-heading font-700 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={set("phone")} placeholder="+27 000 000 0000" className={inputClass} />
        </div>
        <div>
          <label className="block font-heading font-700 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Event Type *</label>
          <select name="event_type" required value={form.eventType} onChange={set("eventType")} className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Select event type...</option>
            {eventTypes.map((t) => (
              <option key={t} value={t} className="bg-white">{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Date + Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-heading font-700 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Event Date *</label>
          <input type="date" name="event_date" required value={form.eventDate} onChange={set("eventDate")} className={inputClass} />
        </div>
        <div>
          <label className="block font-heading font-700 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Location *</label>
          <input type="text" name="location" required value={form.location} onChange={set("location")} placeholder="City, Country" className={inputClass} />
        </div>
      </div>

      {/* Guest count */}
      <div>
        <label className="block font-heading font-700 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Expected Guests</label>
        <input type="text" name="guest_count" value={form.guestCount} onChange={set("guestCount")} placeholder="e.g. 200-300 guests" className={inputClass} />
      </div>

      {/* Message */}
      <div>
        <label className="block font-heading font-700 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Additional Details</label>
        <textarea name="message" rows={4} maxLength={500} value={form.message} onChange={set("message")}
          placeholder="Tell us about your event — theme, vibe, special requests..." className={`${inputClass} resize-none`} />
        <p className={`text-right text-[10px] font-body mt-1 ${charCount >= 500 ? "text-ziki-gold" : "text-white/20"}`}>
          {charCount}/500
        </p>
      </div>

      {/* Submit */}
      <button type="submit"
        className="whitespace-nowrap w-full flex items-center justify-center gap-3 font-heading font-700 text-sm uppercase tracking-widest py-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] text-white hover:opacity-90 transition-opacity cursor-pointer">
        <i className="ri-whatsapp-line text-base" />
        Send Booking Request via WhatsApp
      </button>
      <p className="text-center font-body text-white/20 text-[10px]">
        Tapping &quot;Send&quot; will open WhatsApp with your details pre-filled · We respond within 24 hours
      </p>
    </form>
  );
};

export default BookingForm;
