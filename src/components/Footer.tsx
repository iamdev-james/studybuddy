import Link from "next/link";
import {
  ArrowRight,
  Facebook,
  Github,
  Send,
  Instagram,
  Figma,
  Youtube,
} from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

const Footer = () => {
  return (
    <div>
      {/* Footer section start */}
      <MaxWidthWrapper className="mx-auto mb-32 mt-12 sm:mt-32">
        <div className="flex justify-between items-center">
          <p className="font-bold">DOCMATE.</p>
          <div>
            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "",
              })}
              href="/dashboard"
              target="_blank"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex md:flex-row flex-col justify-between items-start">
          <div className="flex md:flex-row flex-col items-start md:space-x-24 space-y-8 md:space-y-0 text-sm">
            <div>
              <p className="font-bold mb-4 md:mb-7 text-lg">Product</p>
              <div className="flex flex-col items-start space-y-4">
                <Link href="/">Landing Page</Link>
                <Link href="/">Popup Builder</Link>
                <Link href="/">Web-design</Link>
                <Link href="/">Content</Link>
                <Link href="/">Integrations</Link>
              </div>
            </div>
            <div>
              <p className="font-bold mb-4 md:mb-7 text-lg">Use Cases</p>
              <div className="flex flex-col items-start space-y-4">
                <Link href="/">Web-designers</Link>
                <Link href="/">Marketers</Link>
                <Link href="/">Small Business</Link>
                <Link href="/">Website Builder</Link>
              </div>
            </div>
            <div>
              <p className="font-bold mb-4 md:mb-7 text-lg">Resources</p>
              <div className="flex flex-col items-start space-y-4">
                <Link href="/">Academy</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Themes</Link>
                <Link href="/">Hosting</Link>
                <Link href="/">Developers</Link>
                <Link href="/">Support</Link>
              </div>
            </div>
            <div>
              <p className="font-bold mb-4 md:mb-7 text-lg">Company</p>
              <div className="flex flex-col items-start space-y-4">
                <Link href="/">About Us</Link>
                <Link href="/">Careers</Link>
                <Link href="/">FAQs</Link>
                <Link href="/">Teams</Link>
                <Link href="/">Contact Us</Link>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold mt-6 md:mt-0 mb-4 md:mb-7">Follow us</p>
            <div className="flex space-x-4">
              <Facebook />
              <Youtube />
              <Github />
              <Send />
              <Instagram />
              <Figma />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-between items-center mt-12 md:mt-20">
          <p className="text-xs md:text-sm mt-8 md:mt-0">
            &#169;2024 All Rights Reserved
          </p>
          <div className="flex space-x-2 md:space-x-6 text-xs md:text-sm">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
            <Link href="/">Sales and Refunds</Link>
            <Link href="/">Legal</Link>
            <Link href="/">Site Map</Link>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* Footer section end */}
    </div>
  );
};

export default Footer;
