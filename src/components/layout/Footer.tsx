import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Cookie } from "lucide-react";
import { useState } from "react";
import { personalData } from "@/data/config";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  const [cookiesLeft, setCookiesLeft] = useState(5);
  const [isEating, setIsEating] = useState(false);

  return (
    <footer className="border-t border-border bg-cream/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-display font-bold text-xl text-foreground">
              Shloka Kamdar
            </Link>
            <div className="mt-4 text-sm text-muted-foreground flex flex-col items-center md:items-start gap-2">
              <span>Built with love and cookies 🍪</span>

              {/* Cookie Plate */}
              <div className="flex items-center gap-1 h-8">
                {cookiesLeft > 0 ? (
                  Array.from({ length: cookiesLeft }).map((_, index) => (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => {
                              setCookiesLeft((prev) => prev - 1);
                              setIsEating(true);
                              setTimeout(() => setIsEating(false), 300);
                            }}
                            className="hover:scale-110 transition-transform active:scale-95"
                          >
                            <Cookie className="w-5 h-5 text-orange-500 drop-shadow-sm filter brightness-110" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Munch! 😋</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))
                ) : (
                  <button
                    onClick={() => setCookiesLeft(5)}
                    className="text-xs font-medium text-peach hover:text-orange-500 transition-colors flex items-center gap-1"
                  >
                    Refill Plate? 🔄
                  </button>
                )}
              </div>
              <p className="text-xs text-muted-foreground/50 h-4">
                {cookiesLeft === 0 ? "You ate them all!" : "Grab a cookie!"}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-lavender/50 hover:bg-lavender transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} className="text-foreground" />
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-baby-blue/50 hover:bg-baby-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-foreground" />
            </a>
            <a
              href={personalData.socials.email}
              className="p-2 rounded-full bg-peach/50 hover:bg-peach transition-colors"
              aria-label="Email"
            >
              <Mail size={18} className="text-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
