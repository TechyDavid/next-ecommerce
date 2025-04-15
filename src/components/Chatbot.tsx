const Chatbot = () => {
    return (
        <div className="">
         <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
          intent="WELCOME"
          chat-title="Faqbot"
          agent-id="286cffad-d80e-4ab1-bfe9-3d80638f716f"
          language-code="en"
    ></df-messenger>
        </div>
    )
}
export default Chatbot;
