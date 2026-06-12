import type { RefObject } from "react";

interface HeaderProps {
    refs: {
        aboutSectionRef: RefObject<HTMLElement | null>;
        projectSectionRef: RefObject<HTMLElement | null>;
        technologiesSectionRef: RefObject<HTMLElement | null>;
        contactSectionRef: RefObject<HTMLElement | null>;
    };
}

export const Header = ({
    refs: { aboutSectionRef, projectSectionRef, technologiesSectionRef, contactSectionRef },
}: HeaderProps) => {
    return (
        <header className="py-1 fixed top-4 z-50 mt-2 self-center w-[60vw] flex justify-center rounded-2xl bg-white/10 backdrop-blur-xs border border-white/30 shadow-xl transition-all duration-300 hover:bg-white/35 hover:shadow-2xl">
            <nav className="flex gap-8 text-3xl justify-center text-white">
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        aboutSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    href="/#about"
                >
                    About
                </a>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        projectSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    href="/#projects"
                >
                    Projects
                </a>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        technologiesSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    href="/#technologies"
                >
                    Technologies
                </a>
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        contactSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    href="/#contact"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};
