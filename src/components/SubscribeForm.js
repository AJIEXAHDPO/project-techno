import  {useState} from "react";

const Subscribers = ["example@gmail.com"];

function SubscribeForm () {
  const [InputValue, setInputValue] = useState("");
    
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  
  const updateList = (list, user) => {
    const template = /.+@.+\.+./;
    if (!user.match(template)) return;
    for (let item of list) if (item === user) return;
    list.push(user);
    alert(Subscribers);
  }
    
  return (
      <form action="#" id="subscribe_form">
        <span className="alter">Subscribe to follow the news</span>
        <div>
          <input
            type="email"
            name="subscribe"
            id="subscribe"
            placeholder="Enter your Email and Subscribe"
            value={InputValue}
            onChange={handleChange}
          />
          <button 
            className="subscribe-bttn" 
            type="button"
            onClick={()=> {updateList(Subscribers, InputValue); setInputValue("");}}>
          </button>
        </div>
      </form>
    );
}

export default SubscribeForm;