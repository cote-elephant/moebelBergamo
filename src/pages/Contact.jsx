import { FaCarSide } from "react-icons/fa";

export function Contact() {
  return (
    <>
      <div></div>
      <div>
        <FaCarSide />
      </div>
      <div></div>
      <h1>Sagt Hallo</h1>
      <form>
        <label name="name">Name</label>
        <input type="text" name="name" />
        <label name="email">Email</label>
        <input type="email" name="email" />
        <label name="message">Message</label>
        <textarea type="text" name="message" />
        <button>Send</button>
      </form>
    </>
  );
}
