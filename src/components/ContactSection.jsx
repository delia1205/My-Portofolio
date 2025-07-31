import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MailIcon,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a
          friendly chat about tech and development. Whether you have a project
          in mind, want to discuss ideas, or simply want to connect, feel free
          to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:deliaungureanu2001@yahoo.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    deliaungureanu2001@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+40730650471"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +40 730 650 471
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="https://www.google.com/maps/place/Iasi,+Romania/@47.1585,27.6014,12z/data=!3m1!4b1!4m6!3m5!1s0x40cbd2f8f8f8f8f8:0x40cbd2f8f8f8f8f8!8m2!3d47.1585!4d27.6014!16zL20vMDNnZ2Fj"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Iasi, Romania
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="http://www.linkedin.com/in/delia-ungureanu-38448b251"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.facebook.com/deliaungureanu2001/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://github.com/delia1205"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a href="mailto:delia2001elena@gmail.com">
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe..."
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden",
                    "focus:ring-2 focus:ring-primary"
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="you@example.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden",
                    "focus:ring-2 focus:ring-primary"
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Type your message..."
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden",
                    "focus:ring-2 focus:ring-primary resize-none"
                  )}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
