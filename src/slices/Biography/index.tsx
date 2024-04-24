import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { ImageField } from "@/types";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  const fullname = "Sami Ribardiere"
  const avatar: ImageField = {  // Change type declaration here to match expected type
    url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1713966136/Photo_individual_sami_3_iy71id.jpg",
    alt: "Sami Ribardiere",  // Provide an alternative text for the image
    dimensions: {
      width: 400,  // Example width
      height: 400  // Example height
    }
  };
  const cvurl = "https://res.cloudinary.com/dl2adjye7/image/upload/v1713278705/barclays_2_dv09jt.pdf"

  const cvLinkField = {
    url: cvurl,
    target: "_blank" // assuming you want the link to open in a new tab
  };


  const description = [
    {
      type: 'paragraph',
      text: "Hey, I’m Sami! I grew up in Paris and love all things creative. From the misty forests to the vibrant city streets, my surroundings have always fueled my passion for design and coding. As a self-taught developer, I found my calling in blending artistic flair with technical skill. My journey has led me to specialize in front-end development, where I craft interactive experiences that are not just functional, but also visually stunning. When I'm not coding, you'll find me experimenting with digital art or exploring the latest in web animation. Join me as I continue to push the boundaries of what's possible in the digital world!",
      spans: [], // This can include styling like bold, italics etc.
    }
  ];
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          {fullname}
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <PrismicRichText field={description} />
        </div>
        <Button
          linkField={cvLinkField}
          label={slice.primary.button_text}
        />

        <Avatar
          image={avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
