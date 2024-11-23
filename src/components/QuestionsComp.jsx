import { useState } from "react";
import girlImage from "../images/girl1.jpg";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const QuestionsComp = () => {
  const [content, setContent] = useState([
    {
      id: 1,
      question: "Nasıl Rezervasyon yapabilirim?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing eli Neque atque nemo cum provident ex tenetur?",
      isOpened: false,
    },
    {
      id: 2,
      question: "Nasıl Ödeme Yapabilirim?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur vitae, rerum perspiciatis unde impedit dolores omnis a error eos explicabo perferendis, expedita enim.",
      isOpened: false,
    },
    {
      id: 3,
      question: "Bana Sunulan Ayrıcalıklar Nelerdir?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, delectus exercitationem blanditiis quae praesentium corporis dolores, consectetur, nam reiciendis sed omnis vitae.",
      isOpened: false,
    },
    {
      id: 4,
      question: "Neden Sizi Tercih Etmeliyim?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ut, facilis totam ratione cupiditate consequatur nesciunt! Minus, consectetur!",
      isOpened: false,
    },
  ]);

  const handleAccordion = (e) => {
      const newState = content.map((c) => {
        if(Number(c.id) === Number(e.target.id)) {
          return {...c, isOpened: !c.isOpened}
        } else {
          return c
        }
      })
      setContent(newState)

  };


  return (
    <div className="pt-16 pb-16">
      <div className="flex flex-row pl-12 pr-12 items-center xss:flex-col">
        <div className="w-2/3 xs:w-1/2 xss:w-3/4 flex items-center justify-center">
          <img src={girlImage} alt="" className="w-5/6 mmd:w-4/5 xss:w-fit rounded-3xl" />
        </div>
        <div className="w-1/3 xs:w-2/3 flex flex-col gap-2 xss:w-5/6">
          <div className="mb-4 xss:mb-2 xss:mt-4">
            <p className="text-4xl font-bold mds:text-2xl">Sıkça Sorulan Sorular</p>
          </div>
          {content?.map((c) => {
            return (
              <button className="border border-red-800 rounded-md p-2 pr-4 pl-4 flex flex-row gap-2 items-center justify-between" id={c.id} key={c.id} onClick={handleAccordion}>
                <div className="" id={c.id}>
                  <div className="flex flex-row" id={c.id}>
                    <p className={`text-xl mmd:text-lg p-1 mds:p-0 mds:text-sm text-start ${c.isOpened ? 'underline' : ''}`} id={c.id}>{c.question}</p>
                  </div>
                  {c.isOpened && (
                    <div id={c.id} className="flex items-start justify-start mds:text-xs">
                      <p id={c.id} className="text-start">{c.answer}</p>
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-red-900 mds:text-sm">{c.isOpened ? <FaMinus/> : <FaPlus/>}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionsComp;
