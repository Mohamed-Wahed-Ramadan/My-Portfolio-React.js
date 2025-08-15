import React, { useState, useRef, useEffect } from "react";
import "./AIChatBot.css";

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  const chatContainerRef = useRef(null);
  const lastMessageRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const reply = getBotReply(input.toLowerCase());

    setMessages((prevMessages) => [...prevMessages, userMsg, { sender: "bot", text: reply }]);
    setInput("");
  };

  const getBotReply = (msg) => {
    if (msg.includes("محمد وحيد")||msg.includes("وحيد") ||msg.includes("بدأ ازاى ")) {
      return `محمد وحيد رمضان، مهندس اتصالات واليكترونيات يعمل في مجال تطوير صفحات الويب.
.NET Full stack Developer،
وعنده خبرات في:
HTML, CSS, JavaScript, Bootstrap, Media Query, JQuery, React.js, GSAP, SQL ,C# ,OOP, ASP.NET Core, ASP.NET MVC, Web API, Entity
Framework , Angular.
واشتغل على مشاريع واجهات أمامية.
حصل على تدريب (Internship) at Black Horse Courses Academy.
هو اخد منحه ITI فى تراك Web development full stack using .NET `;
    } else if (msg.includes("المهارات") || msg.includes("بتعرف")) {
      return "أجيد HTML, CSS, JavaScript, Bootstrap, Media Query,JQuery, React.js, Next.js, GSAP, SQL , C# ,OOP, ASP.NET Core, ASP.NET MVC, Web API, Entity Framework، مع خلفية قوية في شبكات CCNA.";
    } else if (msg.includes("github") || msg.includes("لينكدإن") || msg.includes("مشاريع")) {
      return "ممكن تزورني على:\n🔗 GitHub: [رابط الجيت هاب]\n🔗 LinkedIn: [رابط لينكدإن]";
    } else if (msg.includes("بحبك")) {
      return ".انت كحيان روح جربها فى chatGPT هيقولك وانا كمان، انما شغل المياصه ده مش عندى";
    } else if (msg.includes("وحشتنى")) {
      return "انت كحيااان روح شوفلك حد يعبرك ، الله يصلح حالك";
    } else if (msg.includes("جاهز للعمل") || msg.includes("العمل")) {
      return "محمد وحيد جاهز للعمل ويمكنه البدء فى اقرب وقت";
    } else if (msg.includes("شكرا")) {
      return "العفو يمكنك زياره الموقع فى اى وقت ويمكنك التواصل مع محمد وحيد عن طريق طرق التواصل الموجوده بالصفحه . شكرا لزيارتك";
    } else if (msg.includes("طولة") || msg.includes("وزنة")) {
      return "محمد طوله 172 سم ووزنة 70 كجم";
    } else if (msg.includes("سنة") || msg.includes("عمرة")) {
      return "محمد عمرة 25 سنة";
    } else if (msg.includes("خريج") || msg.includes("جامعة") || msg.includes("مؤهل") || msg.includes("القسم")) {
      return "محمد متخرج من المعهد العالى للهندسه والتكنولوجيا بالاقصر قسم اتصالات واليكترونيات بتقدير عام جيد جدا عام 2023 وكمان مشروع التخرج كان تقديرة امتياز ";
    } else if (msg.includes("مشروع التخرج")) {
      return "مشروع التخرج بتاع محمد كان عباره عن درون مائى بيتم التحكم فيه عن بعد , ليه وظائف كتير منها السياحه والانقاذ النهرى والبحرى وصيانه واصلاح المراكب والسفن وكشف اعطال انابيب البترول";
    } else if (msg.includes("منحة") || msg.includes("internship")) {
      return "محمد اخد تدريب فى اكادميه بلاك هورس فى تصاميم الواجهات الاماميه وانجزها بتقدير امتياز ، كمان هو عمل مشاريع كتير جدا اثناء المنحة دى تقدر تشوفها فى اخر الصحه او ممكن تزور حسابه على لينكدان او جيت هاب";
    } else {
      return "أنا جاهز أجاوب على أي سؤال يخص محمد وحيد !";
    }
  };

  const handleScroll = () => {
    const container = chatContainerRef.current;
    if (!container) return;

    const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 50;
    setIsUserScrolling(!isAtBottom);
  };

  useEffect(() => {
    if (!isUserScrolling) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <div className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src="./img/chatpot.png" alt="chatpot" className="chatbot-img"/>
      </div>

      {isOpen && (
        <div className="chat-box">
          <div
            className="chat-messages"
            ref={chatContainerRef}
            onScroll={handleScroll}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={lastMessageRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="اسأل عن محمد وحيد..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}><i className="bi bi-send fs-5"></i></button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatBot;
