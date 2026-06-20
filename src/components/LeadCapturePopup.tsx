import { useEffect, useState, FormEvent } from "react";
import { X } from "lucide-react";
import cknLogo from "@/assets/ckn-logo.png";

const ACADEMY_URL = "https://academy.cloudkitchennetwork.com/";

export function LeadCapturePopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", city: "", mobile: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const close = () => setOpen(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.city.trim()) errs.city = "City is required";
    if (!/^\d{7,15}$/.test(form.mobile.trim())) errs.mobile = "Enter a valid mobile number";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // Integration hook: connect a secure backend (edge function, CRM, webhook)
    // here before collecting PII. Intentionally NOT persisting to localStorage
    // to avoid storing personal data in plaintext browser storage.
    close();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      style={{
        background: "rgba(8, 6, 20, 0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 animate-scale-in"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.95), rgba(245,243,255,0.92))",
          border: "1px solid rgba(123,97,255,0.25)",
          boxShadow:
            "0 30px 80px -20px rgba(60, 30, 140, 0.45), 0 0 0 1px rgba(255,255,255,0.6) inset",
        }}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-gray-600 transition hover:bg-black/10 hover:text-gray-900"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center">
          <img
            src={cknLogo}
            alt="Cloud Kitchen Network logo"
            width={64}
            height={64}
            className="mx-auto mb-3 h-16 w-16 rounded-2xl bg-white object-contain p-1.5 shadow-lg"
          />
          <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight text-gray-900">
            Welcome to Cloud Kitchen Network
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access exclusive food business training, strategies, and growth resources.
          </p>
        </div>

        <a
          href={ACADEMY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #7B61FF, #4B2EBA)",
            boxShadow:
              "0 10px 30px -10px rgba(123, 97, 255, 0.6), 0 0 0 1px rgba(255,255,255,0.15) inset",
          }}
        >
          Already a Member? Join Now →
        </a>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
            New Here? Register Below
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
          </div>
          <div>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={(e) =>
                setForm({ ...form, mobile: e.target.value.replace(/[^\d]/g, "") })
              }
              className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>}
          </div>

          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Register & Continue
          </button>
        </form>

        <button
          onClick={close}
          className="mt-4 w-full text-center text-xs font-medium text-gray-500 underline-offset-4 hover:text-gray-900 hover:underline"
        >
          Skip & Continue
        </button>
      </div>
    </div>
  );
}
