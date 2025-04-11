
import { PhoneIcon } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/message/your-number-here"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all z-50 flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
    >
      <PhoneIcon className="h-6 w-6" />
    </a>
  );
}
