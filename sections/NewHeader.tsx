import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

type Type = "dark" | "light";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export const ColorType: Record<Type, string> = {
  "dark": "base-content",
  "light": "base-100",
};

export const StyleType: Record<"background" | "color", string> = {
  "background": "bg-",
  "color": "text-",
};

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-7 bg-black transition-all duration-200 ease-out 
`;

const lineStyles = [
  generateLineStyles("top-[-0.7rem]") +
  "peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg]",
  generateLineStyles("top-[-0.35rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") +
  "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]",
];

export default function Haader({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10645/e7e9dcac-87b1-4656-9e1a-1d1ec04c7d0d",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
}: Nav) {
  return (
    <header class="bg-[#101728]">
      <nav class="container mx-auto lg:px-0 px-4">
        <div class="flex gap-8 items-center justify-between py-4">
          <a href="/" class="flex w-52 h-auto">
            <Image src={logo.src || ""} alt={logo.alt} class="object-contain w-full h-auto" />
          </a>

          <label
            class="cursor-pointer lg:hidden pt-3 relative z-40"
            for="menu-mobile"
          >
            <input class="hidden peer bg-white" type="checkbox" id="menu-mobile" />
            {lineStyles.map((style, index) => (
              <div key={index} class={`relative ${style} bg-white peer-checked:bg-black`}></div>
            ))}
            <div class="backdrop-blur-sm bg-black/50 fixed h-full hidden inset-0 peer-checked:block w-full z-40">
              &nbsp;
            </div>
            <div class="duration-500 fixed h-full overflow-y-auto overscroll-y-none peer-checked:translate-x-0 right-0 top-0 transition translate-x-full w-full z-40">
              <div class="bg-base-100 flex flex-col float-right gap-8 min-h-full pt-12 px-6 shadow-2xl w-2/3">
                <ul class="flex flex-col gap-8">
                  {navigation?.links.map((link) => (
                    <li>
                      <a href={link.url} aria-label={link.label} class="text-base">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul class="flex items-center gap-3">
                  {navigation.buttons?.map((item) => (
                    <a
                      key={item?.id}
                      id={item?.id}
                      href={item?.href}
                      target={item?.href.includes("http") ? "_blank" : "_self"}
                      class={`bg-[#00e275] font-['Montserrat'] text-[#101728] py-2 px-4 rounded-[6px] border border-[#00e275] ease-in-out block text-sm tracking-wider transition`}
                    >
                      {item?.text}
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </label>

          <ul class="hidden items-center justify-between lg:flex w-full">
            <ul class="flex">
              {navigation.links.map((link) => (
                <li>
                  <a
                    href={link.url}
                    aria-label={link.label}
                    class="link no-underline p-4 font-['Montserrat'] text-white text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul class="flex gap-3">
              {navigation.buttons?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`bg-[#00e275] font-['Montserrat'] text-[#101728] py-2 px-4 rounded-[6px] border border-[#00e275] hover:bg-transparent hover:text-[#00e275] ease-in-out block hover:ease-in-out text-sm tracking-wider transition`}
                >
                  {item?.text}
                </a>
              ))}
            </ul>
          </ul>
        </div>
      </nav>
    </header>
  );
}
