import React from "react";

import Image from "next/image";
const images = [
  {
    imgURL:
      "https://images.workpointtoday.com/workpointnews/2022/03/17225414/1647532451_92196_web22.jpg",
    imgAlt: "img-1",
  },
  {
    imgURL:
      "https://bltai.com/wp-content/uploads/2023/08/InShot_20230828_085145892.jpg",
    imgAlt: "img-2",
  },
  {
    imgURL: "https://s.isanook.com/jo/0/ud/492/2463049/nunew.jpg",
    imgAlt: "img-3",
  },
  {
    imgURL: "https://s.isanook.com/jo/0/ud/493/2466465/k.jpg",
    imgAlt: "img-4",
  },
];
function HomeStepFour() {
  return (
    <div>
      {/*    <CustomCarousel>
        {images.map((image, index) => {
          return <Image key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomCarousel> */}
    </div>
  );
}

export default HomeStepFour;
