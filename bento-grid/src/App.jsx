import fiveStars from "./assets/images/illustration-five-stars.webp";
import multiplePlatforms from "./assets/images/illustration-multiple-platforms.webp";
import consistentSchedule from "./assets/images/illustration-consistent-schedule.webp";
import schedulePosts from "./assets/images/illustration-schedule-posts.webp";
import growFollowers from "./assets/images/illustration-grow-followers.webp";
import audienceGrowth from "./assets/images/illustration-audience-growth.webp";
import createPost from "./assets/images/illustration-create-post.webp";
import aiContent from "./assets/images/illustration-ai-content.webp";

function App() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 lg:grid lg:grid-cols-4 lg:grid-rows-3 xl:max-w-[1200px] xl:max-h-[850px]">
      <section className="bento-section bg-purple-500 text-white px-8 py-10 gap-5 lg:col-span-2 lg:col-start-2 lg:col-end-4">
        <h1 className="text-5xl font-medium text-center md:text-6xl">
          Social Media <span className="text-yellow-500">10x</span>{" "}
          <span className="italic">Faster</span> with AI
        </h1>
        <div className="flex flex-col justify-center items-center text-center gap-3">
          <img
            src={fiveStars}
            alt="Five stars"
            className="w-[150px] lg:w-[200px]"
          />
          <span>Over 4,000 5-star reviews</span>
        </div>
      </section>

      <section className="bento-section bg-white p-5 gap-5 lg:col-start-2 lg:row-start-2 lg:relative lg:overflow-hidden lg:justify-end">
        <img
          src={multiplePlatforms}
          alt="Instagram account with 12K followers and Twitter/X account with 8K followers"
          className="lg:absolute lg:scale-150 lg:left-[75px] lg:top-[50px] xl:scale-115 xl:left-[40px] xl:top-[30px] "
        />
        <h2>Manage multiple accounts and platforms.</h2>
      </section>

      <section className="bento-section bg-yellow-500 p-5 overflow-hidden relative h-[260px] lg:h-full lg:col-start-3 lg:row-start-2">
        <h2>Maintain a consistent posting schedule.</h2>
        <img
          src={consistentSchedule}
          alt="calender with the first four days of August selected"
          className="w-[250px] absolute -bottom-[20px] lg:scale-94 lg:left-[14px] xl:-bottom-[85px]"
        />
      </section>

      <section className="bento-section bg-purple-100 px-5 py-7 gap-5 text-center lg:row-span-2 lg:row-start-1 lg:row-end-3 lg:relative lg:justify-between lg:overflow-hidden lg:py-6">
        <h2 className="lg:text-left">Schedule to social media.</h2>
        <img
          src={schedulePosts}
          alt="schedule showing 6AM on a Monday being the most active and best time to post"
          className="md:w-[80%] md:mx-auto lg:w-full lg:absolute lg:scale-150 lg:left-[80px] lg:top-[45%] lg:-translate-y-[45%] xl:scale-130 xl:left-[60px]"
        />
        <p className="px-1 leading-6 lg:text-left">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </section>

      <section className="bento-section bg-purple-500 p-5 gap-5 lg:col-span-2 lg:row-start-3 lg:col-start-3 lg:col-end-5 lg:flex-row items-center">
        <img
          src={growFollowers}
          alt="follower growrth of 20,642"
          className="w-[265px] mx-auto"
        />
        <h3 className="text-center text-white text-4xl/8 font-medium lg:text-left">
          Grow followers with non-stop content.
        </h3>
      </section>

      <section className="bento-section bg-white p-5 gap-4 lg:col-start-2 lg:row-start-3 lg:justify-around">
        <div className="flex flex-col gap-3">
          <h4 className="text-5xl font-medium md:text-6xl">{">"}56%</h4>
          <span>faster audience growth</span>
        </div>
        <img src={audienceGrowth} alt="" className="w-[175px]" />
      </section>

      <div className="w-full flex flex-col gap-8 lg:row-span-3 col-start-1 lg:row-start-1 lg:row-end-4 lg:h-full">
        <section className="bento-section bg-yellow-100 p-5 gap-5 lg:justify-center">
          <h5>
            Create and schedule content{" "}
            <span className="italic text-purple-500">quicker.</span>
          </h5>
          <img src={createPost} alt="" className="w-[190px] lg:w-fit" />
        </section>
        <section className="bento-section bg-yellow-500 p-5 gap-5 lg:justify-between lg:py-8 lg:px-4">
          <h5>Write your content using AI.</h5>
          <img src={aiContent} alt="" className="w-[250px] lg:w-fit" />
        </section>
      </div>
    </main>
  );
}

export default App;
