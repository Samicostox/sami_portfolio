import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */


const Experience = (): JSX.Element => {
  
  const experienceEntries = [
    {
      title: "Senior Interactive Designer",
      time_period: "2019 - Present",
      institution: "Google",
      description: "Led the design team in creating visually stunning and interactive web experiences. Implemented cutting-edge UI/UX designs, collaborated with developers to bring concepts to life, and ensured brand consistency across digital platforms."
    },
    {
      title: "Master of Science in Human-Computer Interaction",
      time_period: "2016 - 2018",
      institution: "SUNY",
      description: "Pursued a Master's degree in Human-Computer Interaction, specializing in designing user-friendly interfaces and conducting user research. Gained expertise in creating seamless digital experiences that prioritize user needs and preferences."
    },
    {
      title: "Bachelor of Science in Computer Science",
      time_period: "2012 - 2016",
      institution: "Penn",
      description: "Completed a Bachelor's degree in Computer Science with a focus on foundational programming concepts, algorithms, and web development. Developed a strong understanding of software development principles."
    },
  ];

  return (
    <Bounded>
      <Heading as="h2" size="lg">
        Experience
      </Heading>
      {experienceEntries.map((item, index) => (
        <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>{item.time_period}</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>{item.institution}</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default Experience;