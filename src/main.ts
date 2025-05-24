import "./main.css";

interface IProps {
  token?: string;
}

interface ReadmexChat {
  initReadmexChat: (props?: IProps) => void;
}

interface Window {
  ReadmexChat?: ReadmexChat;
}

function initReadmexChat(props?: IProps) {

  if (typeof document === "undefined") {
    return;
  }

  // 创建挂载点
  const elm = document.createElement("div");
  elm.className = "readmex-input-box";
  document.body.appendChild(elm);

  // 创建form元素
  const form = document.createElement("form");
  form.className = "readmex-form";
  form.id = "readmex-form";
  form.name = "readmex-form";
  elm.appendChild(form);

  // 创建多行输入框
  const textarea = document.createElement("textarea");
  textarea.className = "readmex-textarea";
  textarea.id = "readmex-message";
  textarea.name = "message";
  textarea.placeholder = "我是 ReadmeX 智能助手，有什么可以帮你的？";
  form.appendChild(textarea);

  // 添加回车发送功能
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      form.dispatchEvent(new Event("submit"));
    }
  });

  const sendBox = document.createElement("div");
  sendBox.style.display = "flex";
  sendBox.style.justifyContent = "flex-end";
  form.appendChild(sendBox);

  // 创建按钮
  const sendButton = document.createElement("button");
  sendButton.type = "submit";
  sendButton.className = "readmex-send-button";
  sendButton.innerHTML = '<svg fill="#fff" t="1748070948966" class="icon" viewBox="0 0 1066 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="966" width="20" height="20"><path d="M554.13722112 827.05825223a38.83614777 38.83614777 0 0 0 38.83614777-38.8361489V329.51864889l174.42284999 174.42284999a38.83614777 38.83614777 0 0 0 54.90460445-54.95314887l-240.68702778-240.68702891a38.83614777 38.83614777 0 0 0-54.90460444 0l-240.73557333 240.68702891a38.83614777 38.83614777 0 1 0 54.95315001 54.95314887l174.37430442-174.42284999v458.60636444a38.83614777 38.83614777 0 0 0 38.83614891 38.83614777z" p-id="967"></path></svg>';
  sendBox.appendChild(sendButton);

  // form提交事件
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = textarea.value.trim();
    if (!message) return;

    if(!props?.token) {
      const a = 'https://www.cnblogs.com/changelzj/p/18893870';
      window.location.href = `http://localhost:3333/interlayer?url=${encodeURIComponent(a)}&input=${encodeURIComponent(message)}`;
    }else {
      window.open(`https://readmex.com/interlayer?url=${encodeURIComponent(window.location.href)}&input=${encodeURIComponent(message)}`, '_blank');
    }

    textarea.value = '';
  });
}

if (typeof window !== "undefined" && !(window as Window).ReadmexChat) {
  (window as Window).ReadmexChat = {
    initReadmexChat,
  };
}
