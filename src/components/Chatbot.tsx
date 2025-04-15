const Chatbot = () => {
    return (
        <div>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
<df-messenger
  chat-icon="https:&#x2F;&#x2F;mtu.edu.ng&#x2F;images&#x2F;home&#x2F;logo.svg"
  intent="WELCOME"
  chat-title="Faqbot"
  agent-id="286cffad-d80e-4ab1-bfe9-3d80638f716f"
  language-code="en"
></df-messenger>
       </div>
    )
}
export default Chatbot;
