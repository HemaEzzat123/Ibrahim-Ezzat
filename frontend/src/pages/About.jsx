import React from "react";
import ItemLayout from "./ItemLayout";

const About = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start gap-4"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="  text-lg">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Express.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
          <div className="flex gap-4 text-lg">
            I'm an experienced Full Stack Developer specializing in the MERN
            stack with 2+ years of hands-on development experience. Proven track
            record in building scalable web applications, teaching technical
            skills to 50+ students, and collaborating on innovative digital
            solutions. Proficient in modern development tools including Docker
            and Linux, with a passion for continuous learning and contributing
            to high-impact projects in collaborative, high-performing teams.
          </div>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=HemaEzzat123&theme=transparent&hide_border=true&title_color=000000&text_color=000000&icon_color=000000&text_bold=false`}
            alt="HemaEzzat123"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=HemaEzzat123&theme=transparent&hide_border=true&title_color=000000&text_color=000000&icon_color=000000&text_bold=false`}
            alt="HemaEzzat123"
            loading="lazy"
          />
        </ItemLayout>
        <p className=" font-bold text-2xl text-center">My Skills</p>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=babel,bootstrap,css,figma,firebase,git,github,html,js,jquery,mongodb,netlify,nodejs,npm,react,redux,tailwind,threejs,vercel,vite,vscode,java,discord,docker,linux,python,express,mysql,postgresql,typescript`}
            alt="HemaEzzat123"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=HemaEzzat123&theme=dark&hide_border=true&type=svg&background=F1DBF1&ring=000000&currStreakLabel=000000`}
            alt="HemaEzzat123"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <a
            href="https://github.com/HemaEzzat123/Social-Media"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=HemaEzzat123&repo=Social-Media&theme=transparent&hide_border=true&title_color=000000&text_color=000000&icon_color=000000&text_bold=false&description_lines_count=2`}
              alt="HemaEzzat123"
              loading="lazy"
            />
          </a>
        </ItemLayout>
      </div>
    </section>
  );
};

export default About;
