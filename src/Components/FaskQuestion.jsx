import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const FrequentlyAskQuestion = [
  {
    id: 1,
    Question: "What is Netflix?",
    ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    id: 2,
    Question: "How much does Netflix cost?",
    ans: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    Question: "Where can I Watch?",
    ans: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    id: 4,
    Question: "How Do I cancel?",
    ans: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    Question: "What can I Watch on Netflix",
    ans: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: 6,
    Question: "Is Netflix good for kids?",
    ans: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];
function FaskQuestion() {
  const [toggle, setToggle] = useState(null);
  const TabsFun = (i) => {
    if (toggle == i) {
      setToggle(null);
    }
    setToggle(i);
  };
  return (
    <div className="bg-black text-white">
      <div className="container py-10">
        {/* Heading Header */}
        <div className="flex justify-center pb-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Frequently Asked Questions
          </h1>
        </div>
        {/* Frequetly ask question section */}
        {FrequentlyAskQuestion.map((data, i) => (
          <div key={data.id}>
            <div className="flex  flex-col">
              <div
                onClick={() => TabsFun(i)}
                className="flex gap-5 justify-between items-center p-[20px] bg-zinc-800 mt-2 hover:bg-zinc-700 cursor-pointer"
              >
                <p className="text-lg sm:text-xl font-semibold">
                  {data.Question}
                </p>
                {toggle == i ? (
                  <RxCross1 className="text-lg sm:text-xl font-semibold duration-300" />
                ) : (
                  <FaPlus className="text-lg sm:text-xl font-semibold duration-300" />
                )}
              </div>
              <div
                className={
                  toggle == i
                    ? "p-[7px] bg-zinc-800 border-t-2 border-zinc-950 duration-300 transition-all"
                    : "hidden duration-300 transition-all"
                }
              >
                <p className="text-lg sm:text-xl py-2 font-semibold">
                  {data.ans}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Email Section */}
        <div className="flex flex-col justify-center my-9 text-center">
          <h1 className="text-lg sm:text-xl ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4 pt-10">
            <input
              type="text"
              placeholder="Email address"
              className="px-[10px] py-[17px] w-[370px] bg-black/65 border border-white rounded-md"
            />
            <div>
              <button className="hover:bg-red-700 bg-red-600 text-xl duration-300 text-white px-4 py-4 w-[200px] rounded-md font-medium">
                Get Started &#129122;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-500"></div>
    </div>
  );
}

export default FaskQuestion;
