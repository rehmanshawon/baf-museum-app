import { Carousel } from "react-carousel-minimal";

function BangabandhuGallery() {
  const data = [
    {
      image:
        "https://bdun.org/wp-content/uploads/2020/03/Bangabandhu-9_A-meeting-of-Legends-Bangabandhu-and-Yugoslavia%E2%80%99s-Marshal-Joseph-Broz.jpg",

      caption: "Bangabandhu and Yogoslavia's Marshal Joseph Broz",
    },
    {
      image:
        "https://bdun.org/wp-content/uploads/2019/08/Bangabandhu-2_Bangabandhu-meets-UN-Secretary-General-Kurt-Waldheim.jpg",
      caption: "Bangabandhu meets UN Secretary General Kurt Waldeim",
    },
    {
      image:
        "https://bdun.org/wp-content/uploads/2019/08/Bangabandhu-4_Bangabandhu-at-Buckingham-palace-with-Queen-Elizabeth-II-and-Prince-Philip.jpg",
      caption: "Bangabandhu with Queen Elizabeth II",
    },
    {
      image:
        "https://bdun.org/wp-content/uploads/2019/08/Bangabandhu-6_Bangabandhu-speaks-at-Kremlin.jpg",
      caption: "Bangabandhu speaks at Kremlin",
    },
    {
      image:
        "https://bdun.org/wp-content/uploads/2019/08/Bangabandhu-7_Indira-Gandhi-the-Hon%E2%80%99ble-PM-of-India-leaves-Bangladesh-after-her-visit.jpg",
      caption: "Bangabandhu with Indira Gandhi",
    },
    {
      image:
        "https://bdun.org/wp-content/uploads/2019/08/Bangabandhu-8.1_Malaysian-King-Abdul-Halim-and-Bangabandhu.jpg",
      caption: "Malaysian King Abdul Halim and Bangabandhu",
    },
    {
      image:
        "https://bdun.org/wp-content/uploads/2019/08/Bangabandhu-10_Bangabandhu-delivering-welcome-address-during-Chinese-Premier-Chou-En-%E2%80%93-Lai%E2%80%99s-Visit-to-Dhaka.jpg",
      caption: "Bangabandhu and Chinese President Chou En Lai",
    },
    {
      image:
        "https://bdun.org/wp-content/uploads/2019/08/Bangabandhu-11_Bangabandhu-at-OIC-Summit-in-Lahore-1974.jpg",
      caption: "Bangabandhu at OIC summit Lahore, 1974",
    },
    {
      image:
        "https://bdun.org/wp-content/uploads/2019/08/Bangabandhu-12_Bangabandhu-with-the-Ameer-of-Kuwait.jpg",
      caption: "Bangabandhu with Amir of Kuwait",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="home">
      <div style={{ textAlign: "center" }}>
        <h2>BANGABANDHU GALLERY</h2>
        <p>
          Bangabandhu Gallery has the historic photographs and images on
          Bangabandhu Sheikh Mujibur Rahman taken by different sources during
          his life time.
        </p>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BangabandhuGallery;
